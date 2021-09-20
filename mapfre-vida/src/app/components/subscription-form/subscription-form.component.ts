import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/shared/models/form-model';

@Component({
  selector: 'subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss']
})
export class SubscriptionFormComponent implements OnInit {

  form = new Form();

  constructor() { }

  ngOnInit() {
  }

  sendForm() {
      console.log(this.form)
  }

}
