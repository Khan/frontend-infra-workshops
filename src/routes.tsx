import {BrowserRouter, Route} from "react-router-dom";

import ReactRenderPerfRoutes from "./react-render-perf/routes";
import Homepage from "./homepage";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact={true}>
                <Homepage />
            </Route>
            <Route path="/react-render-perf" exact={false}>
                <ReactRenderPerfRoutes />
            </Route>
        </BrowserRouter>
    );
}
