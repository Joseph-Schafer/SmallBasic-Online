import { MasterLayoutComponent } from "../common/master-layout";
import { ToolbarButton } from "../common/toolbar-button";
import * as React from "react";
import { EditorResources } from "../../../strings/editor";
import { RouteComponentProps, withRouter } from "react-router";
import { Compilation } from "../../../compiler/compilation";
import { AppState } from "../../store";
import { Dispatch, connect } from "react-redux";
import { ExecutionMode, ExecutionEngine } from "../../../compiler/execution-engine";
import { TextWindowComponent } from "../common/text-window/index";
import { GraphicsWindowComponent } from "../common/graphics-window/index";

const StopIcon = require("../../content/buttons/stop.png");

interface PropsFromState {
    compilation: Compilation;
    appInsights: Microsoft.ApplicationInsights.IAppInsights;
}

interface PropsFromDispatch {
}

interface PropsFromReact {
}

type PresentationalComponentProps = PropsFromState & PropsFromDispatch & PropsFromReact & RouteComponentProps<PropsFromReact>;

interface PresentationalComponentState {
    engine: ExecutionEngine;
}

class PresentationalComponent extends React.Component<PresentationalComponentProps, PresentationalComponentState> {
    private isAlreadyMounted: boolean = false;

    public constructor(props: PresentationalComponentProps) {
        super(props);

        if (!this.props.compilation.isReadyToRun) {
            this.props.history.push("/editor");
        }

        this.state = {
            engine: new ExecutionEngine(this.props.compilation)
        };
    }

    public componentDidMount(): void {
        this.isAlreadyMounted = true;
        this.props.appInsights.trackPageView("RunPage");
        setTimeout(this.execute.bind(this));
    }

    public componentWillUnmount(): void {
        this.isAlreadyMounted = false;
    }

    private execute(): void {
        if (this.isAlreadyMounted) {
            this.state.engine.execute(ExecutionMode.RunToEnd);
            setTimeout(this.execute.bind(this));
        }
    }

    public render(): JSX.Element {
        return (
            <MasterLayoutComponent
                toolbar={[
                    <ToolbarButton
                        title={EditorResources.ToolbarButton_Stop_Title}
                        description={EditorResources.ToolbarButton_Stop_Description}
                        image={StopIcon}
                        onClick={() => this.props.history.push("/editor")} />
                ]}
                masterContainer={
                    this.props.compilation.kind.drawsShapes
                        ?
                        <div className="container-column">
                            <div className="container-half-column">
                                <TextWindowComponent engine={this.state.engine} />
                            </div>
                            <div className="container-half-column">
                                <GraphicsWindowComponent engine={this.state.engine} />
                            </div>
                        </div>
                        :
                        <div className="container-column">
                            <TextWindowComponent engine={this.state.engine} />
                        </div>
                }
            />
        );
    }
}

function mapStateToProps(state: AppState): PropsFromState {
    return {
        compilation: state.compilation,
        appInsights: state.appInsights
    };
}

function mapDispatchToProps(_: Dispatch<AppState>): PropsFromDispatch {
    return {
    };
}

export const RunComponent = connect<PropsFromState, PropsFromDispatch, PropsFromReact, AppState>(mapStateToProps, mapDispatchToProps)(withRouter(PresentationalComponent as any));
