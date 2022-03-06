import { Component } from '@angular/core';
import { DateTimeService } from './date-time.service';
import { HttpclientService } from './httpclient.service';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-app';

  getdate:any;
  getinfo:any;
  jsondata:any;
  count=0;
  myForm:any;

  constructor(public date:DateTimeService, private ht:HttpclientService, private fb:FormBuilder){
    this.getdate = this.date.today;
    this.getinfo = [10,20,30];
    this.jsondata = this.date.jsondata1;
    this.count = this.date.increament();
  }

  ngOnInit(){
    this.ht.getPost().subscribe((data)=>console.log);
    this.myForm = this.fb.group({
      name:["",Validators.required],
      email:["",Validators.required,Validators.email],
      message:["",Validators.required,Validators.minLength(10)],
    })


  }

  onSubmitForm(){
    console.log(this.myForm.value);
    this.ht.sendPost(this.myForm.value).subscribe((data=>console.log(data)));
  }

  updateData(){
    console.log(this.myForm.value);
  }
      user={
         "email":'',
         "password":'',
         "city":'',
         "address":'',
         "address2":'',
         "zip":''
       };
  
       onSubmitofform(user:any){
         console.log(user);
  
       }

       userdata={
               "firstname":'',
               "lastname":'',
               "email":'',
               "password":''
             };
        
             onSubmit(userdata:any){
               this.userdata=userdata;
               this.date.sendData(this.userdata);
             }

             from:any;
             to:any;
             price:any;
              printDays(from:any,to:any,price:any){
                 this.from = new Date(from).getTime();
                 this.to=new Date(to).getTime();
                 let day =(this.to-this.from)/(1000*3600*24);
                 console.log(from);
                 console.log(to);
                 console.log(day);
                 console.log("total Amount : "+ (day*price));
             }

             table:any=[];
     number='';
     printTable(){
       console.log(this.number);

       for(let i=1;i<=10;i++){
         this.table.push(i*Number(this.number));
       }

     }


    

}
