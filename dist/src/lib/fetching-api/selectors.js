import { createSelector } from '@reduxjs/toolkit';
export const selectFetching = createSelector((state) => state.fetching, (fetching) => fetching);
export const selectFetchingIsLoading = createSelector(selectFetching, (fetching) => fetching.isLoading);
