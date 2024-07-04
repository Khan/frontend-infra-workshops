import * as React from "react";

import {fib} from "../../shared/fib";

type Props = {n: number};

export default React.memo(function Fib({n}: Props) {
    return (
        <p>
            fib({n}) = {fib(n)}
        </p>
    );
});
