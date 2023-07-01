import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { blok8MetaData } from './blok8/router-data';
import { basicFormsMetaData } from './basicForms/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  blok8MetaData,
  basicFormsMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
