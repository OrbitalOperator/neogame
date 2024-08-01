import { deserializeMap, Serializable, serializeMap } from '../../utilities/serializable';
import { Resource, ResourceProperties } from './resource/resource';
import { ResourceTypeEnum } from './resource/resource-type.enum';
import { ResourceFactory } from './resource/resource.factory';

export interface ResourcesProperties {
    resources: Array<ResourceProperties>;
}

export class Resources implements Serializable<ResourcesProperties> {
    private readonly resources: Map<ResourceTypeEnum, Resource>;

    static fromProperties(properties: ResourcesProperties): Resources {
        return new Resources(properties);
    }

    private constructor({ resources }: ResourcesProperties) {
        this.resources = deserializeMap(resources, ResourceFactory.createResource, (props) => props.type);
    }

    public toProperties(): ResourcesProperties {
        return {
            resources: serializeMap(this.resources),
        };
    }
}
