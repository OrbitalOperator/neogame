import { ResourceTypeEnum } from '../../../resources';
import { StorageFacility, StorableResource, StorageFacilityProperties } from '../storage-facility';

export class MetalStorage extends StorageFacility {
    public getStorageResourceType(): StorableResource {
        return ResourceTypeEnum.METAL;
    }

    public static fromProperties(props: StorageFacilityProperties): MetalStorage {
        return new MetalStorage(props);
    }

    private constructor(props: StorageFacilityProperties) {
        super(props);
    }
}
