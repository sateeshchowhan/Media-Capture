import axios from 'axios';

export const setMedia = (media) => ({
    type: 'SET_MEDIA',
    payload: media
});

export const fetchMedia = () => async (dispatch, getState) => {
    const token = getState().auth.token;
    try {
        const response = await axios.get('http://localhost:5001/api/media', {
            headers: { Authorization: `Bearer ${token}` }
        });
        dispatch(setMedia(response.data));
    } catch (error) {
        console.error(error);
    }
};

export const uploadMedia = (file) => async (dispatch, getState) => {
    const token = getState().auth.token;
    const formData = new FormData();
    formData.append('file', file);

    try {
        await axios.post('http://localhost:5001/api/media/upload', formData, {
            headers: { 
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data' 
            }
        });
        dispatch(fetchMedia());
    } catch (error) {
        console.error(error);
    }
};
