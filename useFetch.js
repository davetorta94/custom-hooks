import { useEffect, useState } from "react";

export const useFetch = ( url ) => { //cada vez que el url cambie se va a disparar el efecto de abajo
  
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async() => {

        setState({
            ...setState,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();

        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    }

    useEffect(() => {
        getFetch()
    }, [url])
    

    return { //esto es lo mismo que poner directamente state, pero lo hace por si un dia quiere expandirlo, agregar un nuevo método, etc.
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}
