const initialState = {chatList: []};

const chatListReducer = (state = initialState, action) => {
    if(action.type === 'ADD_CHAT'){
        return { 
            ...state,
            chatList: [...state.chatList, action.payload]
        }
    }

    return state;
};

export default chatListReducer;