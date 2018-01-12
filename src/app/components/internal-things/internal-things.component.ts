import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-internal-things',
  templateUrl: './internal-things.component.html',
  styleUrls: ['./internal-things.component.css','../../common.css'],
  inputs: ['parentData'],
  outputs:['childEvent']
})
export class InternalThingsComponent implements OnInit {

  public ittitle = "internal-things works!";
  public imgSrc = "www.google.com/images";
  public applyclass = true;
  public applystyle = false;
  public fname; 
  public lname;
  public dispValue =true;
  public props = 3;
  public forElements =['1','2','3','4','5'];
  public cone=true;
  public ctwo=true;
  public style = "italic";
  public size = "30px";
  public parentData = String;
  childEvent = new EventEmitter<String>();
 

  onClick(value){
    console.log(value)
  }

  onClick2(value){
    console.log(value)
  }

  ChangeColor(){
    this.cone = !this.cone
    this.ctwo = !this.ctwo
  }
  onChange(value:String){
    this.childEvent.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
