import { deserializeMap, Serializable, serializeMap } from '../../../utilities/serializable';
import { ResourceTypeEnum } from '../../resources';
import { StorageFacility, StorageFacilityProperties } from './storage-facility';
import { StorageFactory } from './storage.factory';

export interface StorageFacilitiesProperties {
    storageFacilities: Array<StorageFacilityProperties>;
}

export class StorageFacilities implements Serializable<StorageFacilitiesProperties> {
    private readonly storageFacilities: Map<ResourceTypeEnum, StorageFacility>;

    static fromProperties(properties: StorageFacilitiesProperties): StorageFacilities {
        return new StorageFacilities(properties);
    }

    private constructor({ storageFacilities }: StorageFacilitiesProperties) {
        this.storageFacilities = deserializeMap(
            storageFacilities,
            StorageFactory.createStorageFacility,
            (props) => props.storageResourceType,
        );
    }

    public toProperties(): StorageFacilitiesProperties {
        return {
            storageFacilities: serializeMap(this.storageFacilities),
        };
    }
}
