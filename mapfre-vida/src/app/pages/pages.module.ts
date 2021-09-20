import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitPageComponent } from './init-page/init-page.component';
import { SubscriptionFormComponent } from '../components/subscription-form/subscription-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [InitPageComponent, SubscriptionFormComponent],
  exports: [InitPageComponent]
})
export class PagesModule { }
