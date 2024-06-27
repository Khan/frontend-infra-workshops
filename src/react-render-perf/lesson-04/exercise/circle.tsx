import {useState, memo} from "react";
import arePropsEqual from "react-fast-compare";
import {fib} from "../../shared/fib";

export const Circle = memo((props: {n: number; color: string}) => {
    const [circleCount, setCircleCount] = useState(0);
    return (
        <>
            <h2>Circle</h2>
            <p>
                fib({props.n}) = {fib(props.n)}
            </p>
            <button onClick={() => setCircleCount((count) => count + 1)}>
                Click me! ({circleCount})
            </button>
            <svg width={160} height={160} viewBox="0,0,160,160">
                <circle fill={props.color} r={50} cx={80} cy={80} />
            </svg>
        </>
    );
}, arePropsEqual);
