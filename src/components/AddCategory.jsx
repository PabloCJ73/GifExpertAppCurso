import { useState } from "react";

export const AddCategory = ({
  // setCategories
  onNewCategory
}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
    // console.log(inputValue);
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories( categories => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        // onChange={ (event) => onInputChange(event) }
        // manera mas corta equivalente a la anterior
        onChange={ onInputChange }
      />
    </form>
  ;
};
