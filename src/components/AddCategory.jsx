import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmitValue = (e) => {
    e.preventDefault();
    if(inputValue.trim().length <= 1) return;
    // setCategories(categories => [...categories, inputValue]);
    onNewCategory(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmitValue}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
