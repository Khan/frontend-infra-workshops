import {Link} from "react-router-dom";

import {code} from "../shared/code";
import Tabs from "../shared/tabs";
import styles from "../shared/index.module.css";

import Content from "./content.mdx";
import Exercise from "./exercise/index";
import Solution from "./solution/index";

export default function Page() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link to="/react-render-perf">Home</Link>
                <h1>01 - Memoizing Expensive Functional Components</h1>
            </div>
            <div className={styles.column}>
                <Content components={{code}} />
            </div>
            <div className={styles.column}>
                <h3>
                    ⚠️ HMR may not work, please reload after making changes ⚠️
                </h3>
                <Tabs tabs={{exercise: Exercise, solution: Solution}} />
            </div>
        </div>
    );
}
