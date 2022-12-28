export const initialState = {
    lang: "en"
}

export const Actions = {
    changeLanguage: "changeLanguage"
}

export const reducer = (state, action) => {
    switch (action.type) {
        case Actions.changeLanguage: {
            return {
                ...state, 
                lang: action.payload
            }
        }
        default: 
            throw new Error("Non-existing action");
    }
}