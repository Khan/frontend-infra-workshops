import {useContext, useState} from "react";

import {Color, toCssColor} from "../../shared/color";
import {ColorPickerContext} from "./color-picker-context";

type Props = {
    color: Color;
    size: number;
};

export function Swatch({color, size}: Props) {
    const colorPickerEventEmitter = useContext(ColorPickerContext)!;
    const [isSelected, setIsSelected] = useState(false);

    colorPickerEventEmitter.onColorChange(toCssColor(color), setIsSelected);

    return (
        <div
            style={{
                width: size,
                height: size,
                background: toCssColor(color),
                boxSizing: "border-box",
                border: isSelected ? "1px solid black" : "none",
            }}
            onClick={() =>
                colorPickerEventEmitter.selectColor(toCssColor(color))
            }
        />
    );
}
