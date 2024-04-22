import {BrowserRouter, Route} from "react-router-dom";

import TableOfContents from "./index.mdx";
import Lesson01 from "./lesson-01/index";
import Lesson02 from "./lesson-02/index";
import Lesson03 from "./lesson-03/index";
import Lesson04 from "./lesson-04/index";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/react-render-perf" exact={true}>
                <TableOfContents />
            </Route>
            <Route path="/react-render-perf/lesson-01" exact={true}>
                <Lesson01 />
            </Route>
            <Route path="/react-render-perf/lesson-02" exact={true}>
                <Lesson02 />
            </Route>
            <Route path="/react-render-perf/lesson-03" exact={true}>
                <Lesson03 />
            </Route>
            <Route path="/react-render-perf/lesson-04" exact={true}>
                <Lesson04 />
            </Route>
        </BrowserRouter>
    );
}
