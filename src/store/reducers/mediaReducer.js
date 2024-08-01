const initialState = {
    media: []
};

const mediaReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MEDIA':
            return { ...state, media: action.payload };
        default:
            return state;
    }
};

export default mediaReducer;
