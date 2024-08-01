import { ResourceTypeEnum } from '../../../resources';
import { StorableResource, StorageFacility, StorageFacilityProperties } from '../storage-facility';

export class CrystalStorage extends StorageFacility {
    public getStorageResourceType(): StorableResource {
        return ResourceTypeEnum.CRYSTAL;
    }

    public static fromProperties(props: StorageFacilityProperties): CrystalStorage {
        return new CrystalStorage(props);
    }

    private constructor(props: StorageFacilityProperties) {
        super(props);
    }
}
