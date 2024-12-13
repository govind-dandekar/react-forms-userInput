import { useState } from 'react';

export function useInput(defaultValue, validationFn){
	const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

	function handleInputChange(event){
    setEnteredValue(event.target.value);
    // once user edits field again, set didEdit to false
    // will be reset to true once user completes input (onBlur fx)
    // fires
    setDidEdit(false)
  }

	const valueIsValid = validationFn(enteredValue);

  function handleInputBlur() {
    setDidEdit(true)
  }

	return {
		value: enteredValue,
		handleInputChange,
		handleInputBlur,
		hasError: didEdit && !valueIsValid
	}
}