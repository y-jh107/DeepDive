export default function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => {
        return item.id === action.targetId
          ? { ...item, isPublished: !item.isPublished }
          : item;
      });
    case "DELETE":
      return state.filter((item) => {
        return item.id !== action.targetId;
      });
    case "RESET":
      return [];
    default:
      return state;
  }
}
