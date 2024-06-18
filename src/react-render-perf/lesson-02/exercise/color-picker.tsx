import {useContext, useState} from "react";

import {Grid} from "./grid";
import {ColorPickerContext} from "./color-picker-context";
import {Color, toCssColor} from "../../shared/color";

export function ColorPicker() {
    const [color, setColor] = useState<Color | undefined>(undefined);
    const emitter = useContext(ColorPickerContext);

    // TODO only do this once? deregister?
    emitter?.on("color", setColor);

    return (
        <div>
            <Grid
                topLeft={{red: 0, green: 0, blue: 256}}
                topRight={{red: 256, green: 0, blue: 256}}
                bottomLeft={{red: 0, green: 256, blue: 256}}
                bottomRight={{red: 256, green: 256, blue: 256}}
                steps={64} /* the larger the number the worse performance */
            />
            current color = {color ? toCssColor(color) : "none"}
        </div>
    );
}
