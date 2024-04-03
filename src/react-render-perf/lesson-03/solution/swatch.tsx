import {useEffect, useState} from "react";

import {Color, toCssColor} from "../../shared/color";
import {colorPickerEventEmitter} from "./color-picker-event-emitter";

type Props = {
    color: Color;
    size: number;
};

export function Swatch({color, size}: Props) {
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        return colorPickerEventEmitter.onColorChange(
            toCssColor(color),
            setIsSelected,
        );
    }, [color]);

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
