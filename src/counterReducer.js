const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case "MOREONE":
        return state + 1;

      case "LESSONE":
        return state - 1;

      case "RESET":
        return state = 0;

      case "MORETEN":
        return state + 10;

      case "LESSTEN":
        return state - 10;
      
      default: return state;
    }
    
  };
  export default counterReducer;