import { describe, expect, test } from 'vitest';
import { compose, UnaryFn } from './compose';

function normal_sum(a: number, b: number) {
    return a + b;
}

// prettier-ignore
type Curry2 = <A, B, Z>(
    f: (a: A, b: B) => Z,
)
    => (a: A)
    => (b: B)
    => Z;

const curry2: Curry2 = f => a => b => f(a, b);

type ToString = (x: number) => string;
const toString: ToString = x => x.toString();

type Sum = (a: number) => (b: number) => number;
const sum: Sum = a => b => a + b;

type Increment = (a: number) => number;

const increment: Increment = sum(1);

type Decrement = (a: number) => number;
const decrement: Decrement = sum(-1);

type IncrementThenToString = (x: number) => string;
const incrementThenToString: IncrementThenToString = compose(increment, toString);

function sumAll(values: number[]): number {
    if (values.length === 0) {
        return 0;
    }
    const [head, ...rest] = values;
    return sum(head)(sumAll(rest));
}

const none = Symbol('None');

type Maybe<A> = A | Nothing;
type Just<A> = {
    value: A;
};

const some = <A>(x: A) => ({ value: x });

type Nothing = typeof none;
type MaybeNumber = Maybe<number>;

describe('Functional Programming', () => {
    describe('Unary function', () => {
        test('it should increment', () => {
            expect(increment(0)).toBe(1);
            expect(increment(3)).toBe(4);
        });

        test('it should convert number to string', () => {
            expect(toString(0)).toBe('0');
            expect(toString(3)).toBe('3');
        });
    });

    describe('Composed function', () => {
        test('it should increment and convert to string', () => {
            expect(incrementThenToString(0)).toBe('1');
            expect(incrementThenToString(3)).toBe('4');
            expect(decrement(5)).toBe(4);
        });

        test('currying normal fn with 2 arguments', () => {
            const sum2 = curry2(normal_sum);
            expect(sum2(1)(2)).toBe(3);
        });
    });

    describe('Recursive function', () => {
        test('it should sum all numbers', () => {
            expect(sumAll([1, 3, 5])).toBe(9);
        });
    });

    describe('Total function', () => {
        type Either<E, A> = Left<E> | Right<A>;

        interface Left<E> {
            _tag: 'Left';
            left: E;
        }

        interface Right<A> {
            _tag: 'Right';
            right: A;
        }

        const left = <E, A = never>(e: E): Either<E, A> => ({ _tag: 'Left', left: e });
        const right = <A, E = never>(a: A): Either<E, A> => ({ _tag: 'Right', right: a });

        const isLeft = <E, A>(x: Either<E, A>): x is Left<E> => x._tag === 'Left';

        function divideTwoIfEven(num: number): Either<string, number> {
            if (num === 0) {
                return left('cannot divide by zero');
            }
            if (num % 2 !== 0) {
                return left('nun is not even');
            }
            return right(2 / num);
        }

        test('divideTwoIfEvent', () => {
            expect(divideTwoIfEven(8)).toStrictEqual({ _tag: 'Right', right: 0.25 });
            expect(divideTwoIfEven(0)).toStrictEqual({ _tag: 'Left', left: 'cannot divide by zero' });
            expect(divideTwoIfEven(3)).toStrictEqual({ _tag: 'Left', left: 'nun is not even' });
        });

        // prettier-ignore
        const divideTwoIfEventThenIncrement = compose(
            divideTwoIfEven,
            x => (isLeft(x) ? x : right(increment(x.right))),
        );

        test('divideTwoIfEvent', () => {
            expect(divideTwoIfEventThenIncrement(8)).toStrictEqual({ _tag: 'Right', right: 1.25 });
            expect(divideTwoIfEventThenIncrement(0)).toStrictEqual({ _tag: 'Left', left: 'cannot divide by zero' });
            expect(divideTwoIfEventThenIncrement(3)).toStrictEqual({ _tag: 'Left', left: 'nun is not even' });
        });
    });
});
