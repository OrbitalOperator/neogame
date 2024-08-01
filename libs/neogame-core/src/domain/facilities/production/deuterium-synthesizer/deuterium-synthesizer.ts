import { ResourceTypeEnum } from '../../../resources';
import { ProductionFacility, ProductionFacilityProperties } from '../production-facility';

export class DeuteriumSynthesizer extends ProductionFacility {
    public getProductionResourceType(): ResourceTypeEnum {
        return ResourceTypeEnum.DEUTERIUM;
    }

    public static fromProperties(props: ProductionFacilityProperties): DeuteriumSynthesizer {
        return new DeuteriumSynthesizer(props);
    }

    private constructor(props: ProductionFacilityProperties) {
        super(props);
    }
}
