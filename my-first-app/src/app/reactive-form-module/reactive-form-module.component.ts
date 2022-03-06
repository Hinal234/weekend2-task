import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-module',
  templateUrl: './reactive-form-module.component.html',
  styleUrls: ['./reactive-form-module.component.css']
})
export class ReactiveFormModuleComponent implements OnInit {
  myForm:any;
  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {


    // this.myForm = new FormGroup({
    //      name: new FormControl('Hinal'),
    //      email: new FormControl(''),
    //      message: new FormControl('')
    //    });


    // this.myForm = this.fb.group({
    //   name:['Hinal', Validators.required],
    //   email:['',[Validators.required, Validators.email]],
    //   message:['',[Validators.required,Validators.minLength(10)]]
    // })

    this.myForm = this.fb.group({
      fname:['John', Validators.required],
      lname:['Doe', Validators.required],
      email:['hinal@mail.com',[Validators.required, Validators.email]],
      location:['Ahmedabad',[Validators.required]],
      city:['Ahmedabad',[Validators.required]],
      age:[32,[Validators.required,Validators.min(18)]],
      contact:['12364434890',[Validators.required,Validators.minLength(10)]],
      startdate:['',Validators.required],
      enddate:['',Validators.required]
    })
  }

  getDate(date:any){
    return new Date(date);
  }
  getDays(sdate:any,edate:any){
    return (edate.getTime()-sdate.getTime()) / (1000*3600*24);
  }
  
  
  onSubmit(form: FormGroup){
    console.log('valid',form.valid);
    console.log('fname', form.value.fname);
    console.log('lname', form.value.lname);
    console.log('email', form.value.email);
    console.log('location', form.value.location);
    console.log('city', form.value.city);
    console.log('age', form.value.age);
    console.log('contact', form.value.contact);
    console.log('startdate',this.getDate(form.value.startdate));
    console.log('enddate',this.getDate(form.value.enddate));
    console.log("Total Number of day",this.getDays(this.getDate(form.value.startdate),this.getDate(form.value.enddate))); 
    }


  
  // onSubmit(form: FormGroup){
  //   console.log('valid',form.valid);
  //   console.log('Name', form.value.name);
  //   console.log('email', form.value.email);
  //   console.log('message', form.value.message);
  // }


}
