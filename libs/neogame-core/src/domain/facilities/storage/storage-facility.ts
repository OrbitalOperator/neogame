import { ResourceTypeEnum } from '../../resources';
import { Facility, FacilityProperties, FacilityTypeEnum } from '../facility';

export type StorageCapacity = number;
export type StorableResource = Exclude<ResourceTypeEnum, ResourceTypeEnum.SOLAR_POWER | ResourceTypeEnum.NUCLEAR_POWER>;

export interface StorageFacilityProperties extends FacilityProperties {
    storageResourceType: StorableResource;
    capacity: StorageCapacity;
}

export abstract class StorageFacility extends Facility {
    private readonly capacity: StorageCapacity;

    public getFacilityType(): FacilityTypeEnum {
        return FacilityTypeEnum.STORAGE;
    }

    public abstract getStorageResourceType(): StorableResource;

    protected constructor(props: StorageFacilityProperties) {
        super(props);
        this.capacity = props.capacity;
    }

    public toProperties(): StorageFacilityProperties {
        return {
            ...super.toProperties(),
            storageResourceType: this.getStorageResourceType(),
            capacity: this.capacity,
        };
    }
}
