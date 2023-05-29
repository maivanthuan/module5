import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    rfEmail: FormGroup;
    countries: string[] = ['da nang', 'sai gon', 'ha noi'];
  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.rfEmail = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.pattern(/^\+84\d{9,10}$/), Validators.required]),
      password: new FormControl('', [Validators.required, Validators.min(6)]),
      confirmPass: new FormControl('', )
    });

  }



}
