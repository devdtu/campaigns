import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignItemRowComponent } from './campaign-item-row.component';

describe('CampaignItemRowComponent', () => {
  let component: CampaignItemRowComponent;
  let fixture: ComponentFixture<CampaignItemRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignItemRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignItemRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
