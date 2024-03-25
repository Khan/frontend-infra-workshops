import {Link} from "react-router-dom";

export default function ReactRenderPerf() {
    return (
        <>
            <Link to="/">Home</Link>
            <h1>React Render Perf</h1>
            <ol>
                <li>
                    Memoizing Expensive Components
                    <ul>
                        <li>
                            <Link to="/react-render-perf/lesson-01/exercise">
                                Exercise
                            </Link>
                        </li>
                        <li>
                            <Link to="/react-render-perf/lesson-01/solution">
                                Solution
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    Prevent Context From Rendering
                    <ul>
                        <li>
                            <Link to="/react-render-perf/lesson-02/exercise">
                                Exercise
                            </Link>
                        </li>
                        <li>
                            <Link to="/react-render-perf/lesson-02/solution">
                                Solution
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    Avoid Using Context - TODO
                    <ul>
                        <li>
                            <Link to="/react-render-perf/lesson-03/exercise">
                                Exercise
                            </Link>
                        </li>
                        <li>
                            <Link to="/react-render-perf/lesson-03/solution">
                                Solution
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    Splitting Up Large Components
                    <ul>
                        <li>
                            <Link to="/react-render-perf/lesson-04/exercise">
                                Exercise
                            </Link>
                        </li>
                        <li>
                            <Link to="/react-render-perf/lesson-04/solution">
                                Solution
                            </Link>
                        </li>
                    </ul>
                </li>
            </ol>
        </>
    );
}
