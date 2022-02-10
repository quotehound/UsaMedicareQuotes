import React, { Component } from 'react';
import {withRouter} from 'react-router';

import './forms.css';
import Footer from '../Footer';


class Enrolled extends Component {

  onLoad() {


    console.log('on load function started')
    const urlSearch = window.location.search;

    const urlParams = new URLSearchParams(urlSearch);

    const zip = urlParams.get('zip_code');
    const city = urlParams.get('city');
    const state = urlParams.get('state');
    const rf = urlParams.get('refferal_url');
    const lp = urlParams.get('lp_request_id');

    if (lp) {
      document.getElementById('lp').value = lp;
    }
    else {
      return
    }
    if (rf) {
      localStorage.clear();
      console.log('rf was true, ls cleared');

      localStorage.setItem('zip', zip);

      document.getElementById('zipCode').value = zip
      document.getElementById('zip').value = zip;

      let zipVal = localStorage.getItem('zip');


    localStorage.setItem('city', city);
    localStorage.setItem('state', state);

    document.getElementById('city').value = city;
      document.getElementById('state').value = state; 

    }



  }

    onNext = (values) => {

        values.preventDefault();
        
        let v = values.currentTarget.dataset.value;

        this.props.setEnrolled(v);

        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);
    
        const zip = urlParams.get('zip_code');
        const lp = urlParams.get('lp_request_id')

        this.props.history.push('/gender' + '?lp_request_id=' + lp + '&zip_code=' + zip + '&ab=' + v)

        
    }


    render() {
        return (
            <div className="back bg-white"> 
       <div className="bg-blue-500 headerText justify-center align-middle text-center">
       <h2>Get A No Obligation Medicare Insurance Quote</h2>
                </div>
      <div className="bg-white rounded-lg shadow-xl sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden m-12 formDiv content-center">
      <div className="px-4 py-8 sm:px-10">


          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              
              <div className="text-right">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  16%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

              <div style={{ width: "16%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

            </div>
          </div>


        <div className="test"> 
          <div className="mt-6">
        

            <div> 
            <div className="relative flex justify-center leading-5 con">
              <span className="px-2 text-black-500 text-xl bold header">
              Are you currently enrolled in both Medicare Part A & Part B?
              </span>
            </div>
          </div>
          <form onSubmit={this.onNext} >
          <div className="mt-6">
            <div className="w-full space-y-6 relative flex justify-center text-sm leading-5">

              <div className="text-sm leading-5 buttonBlock">
              
                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Yes" onClick={(values) => this.onNext(values)}>Yes</button>
                
                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="No" onClick={(values) => this.onNext(values)}>No</button>
              </div>
            </div>
          </div>

          </form>

          </div>

          </div>
        </div>

       


      </div>

      <Footer />

      </div>
        )
    }
}

export default withRouter(Enrolled)