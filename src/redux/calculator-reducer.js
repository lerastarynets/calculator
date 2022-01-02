const initialState = {
  buttons: [
    { val: "AC" },
    { val: "/" },
    { val: "*" },
    { val: 7 },
    { val: 8 },
    { val: 9 },
    { val: "-" },
    { val: 4 },
    { val: 5 },
    { val: 6 },
    { val: "+" },
    { val: 1 },
    { val: 2 },
    { val: 3 },
    { val: 0 },
    { val: "." },
    { val: "=" },
  ],
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default calculatorReducer;
