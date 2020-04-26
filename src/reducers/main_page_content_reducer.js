const mainPageContentReducer = (state, action) => {
 if (state === undefined) {
  return null;
 }

 if (action.type === 'RETRIEVE_CONTENT' ){
  return action.payload;
 } else {
  return state;
 }
};
export default mainPageContentReducer;
