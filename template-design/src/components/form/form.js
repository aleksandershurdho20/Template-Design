import React, { useState } from "react";
import "./form.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
const Form = props => {
  const{formTitle,projectTitle,projectInteresting,projectBudget}=props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [project, setProject] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [budget, setBudget] = useState("");
  function handleSubmit() {
    console.log(username, password, country, project, checkbox, budget, phone);
    // useEffect(() => console.log(username), [username]);
    // console.log([username])
  }
  // console.log(budget)
  // console.log(checkbox)
  return (
    
    <div className="w-full max-w-xs">
      
      {/* <div className="container-text">
                <h2 className="text-center">Let us get to know your better</h2>
            </div> */}
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="container-text">
          <h2 className="text-center">{formTitle}</h2>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 container-country">
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 mr-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              id="grid-state"
              placeholder="Country"
            >
              <option disabled>Contry</option>
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
          </div>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
          />
        </div>

        <div>
          <div>
            <p>
              <strong>{projectTitle}</strong>
            </p>
          </div>
          <div>
            <textarea
              className="resize-none border rounded focus:outline-none focus:shadow-outline"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="marketing">
          <div>
            <p>
              <strong>{projectInteresting}</strong>
            </p>
          </div>
          <div className="container-inside-marketing">
            <div className="left-form">
              <div className="checked">
                <input
                  className=""
                  type="checkbox"
                  value={checkbox}
                  onChange={(e) => setCheckbox(e.target.checked)}
                />
                <label className="ml-2">Option one</label>
              </div>
              <div className="checked">
                <input
                  className=""
                  type="checkbox"
                  value={checkbox}
                  onChange={(e) => setCheckbox(e.target.checked)}
                />
                <label className="ml-2">Option two</label>
              </div>
              <div className="checked">
                <input
                  className=""
                  type="checkbox"
                  value={checkbox}
                  onChange={(e) => setCheckbox(e.target.checked)}
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
                  onChange={(e) => setCheckbox(e.target.checked)}
                />
                <label className="ml-2">Option one</label>
              </div>
              <div className="checked">
                <input
                  className=""
                  type="checkbox"
                  value={checkbox}
                  onChange={(e) => setCheckbox(e.target.checked)}
                />
                <label className="ml-2">Option two</label>
              </div>
              <div className="checked">
                <input
                  className=""
                  type="checkbox"
                  value={checkbox}
                  onChange={(e) => setCheckbox(e.target.checked)}
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
              onChange={(e) => setBudget(e.target.value)}
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
      {/* <div className="sidepart"></div> */}
      <div className="submit">
            <div className="submit-circle">
              <div className="checker">
                <FontAwesomeIcon icon={faCheck}/>
              </div>
            </div>
            <h3 className="text-response">Thanks for your interest</h3>
            <p className="second-response">We’ll get in touch with you very soon!</p>
            <p className="third-response">P.S. In the meantime, learn more about growth marketing strategies <span className="fake-link">from our blog.</span></p>

      </div>
    </div>
  );
}

export default Form;