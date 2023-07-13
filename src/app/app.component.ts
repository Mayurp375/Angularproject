import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hellow world';
  imgUrl = "../assets/bl.jpg";
  url = "https://www.bridgelabz.com/";
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = "Hellow from Bridgelabz";
  }

  onClick(event: any): void {
    console.log("Save button is clicked!", event);
    window.open(this.url, "_blank");
  }

  onInput($event: any) {
    console.log("Change Event Occured!", $event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$')

    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    } else {
      this.nameError = "Name is incorract";
    }

  }
}
