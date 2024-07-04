import {useState} from "react";

import Grid from "./grid";
import {ColorPickerContext} from "./color-picker-context";
import {Color, toCssColor} from "../../shared/color";

export default function ColorPicker() {
    const [color, setColor] = useState<Color | undefined>(undefined);

    return (
        <div>
            <ColorPickerContext.Provider value={{color, setColor}}>
                <Grid
                    topLeft={{red: 0, green: 0, blue: 256}}
                    topRight={{red: 256, green: 0, blue: 256}}
                    bottomLeft={{red: 0, green: 256, blue: 256}}
                    bottomRight={{red: 256, green: 256, blue: 256}}
                    steps={64} /* the larger the number the worse performance */
                />
            </ColorPickerContext.Provider>
            current color = {color ? toCssColor(color) : "none"}
        </div>
    );
}
