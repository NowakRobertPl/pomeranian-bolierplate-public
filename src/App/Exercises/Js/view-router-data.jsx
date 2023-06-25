import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunctions } from './ExerciseJsFunctions/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsBooleans } from './Exercise-js-booleans/router-data';
import { blockRouterMetaData as blockRouterMetaDataExerciseJsNumbers } from './Exercise-js-numbers/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsNumbers } from './JsNumbers/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunctionsBasics } from './Exercise-js-functions-basics/router-data';
import { blockRouterMetaData as blockRouterMetaDataWhackamole } from './whackamole/router-data';
import { blockRouterMetaData as blockRouterMetaDataMemoryGame } from './MemoryGame/router-data';
import { blockRouterMetaData as blockRouterMetaDataPromiseMethodsTraining } from './PromiseMethodsTraining/router-data';
import { blockRouterMetaData as blockRouterMetaDataPromiseUsageFetch } from './PromiseUsageFetch/router-data';
import { blockRouterMetaData as blockRouterMetaDataToDo } from './ToDo/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJsBooleans,
  blockRouterMetaDataExerciseJsNumbers,
  blockRouterMetaDataJsNumbers,
  blockRouterMetaDataJsFunctionsBasics,
  blockRouterMetaDataJsFunctions,
  blockRouterMetaDataWhackamole,
  blockRouterMetaDataMemoryGame,
  blockRouterMetaDataPromiseMethodsTraining,
  blockRouterMetaDataPromiseUsageFetch,
  blockRouterMetaDataToDo,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
