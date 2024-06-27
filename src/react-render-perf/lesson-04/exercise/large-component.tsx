import {useState} from "react";

import {Circle} from "./circle";
import {Triangle} from "./triangle";
import {Square} from "./square";

type Shape = "circle" | "triangle" | "square";

export function LargeComponent() {
    const [selectedShape, setSelectedShape] = useState("circle");
    const [selectedColor, setSelectedColor] = useState("red");
    const [colors, setColors] = useState({
        circle: "red",
        triangle: "green",
        square: "blue",
    });

    const n = 35;

    const handleShapeChange = (shape: Shape) => {
        setSelectedShape(shape);
        setSelectedColor(colors[shape]);
    };

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
        setColors({
            ...colors,
            [selectedShape]: color,
        });
    };

    return (
        <div>
            <select
                onChange={(event) =>
                    handleShapeChange(event.target.value as Shape)
                }
            >
                <option value="circle">Circle</option>
                <option value="triangle">Triangle</option>
                <option value="square">Square</option>
            </select>
            <select
                onChange={(event) => handleColorChange(event.target.value)}
                value={selectedColor}
            >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
            <Circle n={n} color={colors.circle} />
            <Triangle n={n} color={colors.triangle} />
            <Square n={n} color={colors.square} />
        </div>
    );
}
