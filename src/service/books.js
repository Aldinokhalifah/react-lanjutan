import API from "../api"

export const getBooks = async () => {
    const { data } = await API.get("/book");
    return data.data
}

export const createBook = async (data) => {
    try {
        const response = await API.post("/book", data);
        return response.data
    } catch (error) {
        console.table(error);
        throw error;
    }
} 

export const showBook = async (id) => {
    try {
        const { data } = await API.get(`/book/${id}`);
        return data.data
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const updateBook = async (id, data) => {
    try {
        const response = await API.post(`/book/${id}`, data);
        return response.data
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const deleteBook = async (id) => {
    try {
        await API.delete(`/book/${id}`);
    } catch (error) {
        console.error(error);
        throw error
    }
}