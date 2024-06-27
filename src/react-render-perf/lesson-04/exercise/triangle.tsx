import {useState} from "react";
import {fib} from "../../shared/fib";

export const Triangle = ({n, color}: {n: number; color: string}) => {
    const [triangleCount, setTriangleCount] = useState(0);

    return (
        <>
            <h2>Triangle</h2>
            <p>
                fib({n}) = {fib(n)}
            </p>
            <button onClick={() => setTriangleCount((count) => count + 1)}>
                Click me! ({triangleCount})
            </button>
            <svg width={160} height={160} viewBox="0,0,160,160">
                <path fill={color} d="M20,20L20,120L120,120Z" />
            </svg>
        </>
    );
};
