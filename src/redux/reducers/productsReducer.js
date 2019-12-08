const initialUserState = {
    products: [],
    
    
}

export function productsReducer (state = initialUserState, action) {
    switch(action.type) {
        case 'ADD_PRODUCT' : {
            return {
                ...state,
                products: [action.payload, ...state.products]
            }
        }

        case 'GET_PRODUCTS' : {
            return {
                ...state,
                products: action.payload
            }
        }
     
    
        default: {
            return {...state}
        }
    }
}

