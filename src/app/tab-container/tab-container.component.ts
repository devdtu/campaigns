import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import * as moment from "moment";
@Component({
  selector: "app-tab-container",
  templateUrl: "./tab-container.component.html",
  styleUrls: ["./tab-container.component.scss"]
})
export class TabContainerComponent implements OnInit {
  @Input() tabOptions;

  @Output() setTabSelected = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  tabSelected(tab: string) {
    this.setTabSelected.emit(tab);
  }
}
