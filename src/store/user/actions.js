export const actions = {
  SET_ROLE({commit} , payload) {
    // console.log(payload);
    commit("SET_ROLE" , payload);
  },

  SET_USER_INFO({commit} , payload) {
    console.log(payload);
    commit("SET_USER_INFO" , payload);
  },

}




export const SET_USER_INFO = actions.SET_USER_INFO