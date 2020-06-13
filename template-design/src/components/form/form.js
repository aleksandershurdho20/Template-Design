import React from 'react'; 
import './form.css';
function Form(){
    return(
        <div className="w-full max-w-xs">
            <div className="container-text">
                <h2 className="text-center">Let us get to know your better</h2>
            </div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 container-country">
                <div className="relative">
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 mr-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" placeholder="Country">
                    <option disabled>Contry</option>
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                    </select>
                </div>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="number" placeholder="Phone Number" />
         </div>
        
        <div>
            <div>
                <p><strong>Tell us a bit more about your project</strong></p>
            </div>
            <div>
            <textarea className="resize-none border rounded focus:outline-none focus:shadow-outline"></textarea>
            </div>
        </div>

        <div className="marketing">
             <div>
                <p><strong>What of marketing are you interested in?</strong></p>
            </div>
            <div className="container-inside-marketing">
                <div className="left-form">
                    <div className="checked">
                        <input className="" type="checkbox" />
                        <label>Option one</label>
                    </div>
                    <div className="checked">
                        <input className="" type="checkbox" />
                        <label>Option two</label>
                    </div>
                    <div className="checked">
                        <input className="" type="checkbox" />
                        <label>Option one</label>
                    </div>
                </div>

                <div className="right-form">
                <div className="checked">
                        <input className="" type="checkbox" />
                        <label>Option one</label>
                    </div>
                    <div className="checked">
                        <input className="" type="checkbox" />
                        <label>Option two</label>
                    </div>
                    <div className="checked">
                        <input className="" type="checkbox" />
                        <label>Option three</label>
                    </div>
                </div>
            </div>

        </div>

        <div>
              <div>
                <p><strong>What your moonthley badget look file?</strong></p>
            </div>
            <div className="relative">
                    <select className="appearance-none select-fill w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-3 pr-8 mr-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-select" placeholder="Select your Amount">
                    <option disabled>Contry</option>
                    </select>
                </div>
        </div>

          <div className="flex items-center justify-between">
            <button className="bg-blue text-white font-bold start-project" type="button">
              Start your project
            </button>
          </div>
        </form>
      </div>
    );
}

export default Form;