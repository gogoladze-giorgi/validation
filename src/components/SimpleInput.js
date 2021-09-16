import React, { useState } from "react";

const SimpleInput = (props) => {
  // const nameRef = useRef();

  // const formSubmitHandler = (e) => {
  //   e.preventDefault();
  //   const nameValue = nameRef.current.value;
  //   console.log(nameValue);

  //   // nameRef.current.value = ""; => NOT IDEAL, DONT MANIPULATE THE DOM
  // };
  const [name, setName] = useState("");
  const [nameIsValide, setNameIsValid] = useState(true);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const nameInutValidation = () => {
    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }
  };
  const nameInputBlur = () => {
    nameInutValidation();
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();

    nameInutValidation();

    setNameIsValid(true);
    console.log(name);

    setName("");
  };
  const forClassName = nameIsValide ? "form-control" : "form-control invalid";
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={forClassName}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          // ref={nameRef}
          onBlur={nameInputBlur}
          value={name}
          onChange={nameChangeHandler}
        />
        {!nameIsValide && (
          <div className="error-text">Name must not be empty</div>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
