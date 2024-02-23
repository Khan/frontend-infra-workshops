import {useState, useCallback} from "react";

import {ChildComponent} from "../solution/child";

export default function Solution1() {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => {
        setCount((count) => count + 1);
    }, []);

    return (
        <div>
            <h1>Solution 1: Memoizing Expensive Components</h1>
            <p>Count: {count}</p>
            <ChildComponent onClick={handleClick} />
        </div>
    );
}
