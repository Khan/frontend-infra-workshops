import * as React from "react";

import * as styles from "../shared/index.module.css";

type Tab = "exercise" | "solution";

type Props = {
    tabs: {
        exercise: () => React.ReactNode;
        solution: () => React.ReactNode;
    };
};

export default function Tabs({tabs}: Props) {
    const [tab, setTab] = React.useState<Tab>("exercise");

    return (
        <>
            <div className={styles.tabs}>
                <span
                    className={
                        tab === "exercise" ? styles.active : styles.inactive
                    }
                    onClick={() => setTab("exercise")}
                >
                    Exercise
                </span>
                <span
                    className={
                        tab === "solution" ? styles.active : styles.inactive
                    }
                    onClick={() => setTab("solution")}
                >
                    Solution
                </span>
            </div>
            {tab === "exercise" && <tabs.exercise />}
            {tab === "solution" && <tabs.solution />}
        </>
    );
}
