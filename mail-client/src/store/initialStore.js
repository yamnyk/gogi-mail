const initialStore = {
  title: "Hello from redux! I'm not happy to be here...",
  counter: 0,
  emails: {
    loading: false,
    error: null,
    result: []
  },
  favourites: [],
  user: JSON.parse(localStorage.getItem("user"))
};

export default initialStore;