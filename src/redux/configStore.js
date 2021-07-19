import { createStore, combineReducers } from 'redux';
import quiz from './modules/quiz';
import rank from './modules/rank';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

// 리듀서가 여러개일경우 컴바인리듀서를 통해서 함쳐줄수있다
const rootReducer = combineReducers({ quiz,rank });

const store = createStore(rootReducer);

export default store;