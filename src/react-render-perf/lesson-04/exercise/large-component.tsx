import {useState} from "react";

import {fib} from "../../shared/fib";

export function LargeComponent() {
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
                <circle fill="red" r={50} cx={80} cy={80} />
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
                <path fill="green" d="M20,20L20,120L120,120Z" />
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
                <rect fill="blue" x={20} y={20} width={120} height={120} />
            </svg>
        </>
    );

    return (
        <div>
            {circle}
            {triangle}
            {square}
        </div>
    );
}
