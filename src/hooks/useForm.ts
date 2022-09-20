import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialState: T) => {

    const  [formData, seFormData] = useState(initialState);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        seFormData(preview => ({
            ...preview,
            [event.target.name]: event.target.value
        }))
    }

    return {
        ...formData,
        formData,
        onChange
    }
}