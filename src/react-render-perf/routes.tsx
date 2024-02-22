import {BrowserRouter, Route} from "react-router-dom";

import TableOfContents from "./table-of-contents";
import Lesson1Exercise from "./lesson-01/exercise";
import Lesson2Exercise from "./lesson-02/exercise";
import Lesson3Exercise from "./lesson-03/exercise";
import Lesson4Exercise from "./lesson-04/exercise";

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/react-render-perf" exact={true}>
                <TableOfContents />
            </Route>
            <Route path="/react-render-perf/01" exact={true}>
                <Lesson1Exercise />
            </Route>
            <Route path="/react-render-perf/02" exact={true}>
                <Lesson2Exercise />
            </Route>
            <Route path="/react-render-perf/03" exact={true}>
                <Lesson3Exercise />
            </Route>
            <Route path="/react-render-perf/04" exact={true}>
                <Lesson4Exercise />
            </Route>
        </BrowserRouter>
    );
}
