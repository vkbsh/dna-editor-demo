import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import { tg_modalState } from '@teselagen/ui';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import { vectorEditorReducer, vectorEditorMiddleware } from '@teselagen/ove';

const store = createStore(
	combineReducers({
		form,
		tg_modalState,
		VectorEditor: vectorEditorReducer(),
	}),
	undefined,
	compose(applyMiddleware(thunk, vectorEditorMiddleware)),
);

export default store;
