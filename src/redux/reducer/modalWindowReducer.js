export default function modalWindowReducer(state = false, action) {
    return action.type === 'SHOW_MODAL_WINDOW' ? !state : state;
}
