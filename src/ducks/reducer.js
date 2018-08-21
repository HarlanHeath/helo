const initialState = {
  username: "",
  profPic: "",
  id: 0
};

const USER_LOGIN = "USER_LOGIN";

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        username: action.payload.username,
        profPic: action.payload.profPic,
        id: action.payload.id
      };
    default:
      return state;
  }
}

export function userLogin(username, profPic, id) {
  return {
    type: USER_LOGIN,
    payload: { username, profPic, id }
  };
}
