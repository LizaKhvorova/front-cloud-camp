import { requestMockApi } from './request';
const getUsers = () => requestMockApi.get('/users');
const getUserById = (userId) => requestMockApi.get(`/users/${userId}`);
const getUserByName = (name) => requestMockApi.get('/users', {
    params: {
        author: name,
    },
});
const saveUser = (user) => requestMockApi.post('/users', { body: user });
const updateUser = (userId, user) => requestMockApi.put(`/users/${userId}`, { body: user });
const deleteUserById = (userId) => {
    return requestMockApi.delete(`/users/${userId}`);
};
export const usersApi = {
    getUserById,
    getUserByName,
    getUsers,
    saveUser,
    updateUser,
    deleteUserById,
};
