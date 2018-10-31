// This file is generated through a build task. Do not edit by hand.

export module DocumentationResources {
    export const Array = "This class provides a way of storing more than one value for a given name. These values can be accessed by another index.";
    export const Array_ContainsIndex = "Gets whether or not the array contains the specified index. This is very useful when deciding if the array's index was initialized by some value or not.";
    export const Array_ContainsIndex_Array = "The array to check.";
    export const Array_ContainsIndex_Index = "The index to check.";
    export const Array_ContainsValue = "Gets whether or not the array contains the specified value. This is very useful when deciding if the array's value was stored in some index.";
    export const Array_ContainsValue_Array = "The array to check.";
    export const Array_ContainsValue_Index = "The index to check.";
    export const Array_GetAllIndices = "Gets all the indices for the array, as another array. The index of the returned array starts from 1.";
    export const Array_GetAllIndices_Array = "The array whose indices are requested.";
    export const Array_GetItemCount = "Gets the count of all the items in the array.";
    export const Array_GetItemCount_Array = "The array whose item count is requested.";
    export const Array_IsArray = "Checks whether the value passed is an array or not.";
    export const Array_IsArray_Value = "The value to check.";
    export const Clock = "This class provides access to the system clock.";
    export const Clock_Time = "Gets the current system time.";
    export const Controls = "The Controls object allows you to add, move and interact with controls.";
    export const Controls_LastClickedButton = "Gets the last Button that was clicked on the Graphics Window.";
    export const Controls_LastTypedTextBox = "Gets the last TextBox, text was typed into.";
    export const Controls_ButtonClicked = "Raises an event when any button control is clicked.";
    export const Controls_TextTyped = "Raises an event when text is typed into any TextBox control.";
    export const Controls_AddButton = "Adds a button to the graphics window at the specified position, and returns it.";
    export const Controls_AddButton_Caption = "The caption to display in the button.";
    export const Controls_AddButton_Left = "The x co-ordinate of the button.";
    export const Controls_AddButton_Top = "The y co-ordinate of the button.";
    export const Controls_GetButtonCaption = "Gets the current caption of the specified button.";
    export const Controls_GetButtonCaption_ButtonName = "The Button whose caption is requested.";
    export const Controls_SetButtonCaption = "Sets the caption of the specified button.";
    export const Controls_SetButtonCaption_ButtonName = "She Button whose caption needs to be set.";
    export const Controls_SetButtonCaption_Caption = "The new caption for the button.";
    export const Controls_AddTextBox = "Adds a text input box to the graphics window at the specified position, and returns it.";
    export const Controls_AddTextBox_Left = "The x co-ordinate of the text box.";
    export const Controls_AddTextBox_Top = "The y co-ordinate of the text box.";
    export const Controls_AddMultiLineTextBox = "Adds a multi-line text input box to the graphics window at the specified position, and returns it.";
    export const Controls_AddMultiLineTextBox_Left = "The x co-ordinate of the text box.";
    export const Controls_AddMultiLineTextBox_Top = "The y co-ordinate of the text box.";
    export const Controls_GetTextBoxText = "Gets the current text of the specified TextBox.";
    export const Controls_GetTextBoxText_TextBoxName = "The TextBox whose text is requested.";
    export const Controls_SetTextBoxText = "Sets the text of the specified TextBox.";
    export const Controls_SetTextBoxText_TextBoxName = "The TextBox whose text needs to be set.";
    export const Controls_SetTextBoxText_Text = "The new text for the TextBox.";
    export const Controls_Remove = "Removes a control from the Graphics Window.";
    export const Controls_Remove_ControlName = "The name of the control that needs to be removed.";
    export const Controls_Move = "Moves the control with the specified name to a new position.";
    export const Controls_Move_Control = "The name of the control to move.";
    export const Controls_Move_X = "The x co-ordinate of the new position.";
    export const Controls_Move_Y = "The y co-ordinate of the new position.";
    export const Controls_SetSize = "Sets the size of the control.";
    export const Controls_SetSize_Control = "The name of the control to be resized.";
    export const Controls_SetSize_Width = "The width of the control.";
    export const Controls_SetSize_Height = "The height of the control.";
    export const Controls_HideControl = "Hides an already added control.";
    export const Controls_HideControl_ControlName = "The name of the control.";
    export const Controls_ShowControl = "Shows a previously hidden control.";
    export const Controls_ShowControl_ControlName = "The name of the control.";
    export const Math = "The Math class provides lots of useful mathematics related methods.";
    export const Math_Pi = "Gets the value of Pi.";
    export const Math_Abs = "Gets the absolute value of the given number. For example, -32.233 will return 32.233.";
    export const Math_Abs_Number = "The number to get the absolute value for.";
    export const Math_Remainder = "Divides the first number by the second and returns the remainder.";
    export const Math_Remainder_Dividend = "The number to divide.";
    export const Math_Remainder_Divisor = "The number that divides.";
    export const Math_Cos = "Gets the cosine of the given angle in radians.";
    export const Math_Cos_Angle = "The angle whose cosine is needed (in radians).";
    export const Math_Sin = "Gets the sine of the given angle in radians.";
    export const Math_Sin_Angle = "The angle whose sine is needed (in radians).";
    export const Math_Tan = "Gets the tangent of the given angle in radians.";
    export const Math_Tan_Angle = "The angle whose tangent is needed (in radians).";
    export const Math_ArcCos = "Gets the angle in radians, given the cosine value.";
    export const Math_ArcCos_CosValue = "The cosine value whose angle is needed.";
    export const Math_ArcSin = "Gets the angle in radians, given the sine value.";
    export const Math_ArcSin_SinValue = "The sine value whose angle is needed.";
    export const Math_ArcTan = "Gets the angle in radians, given the tangent value.";
    export const Math_ArcTan_TanValue = "The tangent value whose angle is needed.";
    export const Math_Ceiling = "Returns the smallest integer that is greater than or equal to the argument. It rounds up the integer value. For example, 32.233 will return 33. Also, 44 will return 44.";
    export const Math_Ceiling_Number = "The number whose ceiling is required.";
    export const Math_Floor = "Returns the largest integer that is less than or equal to the argument. It rounds down the integer value. For example, 32.233 will return 32. Also, 44 will return 44.";
    export const Math_Floor_Number = "The number whose floor value is required.";
    export const Math_Round = "Rounds a given number to the nearest integer. For example 32.233 will be rounded to 32.0 while 32.566 will be rounded to 33.";
    export const Math_Round_Number = "The number whose approximation is required.";
    export const Math_GetDegrees = "Converts a given angle in radians to degrees.";
    export const Math_GetDegrees_Angle = "The angle in radians.";
    export const Math_GetRadians = "Converts a given angle in degrees to radians.";
    export const Math_GetRadians_Angle = "The angle in degrees.";
    export const Math_GetRandomNumber = "Gets a random number between 1 and the specified maxNumber (inclusive).";
    export const Math_GetRandomNumber_MaxNumber = "The maximum number for the requested random value.";
    export const Math_Log = "Gets the logarithm (base 10) value of the given number.";
    export const Math_Log_Number = "The number whose logarithm value is required.";
    export const Math_NaturalLog = "Gets the natural logarithm value of the given number.";
    export const Math_NaturalLog_Number = "The number whose natural logarithm value is required.";
    export const Math_Max = "Compares two numbers and returns the greater of the two.";
    export const Math_Max_Number1 = "The first of the two numbers to compare.";
    export const Math_Max_Number2 = "The second of the two numbers to compare.";
    export const Math_Min = "Compares two numbers and returns the smaller of the two.";
    export const Math_Min_Number1 = "The first of the two numbers to compare.";
    export const Math_Min_Number2 = "The second of the two numbers to compare.";
    export const Math_Power = "Raises the base number to the specified power.";
    export const Math_Power_BaseNumber = "The number to be raised to the exponent power.";
    export const Math_Power_Exponent = "The power to raise the base number.";
    export const Math_SquareRoot = "Gets the square root of a given number.";
    export const Math_SquareRoot_Number = "The number whose square root value is needed.";
    export const Program = "The Program class provides helpers to control the program execution.";
    export const Program_Pause = "Pauses the program execution for debugging.";
    export const Program_End = "Ends the program.";
    export const Shapes = "The Shape object allows you to add, move and rotate shapes to the Graphics window.";
    export const Shapes_AddRectangle = "Adds a rectangle shape with the specified width and height, and returns it.";
    export const Shapes_AddRectangle_Width = "The width of the rectangle shape.";
    export const Shapes_AddRectangle_Height = "he height of the rectangle shape.";
    export const Shapes_AddEllipse = "Adds an ellipse shape with the specified width and height, and returns it.";
    export const Shapes_AddEllipse_Width = "The width of the ellipse shape.";
    export const Shapes_AddEllipse_Height = "he height of the ellipse shape.";
    export const Shapes_AddTriangle = "Adds a triangle shape represented by the specified points, and returns it.";
    export const Shapes_AddTriangle_X1 = "The x co-ordinate of the first point.";
    export const Shapes_AddTriangle_Y1 = "The y co-ordinate of the first point.";
    export const Shapes_AddTriangle_X2 = "The x co-ordinate of the second point.";
    export const Shapes_AddTriangle_Y2 = "The y co-ordinate of the second point.";
    export const Shapes_AddTriangle_X3 = "The x co-ordinate of the third point.";
    export const Shapes_AddTriangle_Y3 = "The y co-ordinate of the third point.";
    export const Shapes_AddLine = "Adds a line between the specified points.";
    export const Shapes_AddLine_X1 = "The x co-ordinate of the first point.";
    export const Shapes_AddLine_Y1 = "The y co-ordinate of the first point.";
    export const Shapes_AddLine_X2 = "The x co-ordinate of the second point.";
    export const Shapes_AddLine_Y2 = "The y co-ordinate of the second point.";
    export const Shapes_AddImage = "Adds an image as a shape that can be moved, animated or rotated, and returns it.";
    export const Shapes_AddImage_ImageName = "The name of the image to draw.";
    export const Shapes_AddText = "Adds some text as a shape that can be moved, animated or rotated, and returns it.";
    export const Shapes_AddText_Text = "The text to add.";
    export const Shapes_SetText = "Sets the text of a text shape.";
    export const Shapes_SetText_ShapeName = "The name of the text shape.";
    export const Shapes_SetText_Text = "The new text value to set.";
    export const Shapes_Remove = "Removes a shape from the Graphics Window.";
    export const Shapes_Remove_ShapeName = "The name of the shape that needs to be removed.";
    export const Shapes_Move = "Moves the shape with the specified name to a new position.";
    export const Shapes_Move_ShapeName = "The name of the shape to move.";
    export const Shapes_Move_X = "The x co-ordinate of the new position.";
    export const Shapes_Move_Y = "The y co-ordinate of the new position.";
    export const Shapes_Rotate = "Rotates the shape with the specified name to the specified angle.";
    export const Shapes_Rotate_ShapeName = "The name of the shape to rotate.";
    export const Shapes_Rotate_Angle = "The angle to rotate the shape.";
    export const Shapes_Zoom = "Scales the shape using the specified zoom levels.  Minimum is 0.1 and maximum is 20.";
    export const Shapes_Zoom_ShapeName = "The name of the shape to zoom.";
    export const Shapes_Zoom_ScaleX = "The x-axis zoom level.";
    export const Shapes_Zoom_ScaleY = "The y-axis zoom level.";
    export const Shapes_Animate = "Animates a shape with the specified name to a new position.";
    export const Shapes_Animate_ShapeName = "The name of the shape to move.";
    export const Shapes_Animate_X = "The x co-ordinate of the new position.";
    export const Shapes_Animate_Y = "The y co-ordinate of the new position.";
    export const Shapes_Animate_Duration = "The time for the animation, in milliseconds.";
    export const Shapes_GetLeft = "Gets the left co-ordinate of the specified shape.";
    export const Shapes_GetLeft_ShapeName = "The name of the shape.";
    export const Shapes_GetTop = "Gets the top co-ordinate of the specified shape.";
    export const Shapes_GetTop_ShapeName = "The name of the shape.";
    export const Shapes_GetOpacity = "Gets the opacity of a shape.";
    export const Shapes_GetOpacity_ShapeName = "The name of the shape.";
    export const Shapes_SetOpacity = "Sets how opaque a shape should render.";
    export const Shapes_SetOpacity_ShapeName = "The name of the shape.";
    export const Shapes_SetOpacity_Level = "The opacity level ranging from 0 to 100.  0 is completely transparent and 100 is completely opaque.";
    export const Shapes_HideShape = "Hides an already added shape.";
    export const Shapes_HideShape_ShapeName = "The name of the shape.";
    export const Shapes_ShowShape = "Shows a previously hidden shape.";
    export const Shapes_ShowShape_ShapeName = "The name of the shape.";
    export const Sound = "The Sound object provides operations that allow the playback of sounds. Some sample sounds are provided along with the library.";
    export const Sound_PlayClick = "Plays the Click Sound.";
    export const Sound_PlayClickAndWait = "Plays the Click Sound and waits for it to finish.";
    export const Sound_PlayChime = "Plays the Chime Sound. ";
    export const Sound_PlayChimeAndWait = "Plays the Chime Sound and waits for it to finish.";
    export const Sound_PlayChimes = "Plays the Chimes Sound.";
    export const Sound_PlayChimesAndWait = "Plays the Chimes Sound and waits for it to finish.";
    export const Sound_PlayBellRing = "Plays the Bell Ring Sound.";
    export const Sound_PlayBellRingAndWait = "Plays the Bell Ring Sound and waits for it to finish.";
    export const Sound_PlayMusic = "Plays musical notes.";
    export const Sound_PlayMusic_Notes = "A set of musical notes to play. The format is a subset of the Music Macro Language supported by QBasic.";
    export const Sound_Play = "Plays the Click Sound.";
    export const Sound_Play_FilePath = "";
    export const Sound_PlayAndWait = "Plays an audio file and waits until it is finished playing. This could be an mp3, wav, or wma file. Other file formats may or may not play depending on the audio codecs installed on the user's computer. If the file was already paused, this operation will resume from the position where the playback was paused.";
    export const Sound_PlayAndWait_FilePath = "The path for the audio file. This could either be a local file (e.g.: c:\music\track1.mp3) or a file on the network (e.g.: http://contoso.com/track01.wma).";
    export const Sound_Pause = "Pauses playback of an audio file. If the file was not already playing, this operation will not do anything.";
    export const Sound_Pause_FilePath = "The path for the audio file. This could either be a local file (e.g.: c:\music\track1.mp3) or a file on the network (e.g.: http://contoso.com/track01.wma).";
    export const Sound_Stop = "Stops playback of an audio file. If the file was not already playing, this operation will not do anything.";
    export const Sound_Stop_FilePath = "The path for the audio file. This could either be a local file (e.g.: c:\music\track1.mp3) or a file on the network (e.g.: http://contoso.com/track01.wma).";
    export const Stack = "This object provides a way of storing values just like stacking up a plate. You can push a value to the top of the stack and pop it off. You can only pop the values one by one off the stack and the last pushed value will be the first one to pop out.";
    export const Stack_PushValue = "Pushes a value to the specified stack.";
    export const Stack_PushValue_StackName = "The name of the stack.";
    export const Stack_PushValue_Value = "The value to push.";
    export const Stack_GetCount = "Gets the count of items in the specified stack.";
    export const Stack_GetCount_StackName = "The name of the stack.";
    export const Stack_PopValue = "Pops a value from the specified stack.";
    export const Stack_PopValue_StackName = "The name of the stack.";
    export const TextWindow = "The TextWindow provides text-related input and output functionalities. For example using this class, it is possible to write or read some text or number to and from the text-based text window.";
    export const TextWindow_Read = "Reads a line of text from the text window. Returns the string entered by the user.";
    export const TextWindow_ReadNumber = "Reads a number from the text window. Returns the number entered by the user.";
    export const TextWindow_Write = "Writes a string or a number to the text window on the same line.";
    export const TextWindow_Write_Data = "The string or number to be written to the text window.";
    export const TextWindow_WriteLine = "Writes a string or a number to the text window on its own line.";
    export const TextWindow_WriteLine_Data = "The string or number to be written to the text window.";
    export const TextWindow_ForegroundColor = "Gets or sets the foreground color of the text to be output in the text window.";
    export const TextWindow_BackgroundColor = "Gets or sets the background color of the text to be output in the text window.";
    export const Turtle = "The Turtle provides Logo-like functionality to draw shapes by manipulating the properties of a pen and drawing primitives.";
    export const Turtle_Speed = "Specifies how fast the turtle should move. Valid values are 1 to 10. If Speed is set to 10, the turtle moves and rotates instantly.";
    export const Turtle_Angle = "Gets or sets the current angle of the turtle. While setting, this will turn the turtle instantly to the new angle.";
    export const Turtle_X = "Gets or sets the X location of the Turtle. While setting, this will move the turtle instantly to the new location.";
    export const Turtle_Y = "Gets or sets the Y location of the Turtle. While setting, this will move the turtle instantly to the new location.";
    export const Turtle_Show = "Shows the turtle.";
    export const Turtle_Hide = "Hides the turtle.";
    export const Turtle_PenDown = "Sets the pen down to enable the turtle to draw as it moves.";
    export const Turtle_PenUp = "Lifts the pen up to stop drawing as the turtle moves.";
    export const Turtle_Move = "Moves the turtle to a specified distance.  If the pen is down, it will draw a line as it moves.";
    export const Turtle_Move_Distance = "The distance to move the turtle.";
    export const Turtle_MoveTo = "Turns and moves the turtle to the specified location.  If the pen is down, it will draw a line as it moves.";
    export const Turtle_MoveTo_X = "The x co-ordinate of the destination point.";
    export const Turtle_MoveTo_Y = "The y co-ordinate of the destination point.";
    export const Turtle_Turn = "Turns the turtle by the specified angle. Angle is in degrees and can be either positive or negative. If the angle is positive, the turtle turns to its right. If it is negative, the turtle turns to its left.";
    export const Turtle_Turn_Angle = "The angle to turn the turtle.";
    export const Turtle_TurnLeft = "Turns the turtle 90 degrees to the left.";
    export const Turtle_TurnRight = "Turns the turtle 90 degrees to the right.";

    export function get(key: string): string {
        return (<any>DocumentationResources)[key];
    }
}
