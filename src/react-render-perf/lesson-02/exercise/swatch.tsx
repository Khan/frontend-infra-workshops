import {useContext} from "react";

import {Color, toCssColor} from "../../shared/color";
import {ColorPickerContext} from "./color-picker-context";

type Props = {
    color: Color;
    size: number;
};

export function Swatch({color, size}: Props) {
    const {setColor, color: selectedColor} = useContext(ColorPickerContext)!;

    const isSelected =
        selectedColor &&
        selectedColor.red === color.red &&
        selectedColor.green === color.green &&
        selectedColor.blue === color.blue;

    return (
        <div
            style={{
                width: size,
                height: size,
                background: toCssColor(color),
                boxSizing: "border-box",
                border: isSelected ? "1px solid black" : "none",
            }}
            onClick={() => setColor(color)}
        />
    );
}
