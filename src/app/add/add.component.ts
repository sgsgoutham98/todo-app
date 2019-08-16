import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {
  data=[]
      
  
  addTask(form){
  var task={"id": form.value.task,
    "message":form.value.message
   }
   this.data.push(task);

  }

}
