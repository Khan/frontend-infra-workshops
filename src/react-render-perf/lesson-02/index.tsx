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
                <h1>02 - Prevent Context From Re-rendering</h1>
            </div>
            <div className={styles.column}>
                <Content components={{code}} />
            </div>
            <div className={styles.column}>
                <Tabs tabs={{exercise: Exercise, solution: Solution}} />
            </div>
        </div>
    );
}
