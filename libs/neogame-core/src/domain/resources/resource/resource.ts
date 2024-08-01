import { Serializable } from '../../../utilities/serializable';
import { ResourceTypeEnum } from './resource-type.enum';

export type ResourceQuantity = number;

export interface ResourceProperties {
    type: ResourceTypeEnum;
    quantity: ResourceQuantity;
}

export abstract class Resource implements Serializable<ResourceProperties> {
    public quantity: ResourceQuantity;

    abstract get type(): ResourceTypeEnum;

    protected constructor({ quantity }: ResourceProperties) {
        this.quantity = quantity;
    }

    public toProperties(): ResourceProperties {
        return {
            type: this.type,
            quantity: this.quantity,
        };
    }
}
