import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
data;
  constructor(private http:HttpClient) { }

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
}
