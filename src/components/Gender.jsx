import React, { Component } from 'react';



  
import { withRouter } from 'react-router';

import './forms.css';
import Footer from '../Footer';


class Gender extends Component {


  onFinish = (values) => {

    values.preventDefault();
    
    let g = values.currentTarget.dataset.value;

    this.props.setGender(g);

    //get URL params

    const urlSearch = window.location.search;

    const urlParams = new URLSearchParams(urlSearch);

    const zip = urlParams.get('zip');
    const lp = urlParams.get('lp');
    const ab = urlParams.get('ab');

    this.props.history.push('/month' + '?lp=' + lp + '&zip=' + zip + '&ab=' + ab + '&gender=' + g)
    


  }

  skip = (values) => {

    values.preventDefault();
    
   
    let skip = 'opt_out'
    this.props.setGender(skip);

    //get URL params

    const urlSearch = window.location.search;

    const urlParams = new URLSearchParams(urlSearch);

    const zip = urlParams.get('zip');
    const lp = urlParams.get('lp');
    const ab = urlParams.get('ab');

    this.props.history.push('/month' + '?lp=' + lp + '&zip=' + zip + '&ab=' + ab + '&gender=' + skip)

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
                  33%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

              <div style={{ width: "33%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

            </div>
          </div>


        <div className="test"> 
          <div className="mt-6">
        

            <div> 
            <div className="relative flex justify-center text-sm leading-5 con">
              <span className="px-2 text-black-500 text-3xl bold header">
                What Is Your Gender?
              </span>
            </div>
          </div>
          <form onSubmit={this.onFinish} >
          <div className="mt-6">
            <div className="w-full space-y-6 relative flex justify-center text-sm leading-5">

              <div className="text-sm leading-5 buttonBlock">
                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Male" onClick={this.onFinish}>Male</button>


                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Female" onClick={this.onFinish}>Female</button>

                <button className="chooseButton bg-blue-500 rounded text-white font-bold" type="button" data-config-id="05_button" data-value="Non-Binary" onClick={(values) => this.onFinish(values)}>Non-Binary</button>
                
              </div>
            </div>

            <a onClick={this.skip}> Skip Question </a>
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

export default withRouter(Gender)