const initialState = {
    loginInformation: {},
    CardInfo: []
}
const myStore = (state = initialState, action) => {
    switch (action.type) {
        case "LOGINUSER":
            return {
                ...state,
                loginInformation: action.payload
            }
        case "CardData":
            return {
                ...state,
                CardInfo: [...state.CardInfo, action.payload]
            }
        default: return state
    }
}
export default myStore