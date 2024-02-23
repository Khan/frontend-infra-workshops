const fib = (n: number): number => {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
};

type Props = {
    onClick: () => void;
};

export function ChildComponent(props: Props) {
    return (
        <div>
            <h1>Child Component</h1>
            <p>fib(36) = {fib(36)}</p>
            <button onClick={props.onClick}>Click me!</button>
        </div>
    );
}
