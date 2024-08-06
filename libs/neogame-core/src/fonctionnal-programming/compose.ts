import { First, Last } from './utilities.types';

type UnaryFn = (x: any) => any;

type ComposedFnsInputType<T extends UnaryFn[]> = UnaryFnParameter<First<T>>;
type UnaryFnParameter<T extends UnaryFn> = Parameters<T>[0];

type ComposedFnsReturnType<T extends UnaryFn[]> = UnaryFnReturnType<Last<T>>;
type UnaryFnReturnType<T extends UnaryFn> = ReturnType<T>;

// prettier-ignore
export function compose<A, B, C>(
    g: (a: A) => B,
    f: (b: B) => C
): (a: A) => C {
    return (x) => f(g(x));
}

// prettier-ignore
// export function compose<
//     T extends any[],
//     I = ComposedFnsInputType<T>,
//     O = ComposedFnsReturnType<T>
// >(
//     ...fns: [...T]
// ): (x: I) => O {
//     return (x) => fns.reduce((y, f) => f(y), x);
// }
