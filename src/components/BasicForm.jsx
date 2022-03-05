import React from "react";

const BasicForm = (props) => {
  const { name, type, preparation_time } = props.formState;
  const { isDishTypeSet, setIsDishTypeSet, setFormState } = props;

  return (
    <>
      <label htmlFor="name">Dish name: </label>
      <input type="text" value={name} name="name" id="name" required autofocus />
      <label htmlFor="preparation_time">Preparation time: </label>
      <input
        type="time"
        value={preparation_time}
        name="preparation_time"
        id="preparation_time"
        step="2"
      />
      <label htmlFor="type">Dish type: </label>
      <select name="type" value={type} id="type" required>
        <option hidden disabled value="">
          -- Choose dish type --
        </option>
        <option value="pizza">Pizza</option>
        <option value="soup">Soup</option>
        <option value="sandwich">Sandwich</option>
      </select>
    </>
  );
};

export default BasicForm;