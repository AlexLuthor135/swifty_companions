import axios from 'axios';
import { API_UID, API_SECRET, API_URL } from '@env'

let token = null;
let tokenExpiration = null;

export async function getToken(){

    if (token && tokenExpiration && new Date() < tokenExpiration) {
        return token;
    }
    try {
        const response = await axios.post(`${API_URL}/oauth/token`,
            {
                grant_type: 'client_credentials',
                client_id: API_UID,
                client_secret: API_SECRET,
            });
        token = response.data.access_token;
        const expiresIn = response.data.expires_in;
        tokenExpiration = new Date(new Date().getTime() + expiresIn * 1000);
        return token;
    } catch (error) {
        console.error('Error getting token: ', error.message);
        throw new Error('Failed to access token');
    }
}

export async function getUserData(login) {
    const fetchUser = async (accessToken) => {
        const response = await axios.get(`${API_URL}/v2/users/${login}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return response.data;
    }
    try {
        return await fetchUser(await getToken());
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return await fetchUser(await getToken());
            }
            console.error(`Error fetching user data: `, error.message);
            throw error;
    }
}