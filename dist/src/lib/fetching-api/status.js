export const loadingStatus = {
    initial: 'initial',
    pending: 'pending',
    succeeded: 'succeeded',
    failed: 'failed',
};
export const initialFetching = {
    status: loadingStatus.initial,
    isLoading: true,
    isFailed: false,
    isFinished: false,
    error: null,
};
export const succeededFetching = {
    status: loadingStatus.succeeded,
    isLoading: false,
    isFailed: false,
    isFinished: true,
    error: null,
};
export const pendingFetching = {
    status: loadingStatus.pending,
    isLoading: true,
    isFailed: false,
    isFinished: false,
    error: null,
};
export const rejectedFetching = {
    status: loadingStatus.initial,
    isLoading: false,
    isFailed: true,
    isFinished: true,
    error: null,
};
