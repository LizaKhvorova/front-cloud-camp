import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { rootReducer } from './reducer';
const DEV_ENV = process.env.NODE_ENV === 'development';
const loggerOptions = {
    predicate: () => DEV_ENV,
    collapsed: true,
};
const middleware = [
    ...getDefaultMiddleware(),
    createLogger(loggerOptions),
];
export const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: DEV_ENV,
});
