import React, { useReducer ,createContext} from 'react'


const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
}

const sumItems = items => {
    const itemsCounter = items.reduce((total ,product) => total + product.quanity, 0)
    const total = items.reduce((total ,product) => total + product.price * product.quanity ,0).toFixed(2)
    return {
        itemsCounter,
        total
    }
}


const cartReducer = (state, action) => {

    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload)) {
                state.selectedItems.push({
                    ...action.payload,
                    quanity: 1
                })
            }

            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems)
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload)
            return {
                ...state,
                selectedItems: [...newSelectedItems]
            }

        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexI].quanity++
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }

        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems[indexD].quanity--
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }

        case "CHECKOUT":
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true,
            }
            
            case "CLEAR":
                return {
                    selectedItems: [],
                    itemsCounter: 0,
                    total: 0,
                    checkout: false
                }
                default :
                    return state
            }
        }

export const cartContext = createContext()

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReducer, initialState)

    return (
        <cartContext.Provider value={{state ,dispatch}}>
            {children}
        </cartContext.Provider>
    )
}

export default CartContextProvider
