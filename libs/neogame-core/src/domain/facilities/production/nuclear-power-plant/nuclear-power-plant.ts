import { ResourceTypeEnum } from '../../../resources';
import { ProductionFacility, ProductionFacilityProperties } from '../production-facility';

export class NuclearPowerPlant extends ProductionFacility {
    public getProductionResourceType(): ResourceTypeEnum {
        return ResourceTypeEnum.NUCLEAR_POWER;
    }

    public static fromProperties(props: ProductionFacilityProperties): NuclearPowerPlant {
        return new NuclearPowerPlant(props);
    }

    private constructor(props: ProductionFacilityProperties) {
        super(props);
    }
}
