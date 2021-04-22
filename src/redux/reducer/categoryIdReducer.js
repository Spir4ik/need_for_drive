export default function categoryIdReducer(state = '', action) {
    return action.type === 'ADD_CATEGORY_ID' ? action.payload.categoryId : state
}