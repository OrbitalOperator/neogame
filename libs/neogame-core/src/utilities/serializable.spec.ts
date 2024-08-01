import { describe, expect, test } from 'vitest';
import { FacilityTypeEnum } from '../domain/facilities/facility';
import { ProductionFacilityProperties } from '../domain/facilities/production';
import { ProductionFacilitiesProperties } from '../domain/facilities/production/production-facilities';
import { StorageFacilityProperties } from '../domain/facilities/storage';
import { StorageFacilitiesProperties } from '../domain/facilities/storage/storage-facilities';
import { Player, PlayerProperties } from '../domain/player';
import { PlayerFacilitiesProperties } from '../domain/player/player-facilities';
import { ResourceProperties, ResourceTypeEnum } from '../domain/resources';
import { ResourcesProperties } from '../domain/resources/resources';

describe('Serializable', () => {
    const crystalStorageProperties: StorageFacilityProperties = {
        level: 0,
        storageResourceType: ResourceTypeEnum.CRYSTAL,
        facilityType: FacilityTypeEnum.STORAGE,
        capacity: 10000,
    };
    const metalStorageProperties: StorageFacilityProperties = {
        level: 0,
        storageResourceType: ResourceTypeEnum.METAL,
        facilityType: FacilityTypeEnum.STORAGE,
        capacity: 10000,
    };
    const deuteriumStorageProperties: StorageFacilityProperties = {
        level: 0,
        storageResourceType: ResourceTypeEnum.DEUTERIUM,
        facilityType: FacilityTypeEnum.STORAGE,
        capacity: 10000,
    };
    const crystalMineProperties: ProductionFacilityProperties = {
        level: 0,
        productionResourceType: ResourceTypeEnum.CRYSTAL,
        productionRate: 1,
        facilityType: FacilityTypeEnum.PRODUCTION,
    };
    const metalMineProperties: ProductionFacilityProperties = {
        level: 0,
        productionResourceType: ResourceTypeEnum.METAL,
        productionRate: 1,
        facilityType: FacilityTypeEnum.PRODUCTION,
    };
    const deuteriumSynthesizerProperties: ProductionFacilityProperties = {
        level: 0,
        productionResourceType: ResourceTypeEnum.DEUTERIUM,
        productionRate: 1,
        facilityType: FacilityTypeEnum.PRODUCTION,
    };
    const solarPowerPlantProperties: ProductionFacilityProperties = {
        level: 0,
        productionResourceType: ResourceTypeEnum.SOLAR_POWER,
        productionRate: 1,
        facilityType: FacilityTypeEnum.PRODUCTION,
    };
    const nuclearPowerPlantProperties: ProductionFacilityProperties = {
        level: 0,
        productionResourceType: ResourceTypeEnum.NUCLEAR_POWER,
        productionRate: 1,
        facilityType: FacilityTypeEnum.PRODUCTION,
    };

    const productionFacilitiesProperties: ProductionFacilitiesProperties = {
        productionFacilities: [
            crystalMineProperties,
            metalMineProperties,
            deuteriumSynthesizerProperties,
            solarPowerPlantProperties,
            nuclearPowerPlantProperties,
        ],
    };

    const storageFacilitiesProperties: StorageFacilitiesProperties = {
        storageFacilities: [metalStorageProperties, crystalStorageProperties, deuteriumStorageProperties],
    };

    const playerFacilitiesProperties: PlayerFacilitiesProperties = {
        productionFacilities: productionFacilitiesProperties,
        storageFacilities: storageFacilitiesProperties,
    };

    const metalProperties: ResourceProperties = {
        type: ResourceTypeEnum.METAL,
        quantity: 5000,
    };
    const crystalProperties: ResourceProperties = {
        type: ResourceTypeEnum.CRYSTAL,
        quantity: 5000,
    };
    const deuteriumProperties: ResourceProperties = {
        type: ResourceTypeEnum.DEUTERIUM,
        quantity: 5000,
    };
    const solarPowerProperties: ResourceProperties = {
        type: ResourceTypeEnum.SOLAR_POWER,
        quantity: 5000,
    };
    const nuclearPowerProperties: ResourceProperties = {
        type: ResourceTypeEnum.NUCLEAR_POWER,
        quantity: 5000,
    };

    const resourcesProperties: ResourcesProperties = {
        resources: [
            metalProperties,
            crystalProperties,
            deuteriumProperties,
            solarPowerProperties,
            nuclearPowerProperties,
        ],
    };

    const playerProperties: PlayerProperties = {
        resources: resourcesProperties,
        facilities: playerFacilitiesProperties,
        name: 'Uncle Bob',
        id: '0',
    };

    test('inner maps are serialized to array for the properties format', () => {
        const player: Player = Player.fromProperties(playerProperties);
        expect(player.toProperties()).toStrictEqual(playerProperties);
    });
});
