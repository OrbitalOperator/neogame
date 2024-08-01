import { Serializable } from '../../utilities/serializable';
import { ProductionFacilities, ProductionFacilitiesProperties } from '../facilities/production/production-facilities';
import { StorageFacilities, StorageFacilitiesProperties } from '../facilities/storage/storage-facilities';

export interface PlayerFacilitiesProperties {
    productionFacilities: ProductionFacilitiesProperties;
    storageFacilities: StorageFacilitiesProperties;
}

export class PlayerFacilities implements Serializable<PlayerFacilitiesProperties> {
    private readonly productionFacilities: ProductionFacilities;
    private readonly storageFacilities: StorageFacilities;

    static fromProperties(properties: PlayerFacilitiesProperties): PlayerFacilities {
        return new PlayerFacilities(properties);
    }

    private constructor({ productionFacilities, storageFacilities }: PlayerFacilitiesProperties) {
        this.productionFacilities = ProductionFacilities.fromProperties(productionFacilities);
        this.storageFacilities = StorageFacilities.fromProperties(storageFacilities);
    }

    public toProperties(): PlayerFacilitiesProperties {
        return {
            productionFacilities: this.productionFacilities.toProperties(),
            storageFacilities: this.storageFacilities.toProperties(),
        };
    }
}
