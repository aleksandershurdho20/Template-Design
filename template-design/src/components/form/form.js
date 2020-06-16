import React, { useState, useRef } from "react";
import "./form.css";

import { isMin, isEmail } from "../../utils/validators";

const Form = ({
  formTitle,
  projectTitle,
  projectInteresting,
  projectBudget,
}) => {
  //? First name
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(null);
  //? Last name
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(null);
  //? Email
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  //? Country
  const [country, setCountry] = useState("");
  //? Phone number
  const [phone, setPhone] = useState("");
  //? Project info
  const [project, setProject] = useState("");
  //? Interests
  const [checkbox, setCheckbox] = useState(false);
  //? Budget
  const [budget, setBudget] = useState("");
  //* Refs
  const submitAlert = useRef();
  const firstNameInput = useRef();
  const firstNameSymbol = useRef();
  const lastNameInput = useRef();
  const lastNameSymbol = useRef();
  const emailInput = useRef();
  const emailSymbol = useRef();

  const checkForWrongInputs = () => {
    let hasErrors = false;
    //? Validate the firstName input

    if (!isMin(firstName, 3)) {
      setFirstNameError(`First name must be atleast 3 characters long.`);
      firstNameInput.current.style = "border-color: red;";
      firstNameSymbol.current.style = "display: block";
      hasErrors = true;
    }
    //? Validate the lastName input
    if (!isMin(lastName, 3)) {
      setLastNameError(`Last name must be atleast 3 characters long.`);
      lastNameInput.current.style = "border-color: red;";
      lastNameSymbol.current.style = "display: block";
      hasErrors = true;
    }
    //? Validate the email input
    if (!isEmail(email)) {
      setEmailError("This is not an email.");
      emailInput.current.style = "border-color: red;";
      emailSymbol.current.style = "display: block";
      hasErrors = true;
    }
    return hasErrors;
  };

  const resetErrors = () => {
    //? Reset first name input field
    setFirstNameError(null);
    firstNameInput.current.style = "border-color: lightgray;";
    firstNameSymbol.current.style = "display: none";
    //? Reset last name input field
    setLastNameError(null);
    lastNameInput.current.style = "border-color: lightgray;";
    lastNameSymbol.current.style = "display: none";
    //? Reset email name input field
    setEmailError(null);
    emailInput.current.style = "border-color: lightgray;";
    emailSymbol.current.style = "display: none";
  };

  const handleSubmit = e => {
    e.preventDefault();
    resetErrors();
    const hasErrors = checkForWrongInputs();
    if (hasErrors) return;
    submitAlert.current.style = "display: flex";
    //Console Log values from inputs
    console.log(`firstname : ${firstName}, lastname : ${lastName}, email : ${email}, country : ${country}, phone : ${phone},project : ${project} ,checkbox : ${checkbox},budget : ${budget}`);
  };

  return (
    <div className="form-container w-full max-w-xs">
      {/* <div className="container-text">
                <h2 className="text-center">Let us get to know your better</h2>
            </div> */}
      <div className="inner-form-container">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="form-title-container">
            <h2 className="form-title">{formTitle}</h2>
          </div>
          <div className="username">
            <div className="f-name mb-3">
              <div className="input-wrapper">
                <input
                  ref={firstNameInput}
                  className="my-input shadow appearance-none rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="first-name"
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
                <div
                  ref={firstNameSymbol}
                  className="input-error-symbol-container"
                >
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
              </div>
              <p className="error-message">{firstNameError}</p>
            </div>
            <div className="l-name mb-3">
              <div className="input-wrapper">
                <input
                  ref={lastNameInput}
                  className="my-input shadow appearance-none rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="last-name"
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
                <div
                  ref={lastNameSymbol}
                  className="input-error-symbol-container"
                >
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
              </div>
              <p className="error-message">{lastNameError}</p>
            </div>
          </div>
          <div className="form-element mb-3">
            <div className="input-wrapper">
              <input
                ref={emailInput}
                className="my-input shadow appearance-none rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="test@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <div ref={emailSymbol} className="input-error-symbol-container">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
            </div>
            <p className="error-message">{emailError}</p>
          </div>
          <div className="md:w-1/3 country-selector-container">
            <div className="country-selector">
              <select
                className="my-input block appearance-none w-full bg-gray-200 text-gray-700 py-2 pr-8 mr-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={country}
                onChange={e => setCountry(e.target.value)}
                id="grid-state"
                placeholder="Country"
              >
                <option disabled>Contry</option>
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
            </div>
            <div className="form-element  mb-3" style={{ width: "100%" }}>
              <input
                className="my-input shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                type="number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div>
            <div>
              <p>
                <strong>{projectTitle}</strong>
              </p>
            </div>
            <div style={{ marginBottom: 10 }}>
              <textarea
                className="resize-none border rounded focus:outline-none focus:shadow-outline"
                value={project}
                onChange={e => setProject(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div className="marketing">
            <div>
              <p>
                <strong>{projectInteresting}</strong>
              </p>
            </div>
            <div className="marketing-container">
              <div className="left-form">
                <div className="checked">
                  <input
                    className=""
                    type="checkbox"
                    value={checkbox}
                    onChange={e => setCheckbox(e.target.checked)}
                  />
                  <label className="ml-2">Option one</label>
                </div>
                <div className="checked">
                  <input
                    className=""
                    type="checkbox"
                    value={checkbox}
                    onChange={e => setCheckbox(e.target.checked)}
                  />
                  <label className="ml-2">Option two</label>
                </div>
                <div className="checked">
                  <input
                    className=""
                    type="checkbox"
                    value={checkbox}
                    onChange={e => setCheckbox(e.target.checked)}
                  />
                  <label className="ml-2">Option one</label>
                </div>
              </div>

              <div className="right-form">
                <div className="checked">
                  <input
                    className=""
                    type="checkbox"
                    value={checkbox}
                    onChange={e => setCheckbox(e.target.checked)}
                  />
                  <label className="ml-2">Option one</label>
                </div>
                <div className="checked">
                  <input
                    className=""
                    type="checkbox"
                    value={checkbox}
                    onChange={e => setCheckbox(e.target.checked)}
                  />
                  <label className="ml-2">Option two</label>
                </div>
                <div className="checked">
                  <input
                    className=""
                    type="checkbox"
                    value={checkbox}
                    onChange={e => setCheckbox(e.target.checked)}
                  />
                  <label className="ml-2">Option three</label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p>
                <strong>{projectBudget}</strong>
              </p>
            </div>
            <div className="relative">
              <select
                className="appearance-none select-fill w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 mr-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-select"
                value={budget}
                onChange={e => setBudget(e.target.value)}
                placeholder="Select your Amount"
              >
                <option>100</option>
                <option>200</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue text-white font-bold start-project"
              type="button"
              onClick={handleSubmit}
            >
              Start your project
            </button>
          </div>
        </form>
      </div>

      <div ref={submitAlert} className="submit">
        <div className="submit-circle">
          <div className="checker">
            <i className="fas fa-check"></i>
          </div>
        </div>
        <h3 className="onsubmit-response-title">Thanks for your interest</h3>
        <p className="onsubmit-response-message">
          We’ll get in touch with you very soon!
        </p>
        <p className="onsubmit-response-ps">
          P.S. In the meantime, learn more about growth marketing strategies
          <span className="fake-link"> from our blog.</span>
        </p>
      </div>
      {/* <div className="sidepart"></div> */}
    
    </div> //Main div ending
  );
};

export default Form;
