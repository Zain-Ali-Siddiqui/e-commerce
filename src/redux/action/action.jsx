export const LoginUserData = (loginInformation) => async (dispatch) => {
    dispatch({
        type: 'LOGINUSER',
        payload: loginInformation,
    })
}
export const cartData = (CardInfo) => async (dispatch) => {
    dispatch({
        type: 'CardData',
        payload: CardInfo,
    })
}