import {BrowserRouter, Route} from "react-router-dom";

import ReactRenderPerf from "./react-render-perf";
import Homepage from "./homepage";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact={true}>
                <Homepage />
            </Route>
            <Route path="/react-render-perf" exact={true}>
                <ReactRenderPerf />
            </Route>
        </BrowserRouter>
    );
}
