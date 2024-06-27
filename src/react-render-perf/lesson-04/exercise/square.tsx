import {useState} from "react";
import {fib} from "../../shared/fib";

export const Square = ({n, color}: {n: number; color: string}) => {
    const [squareCount, setSquareCount] = useState(0);
    return (
        <>
            <h2>Square</h2>
            <p>
                fib({n}) = {fib(n)}
            </p>
            <button onClick={() => setSquareCount((count) => count + 1)}>
                Click me! ({squareCount})
            </button>
            <svg width={160} height={160} viewBox="0,0,160,160">
                <rect fill={color} x={20} y={20} width={120} height={120} />
            </svg>
        </>
    );
};
