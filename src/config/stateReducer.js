/* eslint-disable */
export default function (state, action) {
    switch(action.type) {
        case "setIcons": {
            return {
                ...state,
                icons: action.data
            }
        }
        case "setIconsOff": {
            return {
                ...state,
                iconsOff: action.data
            }
        }
        default: 
            return state
    }
}