export default {
  state: {
    count: 0,
    date: new Date()
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
};
