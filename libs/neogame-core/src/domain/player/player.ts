import { Resources, ResourcesProperties } from '../resources/resources';
import { PlayerFacilities, PlayerFacilitiesProperties } from './player-facilities';

type PlayerName = string;
type PlayerId = string;

export interface PlayerProperties {
    id: PlayerId;
    name: PlayerName;
    resources: ResourcesProperties;
    facilities: PlayerFacilitiesProperties;
}

export class Player {
    id: PlayerId;
    name: PlayerName;
    resources: Resources;
    facilities: PlayerFacilities;

    private constructor({ id, name, resources, facilities }: PlayerProperties) {
        this.name = name;
        this.id = id;
        this.resources = Resources.fromProperties(resources);
        this.facilities = PlayerFacilities.fromProperties(facilities);
    }

    static fromProperties(properties: PlayerProperties): Player {
        return new Player(properties);
    }

    static fromPlayer(player: Player): Player {
        return Player.fromProperties(player.toProperties());
    }

    public toProperties(): PlayerProperties {
        return {
            id: this.id,
            name: this.name,
            resources: this.resources.toProperties(),
            facilities: this.facilities.toProperties(),
        };
    }
}
