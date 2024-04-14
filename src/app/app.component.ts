import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  schema: any = [
    {
      component: 'TEXT_FIELD',
      name: 'name',
      label: 'Your Name',
      isRequired: true,
      type: 'text',
    },
    {
      component: 'TEXT_FIELD',
      name: 'name',
      label: 'Your Email',
      isRequired: true,
      type: 'email',
    },
    {
      component: 'TEXT_FIELD',
      name: 'password',
      label: 'Password',
      isRequired: true,
      type: 'password',
    },
    {
      component: 'TEXT_FIELD',
      name: 'confirmPassword',
      label: 'Confirm Password',
      isRequired: true,
      type: 'password',
    },
    {
      component: 'RADIO_BUTTON',
      name: 'gender',
      label: 'Gender',
      isRequired: true,
      options: ['male', 'female', 'other'],
      type: 'password',
    },
    {
      component: 'DATE_PICKER',
      name: 'birthdate',
      label: 'Date of Birth',
      type: 'password',
    },
    {
      component: 'SLIDER',
      name: 'rating',
      label: 'Rating',
      minValue: 1,
      maxValue: 5,
    },
    {
      component: 'CHECKBOX',
      isRequired: true,
      name: 'accept-terms',
      label: 'I accept the terms and conditions',
    },
  ];

  onFormSubmit(event: any): void {
    console.log(event);
  }
}
