import {useState} from "react";

import {ChildComponent} from "./child";

export default function Exercise1() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount((count) => count + 1);
    };

    return (
        <div>
            <h1>Exercise 1: Memoizing Expensive Components</h1>
            <p>Count: {count}</p>
            <ChildComponent onClick={handleClick} />
        </div>
    );
}
