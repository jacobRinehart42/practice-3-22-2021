import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-childcomponent",
  templateUrl: "./childcomponent.component.html",
  styleUrls: ["./childcomponent.component.css"]
})
export class ChildcomponentComponent implements OnInit {
  @Input() inputText: string = "";

  constructor() {}

  ngOnInit() {}

  message: string = "";
  @Output() outputValue: EventEmitter<string> = new EventEmitter();

  sendMessage() {
    this.outputValue.emit(this.message);
  }
}
