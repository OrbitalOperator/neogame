import { ResourceTypeEnum } from '../../../resources';
import { ProductionFacility, ProductionFacilityProperties } from '../production-facility';

export class CrystalMine extends ProductionFacility {
    public getProductionResourceType(): ResourceTypeEnum {
        return ResourceTypeEnum.CRYSTAL;
    }

    public static fromProperties(props: ProductionFacilityProperties): CrystalMine {
        return new CrystalMine(props);
    }

    private constructor(props: ProductionFacilityProperties) {
        super(props);
    }
}
