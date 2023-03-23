import http from "./BaseService";


export const list = () => {
    return http.get('/posts')
}

export const getComments = (id) => {
    return http.get(`/posts/${id}/comments`)
}