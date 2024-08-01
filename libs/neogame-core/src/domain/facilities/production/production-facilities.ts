import { deserializeMap, Serializable, serializeMap } from '../../../utilities/serializable';
import { ResourceTypeEnum } from '../../resources';
import { ProductionFacility, ProductionFacilityProperties } from './production-facility';
import { ProductionFactory } from './production.factory';

export interface ProductionFacilitiesProperties {
    productionFacilities: Array<ProductionFacilityProperties>;
}

export class ProductionFacilities implements Serializable<ProductionFacilitiesProperties> {
    private readonly productionFacilities: Map<ResourceTypeEnum, ProductionFacility>;

    static fromProperties(properties: ProductionFacilitiesProperties): ProductionFacilities {
        return new ProductionFacilities(properties);
    }

    private constructor({ productionFacilities }: ProductionFacilitiesProperties) {
        this.productionFacilities = deserializeMap(
            productionFacilities,
            ProductionFactory.createProductionFacility,
            (props) => props.productionResourceType,
        );
    }

    public toProperties(): ProductionFacilitiesProperties {
        return {
            productionFacilities: serializeMap(this.productionFacilities),
        };
    }
}
