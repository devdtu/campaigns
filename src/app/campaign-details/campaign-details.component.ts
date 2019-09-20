import { Component, OnInit, Input } from "@angular/core";
import { Campaign } from "../campaign.model";

@Component({
  selector: "app-campaign-details",
  templateUrl: "./campaign-details.component.html",
  styleUrls: ["./campaign-details.component.scss"]
})
export class CampaignDetailsComponent implements OnInit {
  @Input() campaignsSelected: Campaign[];
  constructor() {}

  ngOnInit() {}
}
