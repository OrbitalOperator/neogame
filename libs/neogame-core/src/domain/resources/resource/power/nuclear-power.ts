import { Resource, ResourceProperties } from '../resource';
import { ResourceTypeEnum } from '../resource-type.enum';

export class NuclearPower extends Resource {
    get type(): ResourceTypeEnum {
        return ResourceTypeEnum.NUCLEAR_POWER;
    }

    static fromProperties(properties: ResourceProperties): NuclearPower {
        return new NuclearPower(properties);
    }

    private constructor(properties: ResourceProperties) {
        super(properties);
    }
}
