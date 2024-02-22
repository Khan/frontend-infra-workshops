import {Link} from "react-router-dom";

export default function ReactRenderPerf() {
    return (
        <>
            <Link to="/">Home</Link>
            <h1>React Render Perf</h1>
            <ul>
                <li>
                    <Link to="/react-render-perf/01">
                        01 - Memoizing Expensive Components
                    </Link>
                </li>
                <li>
                    <Link to="/react-render-perf/02">
                        02 - Prevent Context From Rendering
                    </Link>
                </li>
                <li>
                    <Link to="/react-render-perf/03">
                        03 - Avoid Using Context
                    </Link>
                </li>
                <li>
                    <Link to="/react-render-perf/04">
                        04 - Splitting Up Large Components
                    </Link>
                </li>
            </ul>
        </>
    );
}
