import {Link} from "react-router-dom";

export default function Homepage() {
    return (
        <>
            <h1>Frontend Infra Workshops</h1>
            <ul>
                <li>
                    <Link to="react-render-perf">React Render Perf</Link>
                </li>
            </ul>
        </>
    );
}
