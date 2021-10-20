export const mutations = {
  SET_ROLE(state , payload){
    (state.role = payload)
    // console.log(state.role = payload);
  },

  SET_USER_INFO(state , payload){
    (state.userInfo = payload)
    console.log(state.userInfo = payload);
  }
}
