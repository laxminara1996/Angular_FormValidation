import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  fname:string="";
  pwd:string="";
  data:string='';
  valid(input:any):void{
    if(input.valid){
      this.data=input.value;
    this.data = (JSON.stringify(this.data));
    }else{
      alert('some errors')
    }
   
  }
}
