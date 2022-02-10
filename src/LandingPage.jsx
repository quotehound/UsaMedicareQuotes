import React, { Component } from 'react';
import {withRouter } from 'react-router';

import './LandingPage.css';
import Footer from './Footer';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Logo from './Assets/usmq.png';
import Money from './Assets/Money.svg';
import Connect from './Assets/Connect.svg';
import Form from './Assets/Form.svg';
import Bugsnag from '@bugsnag/js';


import $ from 'jquery';


class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {zip_code: ''};

    this.nextStep = this.nextStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
  }

  validateZip = (values) => {

    values.preventDefault();

    let val = document.getElementById('zip').value;
    
    if(val.length < 5){
      console.log('wrong length');
      return 
    }
  

    else {

      var ziptastic = require('ziptastic');

      let zipVal = document.getElementById('zip').value;


      var requestOptions = {
        async: true,
        crossDomain: true,
        method: 'GET',
        redirect: 'follow',
        url:'https://ziptasticapi.com/' + zipVal
      };

      $.ajax(requestOptions).done(function(response){
        console.log(response);

        var parse = JSON.parse(response);


        if (parse.error) {
          toast.error('Please enter a correct zip code');
          document.getElementById('submit').disabled = true;

        }

        else {

          localStorage.clear();


          localStorage.setItem('zip', val);

          document.getElementById('zipCode').value = val
          document.getElementById('zip').value = val;
    
          let zipVal = localStorage.getItem('zip');

          let city = parse.city;
        let state = parse.state;

        localStorage.setItem('city', city);
        localStorage.setItem('state', state);

        document.getElementById('city').value = city;
          document.getElementById('state').value = state; 

        }

        
      }

      )
    
    }
  }

  nextStep = (values) => {

let zipValue = localStorage.getItem('zip');
document.getElementById('submit').isDisabled = false;

values.preventDefault();

toast.dismiss();

console.log('success', zipValue)

this.setState({ zip_code: zipValue })

const urlSearch = window.location.search;
const urlParams = new URLSearchParams(urlSearch)

const lp = urlParams.get('lp_request_id');
const gclid = urlParams.get('gclid');

    this.props.setLp(lp)

console.log('updated props with value: ', zipValue);
this.props.history.push('/enrolled' + '?lp_request_id=' + lp + '&zip_code=' + zipValue);

  }


  autoFocusClick() {
    document.getElementById('zip').focus();
  }

    
  render() {
    const zippy = localStorage.getItem('zip');

        return (
            <div>
              
{/* End of header with Form */}

{/* Start Of how it works */}
<section className="relative pb-10 overflow-hidden backdrop">

  <ToastContainer 
          position="top-center"
          autoClose={5000}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={'colored'}
        />
  <div className="relative z-10 container px-4 mx-auto">
    <div className="max-w-4xl pt-20">
      
      <h2 className="mt-8 mb-8 lg:text-7xl md:text-xl sm:text-xl text-white font-bold" data-config-id="header">Compare Multiple Medicare Insurance Quotes</h2>
      <form onSubmit={this.nextStep} >

<div className="flex justify items-center formSection py-10">
<input className="appearance-none w-1/2 p-3 text-lg font-semibold leading-none text-center bg-white rounded zipInput " type="text" name="addressField" placeholder="Zip Code" pattern="\d*" defaultValue={zippy} onChange={this.validateZip} id="zip" minLength={5} maxLength={5} />
                  <button className="px-6 py-4 mb-3 m-2 text-md font-bold bg-blue-400 hover:bg-blue-600 hover:shadow-lg text-white rounded transition duration-200 zipSubmit" type="submit" id='submit' disabled={false}>Start My Quote</button>

</div>

</form>
    </div>
  </div>
  <div className="hidden navbar-menu relative z-50">
    <div className="navbar-backdrop fixed inset-0 bg-blue-800 opacity-90" />
    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-8 bg-white border-r overflow-y-auto">
      <div className="flex items-center mb-16 pr-6">
        <a className="ml-16 mr-auto text-xl text-blue-800 font-semibold leading-none" href="/" data-config-id="brand">
          <img className="h-7" src={Logo} alt="" width="auto" />
        </a>
      </div>
     
    </nav>
  </div>
</section>


{/* End of how it works */}

{/* CTA Section Start */}
<section className="py-20">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0 text-center">
        <span className="inline-block mx-auto mb-6 flex items-center justify-center rounded-full">
                  <img src={Form} className="startIcon" />

        </span>
        <h3 className="mb-4 text-2xl font-bold font-heading" data-config-id="header3">Fill Out Our Simple Form</h3>
        <p className="text-lg text-black leading-loose max-w-lg mx-auto lg:px-12" data-config-id="desc3">Our Form is simple and easy! Finish it in 2 minutes</p>
      </div>
      <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0 text-center">
      <span className="inline-block mx-auto mb-6 flex items-center justify-center rounded-full">
                  <img src={Connect} className="startIcon"  />

        </span>
        <h3 className="mb-4 text-2xl font-bold font-heading" data-config-id="header3">Get Connected </h3>
        <p className="text-lg text-black leading-loose max-w-lg mx-auto lg:px-12" data-config-id="desc3">Connect to get real rates accross our network.</p>


      </div>
      <div className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0 text-center">
      <span className="inline-block mx-auto mb-6 flex items-center justify-center rounded-full">
                  <img src={Money} className="startIcon"/>

        </span>
        <h3 className="mb-4 text-2xl font-bold font-heading" data-config-id="header3">May Save Money</h3>
        <p className="text-lg text-black leading-loose max-w-lg mx-auto lg:px-12" data-config-id="desc3">Start saving money and relax with your updated rates.</p>
      </div>
    </div>

   <div className="inline-block mx-auto mb-6 flex items-center justify-center rounded-full p-10 "> 
   <a className="inline-block mr-auto lg:mr-0 py-4 px-8 text-md text-white font-medium leafing-normal bg-blue-400 hover:bg-blue-600 hover:shadow-lg rounded" onClick={this.autoFocusClick} data-config-id="primary-action">Get Your No Obligation Free Quote</a>

   </div>

  </div>
</section>

{/* CTA Section End */}

<section className="relative py-20 bg-gray-50">
  <div className="container px-4 mx-auto">
    <div className="w-full lg:w-1/2 mb-12">
      <div className="lg:max-w-md">
        <h2 className="mb-4 lg:mb-6 text-4xl md:text-5xl mt-3 font-bold font-heading" data-config-id="header">We make insurance <b> Easy </b></h2>
        <p className="mb-8 text-2xl text-black leading-loose" data-config-id="desc">So you can enjoy the simple things in life.</p>
        <div className="flex items-start py-4">
          <div className="mr-5 text-gray-500">
            <svg className="w-10 h-10 check" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle  cx={24} cy={24} r="23.5" stroke="#C2C9D2" />
            </svg>
          </div>
          <div className="max-w-sm">
            <h3 className="mb-2 text-xl leading-loose text-gray-600" data-config-id="header1"><b>No</b> Medical Exams</h3>
          </div>
        </div>
        <div className="flex items-start py-4">
          <div className="mr-5 text-gray-500">
          <svg className="w-10 h-10 check" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle  cx={24} cy={24} r="23.5" stroke="#C2C9D2" />
            </svg>
          </div>
          <div className="max-w-sm">
            <h3 className="mb-2 text-xl leading-loose text-gray-600" data-config-id="header2"><b>No</b> Waiting Period</h3>
          </div>
        </div>
        <div className="flex items-start py-4">
          <div className="mr-5 text-gray-500">
          <svg className="w-10 h-10 check" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle  cx={24} cy={24} r="23.5" stroke="#C2C9D2" />
            </svg>
          </div>
          <div className="max-w-sm">
            <h3 className="mb-2 text-xl leading-loose text-gray-600" data-config-id="header3"><b>No</b> Pushy Agents Or Hidden Fees</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="h-96 lg:h-auto lg:absolute top-0 right-0 bottom-0 lg:w-1/2 bg-no-repeat bg-cover lastSec" data-config-id="image" />
</section>



{/* Footer  */}        <Footer />


            </div>
        )
    }
}

export default withRouter(LandingPage)
