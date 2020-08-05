
const initialState = {
    weather: {},
    units: 'metric',
    location: 'Plovdiv',
    details: false
}

export function rootReducer(state = initialState, action: { type: string; data: any }) {
    switch (action.type) {
        case 'ADD_WEATHER':
            return {
                ...state,
                weather: action.data,
            }

        case 'SET_UNITS':
            return {
                ...state,
                units: action.data,
            }

        case 'SET_LOCATION':
            return {
                ...state,
                location: action.data,
            }

        case 'SET_DETAILS':
            return {
                ...state,
                details: action.data,
            }
            
        default:
            return state;
    }
}
