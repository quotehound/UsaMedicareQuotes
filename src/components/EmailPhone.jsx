import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './forms.css';
import Footer from '../Footer.jsx'
import Axios from 'axios';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import NumberFormat  from 'react-number-format';

class EmailPhone extends Component {

   
    constructor(props) {

        super(props);
    
        // this.state = {email_address: ''}
        // this.state = {phone_home: ''}
    
        this.onFinish = this.onFinish.bind(this);
      }
    
    


    state = {
        error: '',
        loading: false,
        response: ''
    }

    onFinish = (values) => {

        let email = document.getElementById('email_address').value;
        let phone = document.getElementById('phone_home').value;


        var realPhone = phone.replace(/[0-9]/g, '');

        document.getElementById('tele').value = phone;


        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);


const zip = urlParams.get('zip_code');
const lp = urlParams.get('lp_request_id');
const ab = urlParams.get('ab');
const gender = urlParams.get('gender');
const month = urlParams.get('month');
const day = urlParams.get('day');
const year = urlParams.get('year');
const address = urlParams.get('address');
const firstName = urlParams.get('first_name');
const lastName = urlParams.get('last_name');
    
       
  

 
        this.setState({
            loading: true 
          }, this.postMedicare(this.props.postData));

          this.props.history.push('/thank-you' + '?lp_request_id=' + lp + '&zip_code=' + zip + '&ab=' + ab + '&gender=' + gender + '&month=' + month + '&day=' + day + '&year=' + year + '&address=' + address + '&first_name=' + firstName + '&last_name=' + lastName + '&email=' + email + '&phone_home=' + phone)
    };

    postURL = (values) => {
        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);

        const zip = urlParams.get('zip_code');
const lp = urlParams.get('lp_request_id');
const ab = urlParams.get('ab');
const gender = urlParams.get('gender');
const month = urlParams.get('month');
const day = urlParams.get('day');
const year = urlParams.get('year');
const address = urlParams.get('address');
const firstName = urlParams.get('first_name');
const lastName = urlParams.get('last_name');
    
        

       let url = window.location.href;

       document.getElementById('url').value = url; 

    this.props.setURL(url)

    }

    postEmail = (values) => {

        let email = document.getElementById('email_address').value;

        this.props.setEmail(email);
        this.unhide()
    }

    postPhone = (values) => {
        
        let phone = document.getElementById('phone_home').value;

        var realPhone = phone.replace(/\D/g, "");

        console.log("updated phone is " + realPhone)

        this.props.setPhone(realPhone);

        this.unhide()
    }

    unhide(){

        let email = document.getElementById('email_address').value;
        let phone = document.getElementById('phone_home').value;


       if(email.length == 0 || phone.length == 0){
           document.getElementById('next').hidden = true;
       }
       else{
           toast.dismiss()
           document.getElementById('next').hidden = false;

       }

    }

    postMedicare = (postData) => {
        console.log(postData);
        Axios.post("https://quotehound.leadspediatrack.com/post.do", null, {
          params: postData,
        })

        .then((res) => {
            console.log(res)
            if (res.status === 200) {
              this.setState({
                loading: false,
              },() => {
                this.props.nextStep();
    
              this.props.callMediaAlpha();
            
              });
            }
          })
          .catch((err) => {
            if (err) throw err;
          });

    }





    render() {
        const { response, loading } = this.state

        const urlSearch = window.location.search;

        const urlParams = new URLSearchParams(urlSearch);

        const firstName = urlParams.get('first_name');


        return (
            <div>
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
                                            99%
                                        </span>
                                    </div>
                                </div>
                                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">

                                    <div style={{ width: "99%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>

                                </div>
                            </div>


                            <div className="test">
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
                                <div className="mt-6">

                                    <div>
                                        <div className="relative flex justify-center text-sm leading-5 con">
                                            <span className="px-2 text-black-500 text-3xl bold header">
                                                You're Almost There, {firstName}!
                                            </span>
                                        </div>
                                    </div>
                                    <form onSubmit={this.onFinish} >
                                        <div className="mt-6">
                                            <div className="w-full flex text-sm leading-5">

                                                <div className="text-sm leading-5 buttonBlockRow">

                                                    <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0" data-container={1}>
                                                        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0" data-bucket={1}>

                                                            <input className="appearance-none w-full p-3 text-lg font-semibold leading-none bg-white rounded " type='email' name="email_address" placeholder="Email" id="email_address" onChange={this.postEmail}  />
                                                        </div>


                                                        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0" data-bucket={2}>
                                                        <NumberFormat format="(###) ###-####" mask="_"  className="appearance-none w-full p-3 text-lg font-semibold leading-none bg-white rounded " id="phone_home" placeholder="Phone Number" name="phone_home" allowEmptyFormatting type='tel'
                                                        onChange={this.postPhone}/>

                                                        </div>
                                                    </div>





                                                </div>

                                               
                                            </div>

                                            <button className="px-6 py-4 mb-3 m-2 text-md font-bold bg-blue-400 hover:bg-blue-600 hover:shadow-lg text-white rounded transition duration-200 submitButton" id="next" type="submit" onClick={this.postURL} hidden={true} >Get My Free Quote!</button>


                                        </div>
                                        <p className="tcpa">   <input type="hidden" id="leadid_tcpa_disclosure" /> By pressing Get My Free Quote, I am providing my express written consent and e-signature which may be revoked at any time. I consent to receive emails, telephone calls, text messages, artificial or prerecorded messages from Us Medicare Quotes its affiliates, and/or any of our <a href="https://www.quotehound.com/partners"> marketing partners </a>  (or their service provider partners on their behalf) regarding their products and services (including Medicare Advantage plans, Medicare Part D Prescription Drug Plans or Medicare Supplement Insurance Plans) at the email address and telephone number provided, including my wireless phone number (if provided) utilizing an automated telephone dialing system. Telephone companies may impose additional charges on subscribers for messages.  I understand that I am not required to grant this consent as a condition of purchasing any property, goods, or services from the foregoing companies (2) I agree to this website's <a href="https://www.quotehound.com/privacy-policy"> Privacy Policy </a> and  <a href="https://www.quotehound.com/terms-conditions">Terms of Use</a>
</p>
                                    </form>

                                </div>

                            </div>
                        </div>




                    </div>


                </div>

                <Footer />
            </div>
        )
    }
}

export default withRouter(EmailPhone)
