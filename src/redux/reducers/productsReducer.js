const initialUserState = {
    products: [],
    product:{},
    
}

export function productsReducer (state = initialUserState, action) {
    switch(action.type) {
        case 'ADD_PRODUCT' : {
            return {
                ...state,
                product: action.payload
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

