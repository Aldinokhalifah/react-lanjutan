import API from "../api"

export const getGenres = async () => {
    const { data } = await API.get("/genre");
    return data.data
}

export const createGenre = async (data) => {
    try {
        const response = await API.post("/genre", data);
        return response.data
    } catch (error) {
        console.table(error);
        throw error;
    }
}