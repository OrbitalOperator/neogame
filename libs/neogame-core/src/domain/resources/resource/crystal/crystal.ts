import { Resource, ResourceProperties } from '../resource';
import { ResourceTypeEnum } from '../resource-type.enum';

export class Crystal extends Resource {
    get type(): ResourceTypeEnum {
        return ResourceTypeEnum.CRYSTAL;
    }

    static fromProperties(properties: ResourceProperties): Crystal {
        return new Crystal(properties);
    }

    private constructor(properties: ResourceProperties) {
        super(properties);
    }
}
