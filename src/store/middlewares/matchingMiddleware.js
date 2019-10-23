const matchingMiddleware = (store) => (next) => (action) => {
  console.log('I am the middleware, and I pass this action: ', action);
  next(action);

  // // POUR EXEMPLE: Requests with Axios
  // // I have to react only to certain types of action
  // switch (action.type) {
  //   case FETCH_QQCHOSE:
  //     axios.get(url)
  //       .then(response => {
  //         // Here you know that you have successfully obtained your answer
  //         // You can recover it in response.data
  //         const { data } = response.
  //         // The reducer must then be informed of the new data received
  //         store.dispatch(receivedQqchose(data));
  //       })
  //       .catch()
  //   default:
  //      next(action);
  // }
};

export default matchingMiddleware;