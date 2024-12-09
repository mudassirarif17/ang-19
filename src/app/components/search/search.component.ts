import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();

  
  onSearch(){
    console.log("On search Called");
    this.search.emit(this.text);
  }

  text = "";
  inputChange(event:any){
    // console.log("On search Called", event.target.value);
    this.text = event.target.value;
    console.log(this.text);
  }

  onTyping(event:any){
     console.log("On Typing Called" , event.target.value);
  }


}
