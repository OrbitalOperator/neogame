import { ResourceTypeEnum } from '../../resources';
import { Facility, FacilityProperties, FacilityTypeEnum } from '../facility';

export type ProductionRateInHz = number;

export interface ProductionFacilityProperties extends FacilityProperties {
    productionResourceType: ResourceTypeEnum;
    productionRate: ProductionRateInHz;
}

export abstract class ProductionFacility extends Facility {
    private readonly productionRate: ProductionRateInHz;

    public getFacilityType(): FacilityTypeEnum {
        return FacilityTypeEnum.PRODUCTION;
    }

    public abstract getProductionResourceType(): ResourceTypeEnum;

    protected constructor(props: ProductionFacilityProperties) {
        super(props);
        this.productionRate = props.productionRate;
    }

    public toProperties(): ProductionFacilityProperties {
        return {
            ...super.toProperties(),
            productionResourceType: this.getProductionResourceType(),
            productionRate: this.productionRate,
        };
    }
}
