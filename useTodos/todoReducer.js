
export const todoReducer = ( initialState = [], action ) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];
        
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done //va a ser la negacion de como está, por ejemplo si era false ahora es true
                    }
                }

                return todo;
            })
    
        default:
            return initialState;
    }


}