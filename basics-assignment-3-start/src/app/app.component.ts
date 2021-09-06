import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  visible = false;
  clickArray = [];

  clickedFunction() {
    this.visible = !this.visible;
    // this.clickArray.push(this.clickArray.length + 1);
    this.clickArray.push(new Date());
  }
}
