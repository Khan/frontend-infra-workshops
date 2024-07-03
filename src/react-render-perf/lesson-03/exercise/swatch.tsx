import {useContext, useEffect, useState} from "react";

import {Color, toCssColor} from "../../shared/color";
import {ColorPickerContext} from "./color-picker-context";

type Props = {
    color: Color;
    size: number;
};

export default function Swatch({color, size}: Props) {
    const colorPickerEventEmitter = useContext(ColorPickerContext)!;
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        return colorPickerEventEmitter.onColorChange(
            toCssColor(color),
            setIsSelected,
        );
    }, [color, colorPickerEventEmitter]);

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
