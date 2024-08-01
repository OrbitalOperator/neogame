import { Resource, ResourceProperties } from '../resource';
import { ResourceTypeEnum } from '../resource-type.enum';

export class Metal extends Resource {
    get type(): ResourceTypeEnum {
        return ResourceTypeEnum.METAL;
    }

    static fromProperties(properties: ResourceProperties): Metal {
        return new Metal(properties);
    }

    private constructor(properties: ResourceProperties) {
        super(properties);
    }
}
