import { describe, expect, test } from 'vitest';
import { Property, Entity } from './entity-data';

describe('EntityData', () => {
    class PlayerResources extends Entity {
        @Property name!: string;
        @Property quantity!: number;
    }

    class Player extends Entity {
        @Property name!: string;
        @Property age!: number;

        somePotatoes = 4545;
    }

    const playerProps = {
        name: 'Uncle Bob',
        age: 178,
    };

    test('do something', () => {
        const player = Entity.fromJSON(Player, playerProps);

        expect(player.name).toBe('Uncle Bob');
        expect(player.age).toBe(178);

        player.age = 300;

        const updatedPlayer = player.toJSON();

        expect(updatedPlayer).toStrictEqual({
            name: 'Uncle Bob',
            age: 300,
        });
    });
});
