import { describe, expect, test } from 'vitest';
import { Immutable } from './immutable';

@Immutable
class Test {
    name!: string;
    age!: number;
}

describe('immutable', () => {
    test('does not allow mutation', () => {
        const testObject = Object.assign(new Test(), { name: 'Uncle bob', age: 10 });

        expect(testObject.name).toBe('Uncle bob');
        expect(testObject.age).toBe(10);
        testObject.age = 20;
        expect(testObject.age).toBe(10);
    });
});
