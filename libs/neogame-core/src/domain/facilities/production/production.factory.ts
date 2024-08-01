import { ResourceTypeEnum } from '../../resources';
import { CrystalMine } from './crystal-mine';
import { DeuteriumSynthesizer } from './deuterium-synthesizer';
import { MetalMine } from './metal-mine';
import { NuclearPowerPlant } from './nuclear-power-plant';
import { ProductionFacility, ProductionFacilityProperties } from './production-facility';
import { SolarPowerPlant } from './solar-power-plant';

export class ProductionFactory {
    private static facilityCreators: Record<
        ResourceTypeEnum,
        (props: ProductionFacilityProperties) => ProductionFacility
    > = {
        [ResourceTypeEnum.METAL]: MetalMine.fromProperties,
        [ResourceTypeEnum.CRYSTAL]: CrystalMine.fromProperties,
        [ResourceTypeEnum.DEUTERIUM]: DeuteriumSynthesizer.fromProperties,
        [ResourceTypeEnum.SOLAR_POWER]: SolarPowerPlant.fromProperties,
        [ResourceTypeEnum.NUCLEAR_POWER]: NuclearPowerPlant.fromProperties,
    };

    public static createProductionFacility(props: ProductionFacilityProperties): ProductionFacility {
        return ProductionFactory.facilityCreators[props.productionResourceType](props);
    }
}
