import { useState } from 'react';

export const useForm = ( initialForm = {}) => { //por defecto el initial form va a ser un objeto
  
    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ({target}) => {
        const { value, name } = target;
        setFormState({
            ...formState,
            [ name ] : value
        })
       
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }



    return {
        ...formState, //al desestructurarlo puedes ahorrarte const { username, email, password } = formState; de formwithcustomhook.jsx
        formState,
        onInputChange,
        onResetForm,
    }
}
