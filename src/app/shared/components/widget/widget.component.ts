import { Component, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "app-widget",
  templateUrl: "./widget.component.html",
  styleUrls: ["./widget.component.css"],
})
export class WidgetComponent {
  @Input() primaryText = "";
  @Input() title = "";
  @Output() clicked = new EventEmitter<string>();

  load(event: Event) {
    this.clicked.emit(this.primaryText.toLowerCase().replace(/\s+/g, ""));
  }
}
