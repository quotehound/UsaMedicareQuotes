import React, { Component } from 'react'
import { withRouter, BrowserRouter } from 'react-router-dom';
import {Route, Switch} from 'react-router';

import './App.css';


import NavBar from './NavBar';
import Footer from './Footer'
import LandingPage from './LandingPage';

import Enrolled from './components/Enroll';
import Gender from './components/Gender';
import Month from './components/Month';
import Day from  './components/Day';
class App extends Component {

  state = {
    route: '/',
    routes: [
      '/',
      '/enrolled',
      '/gender',
      '/month',
      '/day',
      '/year',
      '/address',
      '/name',
      '/email-phone',
      '/thank-you'

    ],

    postData: {
      lp_campaign_id: '610208246d0ec',
			lp_campaign_key: 'Yy4MHdVc3ZKWp6q7RXxg',
			lp_s1: '12',
			lp_s2: '13',
			landing_page: 'usmedicarequotes.com',
			TCPA_Consent: 'Yes',
			TCPA_Language:
				'By clicking Get My Quote I provide my electronic signature and express written consent to telemarketing calls, text messages, emails, and postal mail from this Web site, our marketing and re-marketing network, and up to eight insurance companies or their affiliates or representatives at the phone number (including wireless number), email address, and postal address provided by me. I consent to calls and text messages transmitting insurance quotes, or seeking related additional information from me, using an Automatic Telephone Dialing System or prerecorded or artificial voices. I consent that my signature is not a condition of purchasing any property, goods, or services and that I may revoke my consent at any time.',
			trusted_form_cert_id: '',
			jornaya_lead_id: '',
			// Redirect_URL: "",
			IP_Address: '',
			user_agent: navigator.userAgent,
			//s1 form fields
			are_you_currently_enrolled_in_both_medicare_part_a_part_b: '',
			//S2 form fields
			gender: '',
      month: '',
      day: '',
      year: '',
			dob: '',
			address: '',
			zip_code: '',
			first_name: '',
			last_name: '',
			email_address	: '',
			phone_home: '',
      entrance_url: '',
      lp_request_id:'',
    }
  }

  changeRoute = () => {
    this.setState ({
      route: '',
    })
  }

  render() {
    return (
      <BrowserRouter> 
        <div>
          <NavBar />
          <Switch>
              <Route path='/' exact> 
                <LandingPage 
                  setZipCode={(v) => {
                    this.setState({
                      postData: {
                        ...this.state.postData,
                        zip_code: v,
                      },
                    });
                  }}
                
                />
              </Route>

              <Route path='/enrolled' exact>
                  <Enrolled
                      setEnrolled={(v) => {
                        this.setState({
                          postData: {
                            ...this.state.postData,
                            are_you_currently_enrolled_in_both_medicare_part_a_part_b: v,
                          },
                        });
                      }}
                  />
              </Route>

              <Route path='/gender' exact> 
                  <Gender 

                    setGender={(v) => {
                      this.setState({
                        postData: {
                          ...this.state.postData,
                          gender: v,
                        },
                      });
                    }}
                  
                  />
              </Route>

              <Route path='/month' exact>
                    <Month
                      setMonth={(v) => {
                        this.setState({
                          postData: {
                            ...this.state.postData, 
                            month: v,
                          }
                        })
                      }}
                    />
                </Route> 

                <Route path='/day' exact> 
                      <Day 

                      setDate={(v) => {
                        this.setState({
                          postData: {
                            ...this.state.postData,

                            day: v,
                          },
                        });
                      }}

                      />
                
                </Route>

          </Switch>

          <Footer />
        </div>
      
      
      </BrowserRouter>
    )
  }
}

export default withRouter(App)