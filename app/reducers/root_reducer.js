import { combineReducers } from 'redux';
import EntitiesReducer from './entities_reducer';
import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  entities: EntitiesReducer,
});

export default RootReducer;