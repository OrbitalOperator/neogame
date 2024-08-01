import { Facility, FacilityId } from '../../domain/facility/facility';
import { Player } from '../../domain/player';
import { NotEnoughResourceForUpgrade } from './errors/not-enough-resource-for-upgrade.error';

export interface UpgradeFacilityParameters {
    player: Player;
    facilityId: FacilityId;
    playerHasEnoughResource: boolean;
}

export interface UpgradeFacilityResult {
    updatedPlayer: Player;
}

export function upgradeFacility({
    player,
    playerHasEnoughResource,
    facilityId,
}: UpgradeFacilityParameters): UpgradeFacilityResult {
    if (!playerHasEnoughResource) {
        throw new NotEnoughResourceForUpgrade();
    }

    let updatedPlayer = Player.fromPlayer(player);

    updatedPlayer.facilities.getEntity(facilityId).upgrade();

    return { updatedPlayer };
}
