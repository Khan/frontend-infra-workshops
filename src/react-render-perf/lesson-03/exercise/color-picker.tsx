import * as React from "react";

import Grid from "./grid";
import {ColorPickerContext} from "./color-picker-context";

export default function ColorPicker() {
    const [color, setColor] = React.useState<string | undefined>(undefined);
    const colorPickerEventEmitter = React.useContext(ColorPickerContext)!;
    React.useEffect(() => {
        return colorPickerEventEmitter.onSelectedColorChange(setColor);
    }, []);

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
