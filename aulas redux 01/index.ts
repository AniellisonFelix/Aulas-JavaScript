import { createStore } from 'redux';

const reducer = (state, action) => state;

const store = creatStore(reducer);

// ACTION DISPATCH

const increment = {
	type: 'INCEMENT',
};

store.dispatch(increment);

// ######

store.subscribe(() => {
	store.getState();
	console.log(store.getState());
});