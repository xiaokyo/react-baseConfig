export const GET_USER_INFO = "userInfo/GET_USER_INFO";

export function getUserInfo() {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: GET_USER_INFO,
        payload: {
          name: "intro",
          intro: "121323132"
        }
      });
    }, 2000);
  };
}
