import { Resource, ResourceProperties } from '../resource';
import { ResourceTypeEnum } from '../resource-type.enum';

export class Deuterium extends Resource {
    get type(): ResourceTypeEnum {
        return ResourceTypeEnum.DEUTERIUM;
    }

    static fromProperties(properties: ResourceProperties): Deuterium {
        return new Deuterium(properties);
    }

    private constructor(properties: ResourceProperties) {
        super(properties);
    }
}
