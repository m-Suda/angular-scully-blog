import { ScullyRoute } from '@scullyio/ng-lib';

export interface ScullyRouteExtendsType extends ScullyRoute {
    category?: string;
    thumbnail?: string;
    date?: string;
    description?: string;
}
