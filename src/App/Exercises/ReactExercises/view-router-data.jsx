import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { blok8MetaData } from './blok8/router-data';
import { blok9MetaData } from './Blok9/router-data';



export const blockRouterMetaData = [SubRouteExampleMetaData, blok8MetaData, blok9MetaData];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
