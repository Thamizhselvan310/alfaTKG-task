import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {FormGroup,FormControl} from "@angular/forms"
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  data
sno=1
  product:FormGroup
  constructor(private http:HttpClient) { 
    this. product= new FormGroup({
      
      categories: new FormControl('categories'),
      item: new FormControl('item'),
      quantity : new FormControl('quantity'),
      price : new FormControl('price') 
    })
  
  this.refresh()
  
  }




  ngOnInit() {
    this.refresh()
    
  }
  refresh(){
    this.http.get("http://localhost:3000").
    subscribe( (d) => {
       this.data=d;
        console.log(this.data);
      

    })

  }
    add(){

      console.log(this.product.value);
      this.http.post("http://localhost:3000/create",this.product.value).
      subscribe(
        function(dat) {

          
          console.log("success..");
        
  
      })
      this.ngOnInit()
    }
    delete(n){
      console.log(n)
      this.http.get("http://localhost:3000/delete/"+n._id).
      subscribe(
        function(dat) {

          
          console.log("success..");
        
  
      })
      
    }




  }
