import { ResourceTypeEnum } from '../../../resources';
import { ProductionFacility, ProductionFacilityProperties } from '../production-facility';

export class SolarPowerPlant extends ProductionFacility {
    public getProductionResourceType(): ResourceTypeEnum {
        return ResourceTypeEnum.SOLAR_POWER;
    }

    public static fromProperties(props: ProductionFacilityProperties): SolarPowerPlant {
        return new SolarPowerPlant(props);
    }

    private constructor(props: ProductionFacilityProperties) {
        super(props);
    }
}
