import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private paymentService: PaymentService) {}

  paymentForm = new FormGroup({
    amount: new FormControl(''),
    currency: new FormControl(''),
    msisdn: new FormControl(''),
    paymentChannel: new FormControl(''),
    senderName: new FormControl(''),
  });

  submitPayment() {
    console.log(this.paymentForm.value);
    this.paymentService.postPayment(this.paymentForm.value).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
