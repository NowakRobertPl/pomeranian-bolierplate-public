import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { routerMetaData } from './FormsExtended/router-data';
import { blok8MetaData } from './blok8/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  blok8MetaData,
  routerMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
