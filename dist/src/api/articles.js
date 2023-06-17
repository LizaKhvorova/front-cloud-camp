import { requestMockApi } from './request';
const getArticles = () => {
    return requestMockApi.get('/articles');
};
const getArticleById = (articleId) => requestMockApi.get(`/articles/${articleId}`);
const getArticleByTitle = (title) => requestMockApi.get('/articles', {
    params: {
        title,
    },
});
const getArticlesFilter = ({ id, title, userId, }) => requestMockApi.get('/articles', {
    params: {
        id,
        title,
        userId,
    },
});
const saveArticle = (user) => requestMockApi.post('/articles', { body: user });
const updateArticle = (articleId, user) => requestMockApi.put(`/articles/${articleId}`, { body: user });
const deleteArticleById = (articleId) => {
    return requestMockApi.delete(`/articles/${articleId}`);
};
export const articlesApi = {
    getArticles,
    getArticleById,
    getArticleByTitle,
    getArticlesFilter,
    saveArticle,
    updateArticle,
    deleteArticleById,
};
