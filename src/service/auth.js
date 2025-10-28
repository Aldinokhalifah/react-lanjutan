import { useJwt } from "react-jwt";
import API from "../api";

export const login = async ({ email, password }) => {
    try {
        const { data } = await API.post('/login', {email, password});
        return data
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const register = async ({ name, email, password }) => {
    try {
        const { data } = await API.post('/register', {name, email, password});
        return data
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const UserDecode = (token) => {
    const  { decodedToken, isExpired} = useJwt(token);

    try {
        if(isExpired) {
            return {
                success: false,
                message: 'Token Expired',
                data: null
            }
        }

        return {
            success: true,
            message: 'Token Valid',
            data: decodedToken
        }
    } catch (error) {
        return {
            success: false,
            message: error.message,
            data: null
        }
    }
}