import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Data Binding";
  imgUrl = "./assets/angular.svg";
  message = "";
  // update below count to verify model-view updatation is happening or not.
  count = 0;
  size = 0;
  actionName = "Submit";
  isSingle = true;
  isBlueColor = true;
  isSkyblueBackground = true;

  triggerEvent() {
    this.message =
      "User triggered the event by clicking on the button. It calls corresponding template statement (function in model) which displayed this message.";
  }
}
