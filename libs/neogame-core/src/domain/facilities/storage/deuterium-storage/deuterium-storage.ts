import { StorageFacility, StorableResource, StorageFacilityProperties } from '../storage-facility';
import { ResourceTypeEnum } from '../../../resources';

export class DeuteriumStorage extends StorageFacility {
    public getStorageResourceType(): StorableResource {
        return ResourceTypeEnum.DEUTERIUM;
    }

    public static fromProperties(props: StorageFacilityProperties): DeuteriumStorage {
        return new DeuteriumStorage(props);
    }

    private constructor(props: StorageFacilityProperties) {
        super(props);
    }
}
