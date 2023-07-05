import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "./dataStore/dataSlice";
import { ThunkAction } from 'redux-thunk'
import { createLogger } from 'redux-logger'

// import { rootReducer } from './reducer'

// const DEV_ENV = process.env.NODE_ENV === 'development'

// const loggerOptions = {
//   predicate: (): boolean => DEV_ENV,
//   collapsed: true,
// }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// const middleware = [
//   ...getDefaultMiddleware<RootState>(),
//   createLogger(loggerOptions),
// ]

export const store = configureStore({
  reducer: {
    data: dataReducer
  }
})


// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
