import { useState } from "react"


export const AddCategory = ({ onNewValue }) => {
    const [inputValue, setInputValue] = useState('')

    // const onInputChange = (event) => {
    //     setinputValue(event.target.value)
    //     console.log(event.target.value);
    // }

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {

        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        onNewValue(inputValue.trim());
        // setCategories((categories) => [inputValue, ...categories]);
        setInputValue('');

    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}
