import { DECREMENT, INCREMENT, SHOW } from "./actionType";

const init = {
  count: 0,
  isShow: true,
};

export const reducer = (state = init, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT :
        return{
            ...state,
            count:state.count - 1 ,
        };
        case SHOW :
        return{
            ...state,
            isShow:!state.isShow ,
        }; 

    default:
      return state;
  }
};
