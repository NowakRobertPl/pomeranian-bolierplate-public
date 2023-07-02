import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { blok8MetaData } from './blok8/router-data';
import { routerMetaData as ReduxMetaData } from './Redux/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  blok8MetaData,
  ReduxMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
