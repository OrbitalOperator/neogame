import { Resource, ResourceProperties } from '../resource';
import { ResourceTypeEnum } from '../resource-type.enum';

export class SolarPower extends Resource {
    get type(): ResourceTypeEnum {
        return ResourceTypeEnum.SOLAR_POWER;
    }

    static fromProperties(properties: ResourceProperties): SolarPower {
        return new SolarPower(properties);
    }

    private constructor(properties: ResourceProperties) {
        super(properties);
    }
}
