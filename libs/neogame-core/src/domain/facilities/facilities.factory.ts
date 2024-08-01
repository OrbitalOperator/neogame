import { Facility, FacilityProperties, FacilityTypeEnum } from './facility';
import { ProductionFactory } from './production';
import { StorageFactory } from './storage';

export class FacilitiesFactory {
    private static facilitiesFactories: Record<FacilityTypeEnum, (props: any) => Facility> = {
        [FacilityTypeEnum.PRODUCTION]: ProductionFactory.createProductionFacility,
        [FacilityTypeEnum.STORAGE]: StorageFactory.createStorageFacility,
    };

    public static createFacility(props: FacilityProperties): Facility {
        return this.facilitiesFactories[props.facilityType](props);
    }
}
