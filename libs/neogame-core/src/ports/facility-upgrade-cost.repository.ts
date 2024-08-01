import { FacilityUpgradeCost } from '../domain/facility/facility';

export interface FacilityUpgradeCostRepository {
    get(): FacilityUpgradeCost;
}
