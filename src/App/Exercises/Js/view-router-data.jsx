import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsBooleans } from './Exercise-js-booleans/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseJsNumbers } from './Exercise-js-numbers/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsNumbers } from './JsNumbers/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsArraysBasics } from './JsArraysBasics/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsArraysMethods } from './JsArraysMethods/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsBooleans,
  blockRouterMetaDataExerciseJsNumbers,
  blockRouterMetaDataJsNumbers,
  blockRouterMetaDataJsArraysBasics,
  blockRouterMetaDataJsArraysMethods,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
