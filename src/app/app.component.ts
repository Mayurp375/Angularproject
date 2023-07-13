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
  userName:String = "";

  ngOnInit(): void {
    this.title = "Hellow from Bridgelabz";
  }

  onClick(event: any): void {
    console.log("Save button is clicked!", event);
    window.open(this.url, "_blank");
  }
}
