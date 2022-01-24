import React, {Component} from 'react';

import Logo from  './Assets/usmq.png';


class Footer extends Component {

    render() {

        return(
          
          <section className="py-20">
          <div className="container mx-auto px-4 pb-10">
            <div className="flex flex-wrap justify-between items-center -mx-4">
              <div className="w-full lg:w-auto px-4">
                <a className="inline-block mb-6 text-gray-900 text-lg font-semibold" href="/" data-config-id="brand">
                  <img className="h-7" src={Logo} alt="" width="auto" />
                </a>
              </div>
          
              
              <div className="w-full lg:w-1/2 px-4">
                
                <div className="flex flex-wrap items-center justify-end">
                <ul className="w-full lg:w-auto inline-flex flex-wrap mb-4 lg:mb-0">
            <li className="mr-12 mb-2 md:mb-0"><a className="text-sm font-medium" href="https://www.quotehound.com/dont-sell-my-info" data-config-id="01_link1">Do Not Sell</a></li>
            <li className="mr-12 mb-2 md:mb-0"><a className="text-sm font-medium"  href="https://www.quotehound.com/privacy-policy" data-config-id="01_link2">Privacy Policy</a></li>
            <li className="mr-12 mb-2 md:mb-0"><a className="text-sm font-medium"  href="https://www.quotehound.com/terms-conditions" data-config-id="01_link3">Terms & Conditions</a></li>
          </ul>
                  <a className="inline-block mr-auto lg:mr-0 py-4 px-8 text-sm text-white font-medium leafing-normal bg-blue-500 hover:bg-blue-300 hover:shadow-lg rounded"  href="tel:18884261036" data-config-id="primary-action">Get Your No Obligation Free Quote</a>
                </div>
                <p className="mt-6 lg:hidden text-sm text-gray-500" data-config-id="copy">All rights reserved © Quotehound 2021</p>
                <p className="mt-6 lg:hidden text-sm text-gray-500" data-config-id="copy">Quotehound Inc. is not endorsed by or affiliated with Medicare or any government program.</p>

              </div>
            </div>
          </div>
          <div className="container mx-auto px-4 pb-10">

          <p className="hidden lg:block text-sm text-gray-500" data-config-id="copy">Quotehound Inc. is not endorsed by or affiliated with Medicare or any government program.</p>

          <p className="text-sm text-left text-gray-500"> This is a commercial site designed for the solicitation of insurance from selected health and Life insurance carriers. It is not an insurer, an insurance agency, or a medical provider. Insurance agency services may be provided by a partner licensed agency. This site is not maintained by or affiliated with the federal government’s Health Insurance Marketplace website or any state government health insurance marketplace</p>

          <p className="text-sm text-left text-gray-500">Invitations for application for insurance via usmedicarequotes.comare made through Quotehound, Inc. or through its designated agent(s), Devanand Gaymes, only where licensed and appointed. License numbers are available here or upon request and are automatically provided where required by law.  Devanand Gaymes is a licensed General Lines Health Insurance agent in the State of Texas. Devanand Gaymes' Texas license number is 1897511</p>
          </div>

          <div className="container mx-auto px-4 pb-10 text-center">
          <p className="hidden lg:block text-sm text-gray-500" data-config-id="copy">All rights reserved © Quotehound 2021</p>

          </div>
        </section>
    
        )
    }
}

export default Footer;
