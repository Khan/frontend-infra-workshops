import {BrowserRouter, Route} from "react-router-dom";
import {JSX} from "react";

import TableOfContents from "./table-of-contents";

const lessons = import.meta.glob("./lesson-*/**/index.tsx", {eager: true});

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/react-render-perf" exact={true}>
                <TableOfContents />
            </Route>
            {Object.entries(lessons).map(
                ([path, {default: Component}]: [string, any]): JSX.Element => {
                    const base = "/react-render-perf/";
                    return (
                        <Route
                            path={
                                base +
                                path.replace("./", "").replace("/index.tsx", "")
                            }
                            key={path}
                            exact={true}
                        >
                            <Component />
                        </Route>
                    );
                },
            )}
        </BrowserRouter>
    );
}
