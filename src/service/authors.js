import API from "../api"

export const getAuthors = async () => {
    const { data } = await API.get("/author");
    return data.data
}

export const createAuthor = async (data) => {
    try {
        const response = await API.post("/author", data);
        return response.data
    } catch (error) {
        console.table(error);
        throw error;
    }
} 

export const showAuthor = async (id) => {
    try {
        const { data } = await API.get(`/author/${id}`);
        return data.data
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const updateAuthor = async (id, data) => {
    try {
        const response = await API.post(`/author/${id}`, data);
        return response.data
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const deleteAuthor = async (id) => {
    try {
        await API.delete(`/author/${id}`);
    } catch (error) {
        console.error(error);
        throw error
    }
}