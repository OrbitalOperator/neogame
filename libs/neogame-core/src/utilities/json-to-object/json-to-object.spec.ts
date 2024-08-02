import 'reflect-metadata';
import { describe, expect, test } from 'vitest';
import { Data } from './decorators/data';
import { Type } from './decorators/type';
import { createEntity } from './functions/create-entity';
import { Entity } from './types/entity';

describe('Json To Object', () => {
    class PlayerResources extends Entity {
        @Data name!: string;
        @Data quantity!: number;
    }

    class Player extends Entity {
        @Data name!: string;
        @Data age!: number;
        @Type(PlayerResources) resources!: PlayerResources;

        somePotatoes = 4545;
    }

    const resourcesProps = {
        name: 'Metal',
        quantity: 5000,
    };

    const playerProps = {
        name: 'Uncle Bob',
        age: 178,
        resources: resourcesProps,
    };

    test('do something', () => {
        const playerResources = createEntity(PlayerResources, resourcesProps);

        console.dir(playerResources);

        expect(playerResources instanceof PlayerResources).toBe(true);
        expect(playerResources.name).toBe('Metal');
        expect(playerResources.quantity).toBe(5000);

        playerResources.quantity = 8000;
        const updatedPlayerResources = playerResources.toJSON();

        expect(updatedPlayerResources).toStrictEqual({
            name: 'Metal',
            quantity: 8000,
        });
    });

    test('it work with nested object', () => {
        const player = createEntity<Player>(Player, playerProps);

        console.dir(player);
        expect(player instanceof Player).toBe(true);
        expect(player.name).toBe('Uncle Bob');
        expect(player.age).toBe(178);
        expect(player.resources instanceof PlayerResources).toBe(true); // this assertion fail
        expect(player.resources.name).toBe('Metal');
        expect(player.resources.quantity).toBe(5000);
    });
});
