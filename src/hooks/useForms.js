import { useState } from "react";

// Hook personalizado para manejar formularios
export const useForms = (stateInitial = {}) => {
    const [values, setValues] = useState(stateInitial);
    const reset = () => {
        return setValues(stateInitial)
    }

    const cambiarCampo = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    };
    return [values, cambiarCampo, reset]
}
