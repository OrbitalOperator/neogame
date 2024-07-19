/* @refresh reload */
import {render} from 'solid-js/web';
import {Component, createSignal} from "solid-js";
import {Button, Counter} from "./components";

const App: Component = () => {
    const [counter, setCounter] = createSignal(0);
    setInterval(setCounter, 1000, (c: number) => c + 1);

    return (
        <>
            <div>
                <h1 style={{color: 'red'}}>{counter()}</h1>
                <Button primary={true} label='test'/>
            </div>
            <Counter/>
        </>
    );
};

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
    );
}

render(() => <App/>, root!);
