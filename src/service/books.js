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