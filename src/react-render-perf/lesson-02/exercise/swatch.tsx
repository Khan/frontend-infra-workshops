import {useContext, useState} from "react";

import {Color, toCssColor} from "../../shared/color";
import {ColorPickerContext} from "./color-picker-context";

type Props = {
    color: Color;
    size: number;
};

export function Swatch({color, size}: Props) {
    console.log("swatch");
    const emitter = useContext(ColorPickerContext);
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(true);
        emitter?.emit("color", color);
    };

    emitter?.on("color", (selectedColor) => {
        if (toCssColor(selectedColor) !== toCssColor(color)) {
            setIsSelected(false);
        }
    });

    return (
        <div
            style={{
                width: size,
                height: size,
                background: toCssColor(color),
                boxSizing: "border-box",
                border: isSelected ? "1px solid black" : "none",
            }}
            onClick={handleClick}
        />
    );
}
