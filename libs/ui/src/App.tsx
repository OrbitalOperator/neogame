import { Component, createSignal } from 'solid-js';
import { Button } from '../lib/components/Button';

export const App: Component = () => {
    const [counter, setCounter] = createSignal(0);
    setInterval(setCounter, 1000, (c: number) => c + 1);

    return (
        <>
            <div>
                <h1 style={{ color: 'red' }}>{counter()}</h1>
                <Button primary={true} label='test' />
            </div>
        </>
    );
};
