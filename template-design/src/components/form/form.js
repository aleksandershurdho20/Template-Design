import React, { useState, useRef } from "react";
import "./form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";


// const Form = props => {
//   const { formTitle, projectTitle, projectInteresting, projectBudget } = props;
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [country, setCountry] = useState("");
//   const [phone, setPhone] = useState("");
//   const [project, setProject] = useState("");
//   const [checkbox, setCheckbox] = useState(false);
//   const [budget, setBudget] = useState("");
//   const submitAlert = useRef();
//   const [showEmailError, setEmailError] = useState(false);
//   const [showNameError, setNameError] = useState(false);


//   function handleSubmit() {
//     if(email == ""){setEmailError(true)}
//     if(firstName == ""){setNameError(true)}


//     else{


//     console.log(email, country, project, checkbox, budget, phone);
//     // useEffect(() => console.log(username), [username]);
//     // console.log([username])
//     submitAlert.current.style = "display: flex"; 
//   }
//   }

//   const handleChange = e => {

//   }
//   // console.log(budget)
//   // console.log(checkbox)
//   return (
//     <div className="form-container w-full max-w-xs">
//       {/* <div className="container-text">
//                 <h2 className="text-center">Let us get to know your better</h2>
//             </div> */}
//       <div onChange={handleChange} className="inner-form-container">
//         <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <div className="form-title-container">
//             <h2 className="form-title">{formTitle}</h2>
//           </div>
//           <div className="username mb-4">
//             <div className="f-name">
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="first-name"
//                 type="text"
//                 placeholder="First name"
//                 value={firstName}
//                 onChange={e => setFirstName(e.target.value)}

//               />
//               {showNameError ? <div className="email-handling"> ErrorMessage </div> : null}

//             </div>
//             <div className="l-name">
//               <input
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="last-name"
//                 type="text"
//                 placeholder="Last name"
//                 value={lastName}
//                 onChange={e => setLastName(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="mb-6">
//             <input
//               className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//               id="password"
//               type="email"
//               placeholder="enter email"
//               value={email}
//               onChange={e => setEmail(e.target.value)}
//             />
//             {showEmailError ? <div className="email-handling"> ErrorMessage </div> : null}
//         </div>

//           <div className="md:w-1/3 mb-6 md:mb-0 country-selector-container">
//             <div className="country-selector">
//               <select
//                 className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 pr-8 mr-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 value={country}
//                 onChange={e => setCountry(e.target.value)}
//                 id="grid-state"
//                 placeholder="Country"
//               >
//                 <option disabled>Contry</option>
//                 <option>New Mexico</option>
//                 <option>Missouri</option>
//                 <option>Texas</option>
//               </select>
//             </div>
//             <input
//               className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
//               id="number"
//               type="number"
//               value={phone}
//               onChange={e => setPhone(e.target.value)}
//               placeholder="Phone Number"
//             />
//           </div>

//           <div>
//             <div>
//               <p>
//                 <strong>{projectTitle}</strong>
//               </p>
//             </div>
//             <div>
//               <textarea
//                 className="resize-none border rounded focus:outline-none focus:shadow-outline"
//                 value={project}
//                 onChange={e => setProject(e.target.value)}
//               ></textarea>
//             </div>
//           </div>

//           <div className="marketing">
//             <div>
//               <p>
//                 <strong>{projectInteresting}</strong>
//               </p>
//             </div>
//             <div className="marketing-container">
//               <div className="left-form">
//                 <div className="checked">
//                   <input
//                     className=""
//                     type="checkbox"

//                     value={checkbox}
//                     onChange={e => setCheckbox(e.target.checked)}
//                   />
//                   <label className="ml-2">Option one</label>
//                 </div>
//                 <div className="checked">
//                   <input
//                     className=""
//                     type="checkbox"

//                     value={checkbox}
//                     onChange={e => setCheckbox(e.target.checked)}
//                   />
//                   <label className="ml-2">Option two</label>
//                 </div>
//                 <div className="checked">
//                   <input
//                     className=""
//                     type="checkbox"
//                     value={checkbox}
//                     onChange={e => setCheckbox(e.target.checked)}
//                   />
//                   <label className="ml-2">Option one</label>
//                 </div>
//               </div>

//               <div className="right-form">
//                 <div className="checked">
//                   <input
//                     className=""
//                     type="checkbox"
//                     value={checkbox}
//                     onChange={e => setCheckbox(e.target.checked)}
//                   />
//                   <label className="ml-2">Option one</label>
//                 </div>
//                 <div className="checked">
//                   <input
//                     className=""
//                     type="checkbox"
//                     value={checkbox}
//                     onChange={e => setCheckbox(e.target.checked)}
//                   />
//                   <label className="ml-2">Option two</label>
//                 </div>
//                 <div className="checked">
//                   <input
//                     className=""
//                     type="checkbox"
//                     value={checkbox}
//                     onChange={e => setCheckbox(e.target.checked)}
//                   />
//                   <label className="ml-2">Option three</label>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div>
//               <p>
//                 <strong>{projectBudget}</strong>
//               </p>
//             </div>
//             <div className="relative">
//               <select
//                 className="appearance-none select-fill w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 mr-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                 id="grid-select"
//                 value={budget}
//                 onChange={e => setBudget(e.target.value)}
//                 placeholder="Select your Amount"
//               >
//                <option>Select your Amount</option>

//                 <option>100</option>
//                 <option>200</option>
//               </select>
//             </div>
//           </div>

//           <div className="flex items-center justify-between">
//             <button
//               className="bg-blue text-white font-bold start-project"
//               type="button"
//               onClick={handleSubmit}
//             >
//               Start your project
//             </button>
//           </div>
//         </form>
//       </div>

//       <div ref={submitAlert} className="submit">
//         <div className="submit-circle">
//           <div className="checker">
//             <FontAwesomeIcon icon={faCheck} />
//           </div>
//         </div>
//         <h3 className="onsubmit-response-title">Thanks for your interest</h3>
//         <p className="onsubmit-response-message">
//           We’ll get in touch with you very soon!
//         </p>
//         <p className="onsubmit-response-ps">
//           P.S. In the meantime, learn more about growth marketing strategies
//           <span className="fake-link"> from our blog.</span>
//         </p>
//       </div>
//       {/* <div className="sidepart"></div> */}
//     </div>
//   );
// };

// export default Form;



export default class Form extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      phone: "",
      project: "",
      checkbox: "",
      budget: "",
      error: ""
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
    if(this.state.email === ""){
      this.setState({error: "Email cannot be empty"})
      e.target.classList.add("add_border")
      const error_view = document.createElement("h4")
      error_view.innerText = this.state.error
      while(e.target.parentNode.children[1]){
        e.target.parentNode.removeChild(e.target.parentNode.children[1])
      }
      e.target.parentNode.appendChild(error_view)
    } else {
      this.setState({error: ""})
    }
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <div className="form-container w-full max-w-xs">
        {/* <div className="container-text">
                <h2 className="text-center">Let us get to know your better</h2>
            </div> */}
        <div className="inner-form-container">
          <form onChange={this.handleChange} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="form-title">{this.props.formTitle}</h2>
            <div className="form-title-container">
              
            </div>
            <div className="username mb-4">
              {/* <h4 style={{"color": "red"}}>{this.state.error}</h4> */}
              <div className="f-name">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="first-name"
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  value={this.state.firstName}
                />

              </div>
              <div className="l-name">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="last-name"
                  type="text"
                  placeholder="Last name"
                  value={this.state.lastName}
                  name="lastName"
                />
              </div>
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="email"
                placeholder="enter email"
                value={this.state.email}
                name="email"
              />
            </div>

            <div className="md:w-1/3 mb-6 md:mb-0 country-selector-container">
              <div className="country-selector">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 pr-8 mr-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={this.state.country}
                  id="grid-state"
                  placeholder="Country"
                  name="country"
                >
                  <option disabled>Contry</option>
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
              </div>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="number"
                type="number"
                value={this.state.phone}
                placeholder="Phone Number"
                name="phone"
              />
            </div>

            <div>
              <div>
                <p>
                  <strong>{this.props.projectTitle}</strong>
                </p>
              </div>
              <div>
                <textarea
                  className="resize-none border rounded focus:outline-none focus:shadow-outline"
                  value={this.state.project}
                  name="project"
                ></textarea>
              </div>
            </div>

            <div className="marketing">
              <div>
                <p>
                  <strong>{this.props.projectInteresting}</strong>
                </p>
              </div>
              <div className="marketing-container">
                <div className="left-form">
                  <div className="checked">
                    <input
                      className=""
                      type="checkbox"
                      name="checkbox"
                      value={this.state.checkbox}
                    />
                    <label className="ml-2">Option one</label>
                  </div>
                  <div className="checked">
                    <input
                      className=""
                      type="checkbox"
                      name="checkbox"
                      value={this.state.checkbox}
                    />
                    <label className="ml-2">Option two</label>
                  </div>
                  <div className="checked">
                    <input
                      className=""
                      type="checkbox"
                      name="checkbox"
                      value={this.state.checkbox}
                    />
                    <label className="ml-2">Option one</label>
                  </div>
                </div>

                <div className="right-form">
                  <div className="checked">
                    <input
                      className=""
                      type="checkbox"
                      name="checkbox"
                      value={this.state.checkbox}
                    />
                    <label className="ml-2">Option one</label>
                  </div>
                  <div className="checked">
                    <input
                      className=""
                      type="checkbox"
                      name="checkbox"
                      value={this.state.checkbox}
                    />
                    <label className="ml-2">Option two</label>
                  </div>
                  <div className="checked">
                    <input
                      className=""
                      type="checkbox"
                      name="checkbox"
                      value={this.state.checkbox}
                    />
                    <label className="ml-2">Option three</label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <p>
                  <strong>{this.props.projectBudget}</strong>
                </p>
              </div>
              <div className="relative">
                <select
                  className="appearance-none select-fill w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 mr-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-select"
                  value={this.state.budget}
                  placeholder="Select your Amount"
                >
                  <option>Select your Amount</option>

                  <option>100</option>
                  <option>200</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="bg-blue text-white font-bold start-project"
                type="button"
                onClick={this.handleSubmit}
              >
                Start your project
            </button>
            </div>
          </form>
        </div>

        <div className="submit">
          <div className="submit-circle">
            <div className="checker">
              <FontAwesomeIcon icon={faCheck} />
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
      </div>
    )
  }
}