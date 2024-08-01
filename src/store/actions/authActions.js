import axios from 'axios';

export const login = (token) => ({
    type: 'LOGIN',
    payload: token
});

export const logout = () => ({
    type: 'LOGOUT'
});

export const loginUser = (email, password) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5001/api/auth/login', { email, password });
        dispatch(login(response.data.token));
    } catch (error) {
        console.error(error);
    }
};
