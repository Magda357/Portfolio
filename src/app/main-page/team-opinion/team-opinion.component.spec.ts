import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamOpinionComponent } from './team-opinion.component';

describe('TeamOpinionComponent', () => {
  let component: TeamOpinionComponent;
  let fixture: ComponentFixture<TeamOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamOpinionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
