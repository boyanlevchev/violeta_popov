const appContentReducer = (state, action) => {
 if (state === undefined) {
  return null;
 }

 if (action.type === 'DISPLAY_PAGE' ){
  return action.payload;
 } else {
  return state;
 }
};
export default appContentReducer;
