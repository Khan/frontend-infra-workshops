import {Link} from "react-router-dom";

export default function ReactRenderPerf() {
    return (
        <>
            <Link to="/">Home</Link>
            <h1>React Render Perf</h1>
            <ul>
                <li>
                    <Link to="example-1">Example 1</Link>
                </li>
                <li>
                    <Link to="example-2">Example 2</Link>
                </li>
                <li>
                    <Link to="example-3">Example 3</Link>
                </li>
            </ul>
        </>
    );
}
