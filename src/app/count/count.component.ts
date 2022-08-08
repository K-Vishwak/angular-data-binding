import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-count",
  templateUrl: "./count.component.html",
  styleUrls: ["./count.component.css"]
})
export class CountComponent {
  @Input()
  size;

  @Output()
  sizeChange = new EventEmitter<number>();

  sizeChangeEvent(event) {
    this.sizeChange.emit(event);
  }
}
