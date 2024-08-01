import { ResourceTypeEnum } from '../../resources';
import { CrystalStorage } from './crystal-storage';
import { DeuteriumStorage } from './deuterium-storage';
import { MetalStorage } from './metal-storage';
import { StorableResource, StorageFacility, StorageFacilityProperties } from './storage-facility';

export class StorageFactory {
    private static facilityCreators: Record<StorableResource, (props: StorageFacilityProperties) => StorageFacility> = {
        [ResourceTypeEnum.METAL]: MetalStorage.fromProperties,
        [ResourceTypeEnum.CRYSTAL]: CrystalStorage.fromProperties,
        [ResourceTypeEnum.DEUTERIUM]: DeuteriumStorage.fromProperties,
    };

    public static createStorageFacility(props: StorageFacilityProperties): StorageFacility {
        return StorageFactory.facilityCreators[props.storageResourceType](props);
    }
}
