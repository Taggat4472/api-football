import { combineReducers } from 'redux'
import AssistReducer from './AssistReducer'
import ScorerReducer from './ScorerReducer'
 
const rootReducer = combineReducers({
    assist: AssistReducer,
    scorer: ScorerReducer,
})
 
export default rootReducer 