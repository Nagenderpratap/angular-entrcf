import { Component } from '@angular/core';
import { WindowRefService } from './service/window-ref.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ],
  providers: [WindowRefService]

})
export class HomeComponent  {
    constructor(private winRef: WindowRefService) {

      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://checkout.razorpay.com/v1/razorpay.js';
      document.head.appendChild(script);
    }
   rzp1 : any;
   razorPayConfig: any = {
      key: 'rzp_test_hXFeiRtmUUFqhE',
      amount: 100, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: 'Umbrella', // company name or product name
      description: 'testing use',  // product description
      image: './assets/logo.png', // company logo or product image
      order_id: 'order_121', // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#0c238a'
      }
    };

createRzpayOrder() {
    
    // call api to create order_id
    this.payWithRazor(123);
  }

  payWithRazor(val) {
    const options: any = {
      key: 'rzp_test_hXFeiRtmUUFqhE',
      amount: 100, // amount should be in paise format to display Rs 1255 without decimal point
      currency: 'INR',
      name: 'Umbrella', // company name or product name
      description: 'testing use',  // product description
      image: './assets/logo.png', // company logo or product image
      order_id: val, // order_id created by you in backend
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
      theme: {
        color: '#0c238a'
      }
    };
    options.handler = ((response, error) => {
      options.response = response;
      console.log(response);
      console.log(options);
      // call your backend api to verify payment signature & capture transaction
    });
    options.modal.ondismiss = (() => {
      // handle the case when user closes the form while transaction is in progress
      console.log('Transaction cancelled.');
    });
    const rzp = new this.winRef.nativeWindow.Razorpay(options);
    console.log(options)
    console.log(rzp)
    rzp.open();
  }

  //  payWithRazor2 (){
  //     this.rzp1 = new this.winRef.nativeWindow.Razorpay(this.razorPayConfig);
  //      this.rzp1.open();
  //  }
   
}
