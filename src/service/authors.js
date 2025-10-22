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