import {useState} from "react";

import {fib} from "../../shared/fib";

type Shape = "circle" | "triangle" | "square";

export function LargeComponent() {
    const [selectedShape, setSelectedShape] = useState("circle");
    const [selectedColor, setSelectedColor] = useState("red");
    const [colors, setColors] = useState({
        circle: "red",
        triangle: "green",
        square: "blue",
    });

    const [circleCount, setCircleCount] = useState(0);
    const [triangleCount, setTriangleCount] = useState(0);
    const [squareCount, setSquareCount] = useState(0);

    const n = 35;

    const circle = (
        <>
            <h2>Circle</h2>
            <p>
                fib({n}) = {fib(n)}
            </p>
            <button onClick={() => setCircleCount((count) => count + 1)}>
                Click me! ({circleCount})
            </button>
            <svg width={160} height={160} viewBox="0,0,160,160">
                <circle fill={colors.circle} r={50} cx={80} cy={80} />
            </svg>
        </>
    );

    const triangle = (
        <>
            <h2>Triangle</h2>
            <p>
                fib({n}) = {fib(n)}
            </p>
            <button onClick={() => setTriangleCount((count) => count + 1)}>
                Click me! ({triangleCount})
            </button>
            <svg width={160} height={160} viewBox="0,0,160,160">
                <path fill={colors.triangle} d="M20,20L20,120L120,120Z" />
            </svg>
        </>
    );

    const square = (
        <>
            <h2>Square</h2>
            <p>
                fib({n}) = {fib(n)}
            </p>
            <button onClick={() => setSquareCount((count) => count + 1)}>
                Click me! ({squareCount})
            </button>
            <svg width={160} height={160} viewBox="0,0,160,160">
                <rect
                    fill={colors.square}
                    x={20}
                    y={20}
                    width={120}
                    height={120}
                />
            </svg>
        </>
    );

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
            {circle}
            {triangle}
            {square}
        </div>
    );
}
