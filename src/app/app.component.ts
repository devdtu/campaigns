import { Component, OnInit } from "@angular/core";
import { Campaign } from "./campaign.model";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  tabOptions = ["UPCOMING CAMPAIGNS", "LIVE CAMPAIGNS", "PAST CAMPAIGNS"];
  title = "CampaignScheduler";
  selectedTab = "UPCOMING CAMPAIGNS";

  campaignsSelected: Campaign[] = [];

  ngOnInit(): void {
    this.selectedTab = this.tabOptions[0];
    this.setCampaignsData();
  }
  tabSelected(tab: string): void {
    this.selectedTab = tab;
    this.setCampaignsData();
  }
  setCampaignsData(): void {
    if (this.selectedTab === this.tabOptions[0]) {
      const tempData: Campaign[] = [];
      dummyData.forEach(data => {
        if (data.date > new Date()) {
          tempData.push(data);
        }
      });
      this.campaignsSelected = tempData;
      return;
    }

    const datePast = new Date();
    datePast.setDate(datePast.getDate() - 1);

    if (this.selectedTab === this.tabOptions[2]) {
      const tempData: Campaign[] = [];
      dummyData.forEach(data => {
        if (data.date < datePast) {
          tempData.push(data);
        }
      });
      this.campaignsSelected = tempData;
      return;
    }

    if (this.selectedTab === this.tabOptions[1]) {
      const tempData: Campaign[] = [];
      dummyData.forEach(data => {
        if (data.date > new Date() || data.date < datePast) {
        } else {
          tempData.push(data);
        }
      });
      this.campaignsSelected = tempData;
      return;
    }
  }
}

const dummyData: Campaign[] = [
  {
    date: new Date("9/26/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/insta.jpg",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/26/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/insta.jpg",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/26/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/insta.jpg",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/26/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/insta.jpg",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/26/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/insta.jpg",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/26/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/insta.jpg",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/26/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/insta.jpg",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/26/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/insta.jpg",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date(),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/whatsapp.png",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/20/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/whatsapp.png",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date(),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/whatsapp.png",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/20/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/whatsapp.png",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date(),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/whatsapp.png",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/20/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/whatsapp.png",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date(),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/whatsapp.png",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/20/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/whatsapp.png",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/19/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/facebook.png",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/19/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/facebook.png",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/19/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/facebook.png",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/19/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/facebook.png",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/19/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/facebook.png",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  },
  {
    date: new Date("9/19/2019"),
    name: "Test Whatsapp",
    country: "US",
    image: "assets/facebook.png",
    price: 45,
    openRate: 30,
    bounceRate: 30,
    notOpenrate: 40,
    scheduleDate: null
  }
];
