import {useContext, useState} from "react";

import Grid from "./grid";
import {ColorPickerContext} from "./color-picker-context";

export function ColorPicker() {
    const [color, setColor] = useState<string | undefined>(undefined);
    const colorPickerEventEmitter = useContext(ColorPickerContext)!;
    colorPickerEventEmitter.onSelectedColorChange(setColor);

    return (
        <div>
            <Grid
                topLeft={{red: 0, green: 0, blue: 256}}
                topRight={{red: 256, green: 0, blue: 256}}
                bottomLeft={{red: 0, green: 256, blue: 256}}
                bottomRight={{red: 256, green: 256, blue: 256}}
                steps={64} /* the larger the number the worse performance */
            />
            current color = {color ? color : "none"}
        </div>
    );
}
