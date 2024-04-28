import { DECREMENT, INCREMENT, SHOW } from "./actionType";

export const handlePlus = () => {
  return {
    type: INCREMENT,
  };
};

export const handleMinus = () => {
  return {
    type: DECREMENT,
  };
};

export const handleShow = () => {
  return {
    type: SHOW,
  };
};
