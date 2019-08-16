import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  data = []


  addTask(form) {
    console.log(form)
    var task = {
      "name": form.value.name,
      "message": form.value.message
    }
    this.data.push(task);
    console.log(this.data)

  }





}
