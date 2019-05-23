// A utility function used to trim all user inputs
// (Just to show code structuring patterns) else, the ES6 trim() can be used.
export const trimInput = (value) => {
    return value.replace(/^\s+|\s+$/g, '');
};

