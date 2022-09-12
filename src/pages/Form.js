import React, { useReducer } from "react";
import { INITIAL_STATE, FormReducer } from "../reducers/FormReducer";
import "../stylesheet/form.css";

const Form = () => {
  const [formData, dispatch] = useReducer(FormReducer, INITIAL_STATE);

  const handleInputChange = (e) => {
    e.preventDefault();
    dispatch({
      type: "INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleRadioChange = (e) => {
    dispatch({ type: "RADIO", payload: { value: e.target.value } });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <form className="form">
        <div>
          <h1>Form Using useReducer Hook</h1>
          <hr />
        </div>
        <div className="my-3">
          <label htmlFor="name" className="form-label">
            Product Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            onChange={handleInputChange}
          />
        </div>
        <div className="my-3">
          <label htmlFor="price" className="form-label">
            Product Price:
          </label>
          <input
            type="number"
            name="price"
            id="price"
            className="form-input"
            onChange={handleInputChange}
          />
        </div>
        <div className="my-3">
          <label htmlFor="size">Choose a size:</label>
          <select name="size" id="size" onChange={handleInputChange}>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="my-3">
          <label htmlFor="size">Available Stocks:</label>
          <div className="counter">
            <button
              className="counter-btn"
              onClick={(e) => {
                e.preventDefault();
                dispatch({ type: "DECREASE" });
              }}
            >
              -
            </button>
            <span>{formData.quantity}</span>
            <button
              className="counter-btn"
              onClick={(e) => {
                e.preventDefault();
                dispatch({ type: "INCREASE" });
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="my-3">
          <label htmlFor="color" className="form-label">
            Choose a color:
          </label>
          <div>
            <input
              type="radio"
              value="red"
              checked={formData.color === "red"}
              onChange={handleRadioChange}
            />
            <label htmlFor="red">Red</label>
          </div>
          <div>
            <input
              type="radio"
              value="blue"
              checked={formData.color === "blue"}
              onChange={handleRadioChange}
            />
            <label htmlFor="blue">Blue</label>
          </div>
          <div>
            <input
              type="radio"
              value="black"
              checked={formData.color === "black"}
              onChange={handleRadioChange}
            />
            <label htmlFor="black">Black</label>
          </div>
          <div>
            <input
              type="radio"
              value="green"
              checked={formData.color === "green"}
              onChange={handleRadioChange}
            />
            <label htmlFor="green">Green</label>
          </div>
        </div>
        <div className="my-3">
          <button type="submit" className="button" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
