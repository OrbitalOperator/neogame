import { ResourceTypeEnum } from '../../../resources';
import { ProductionFacility, ProductionFacilityProperties } from '../production-facility';

export class MetalMine extends ProductionFacility {
    public getProductionResourceType(): ResourceTypeEnum {
        return ResourceTypeEnum.METAL;
    }

    public static fromProperties(props: ProductionFacilityProperties): MetalMine {
        return new MetalMine(props);
    }

    private constructor(props: ProductionFacilityProperties) {
        super(props);
    }
}
