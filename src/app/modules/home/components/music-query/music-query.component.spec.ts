import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicQueryComponent } from './music-query.component';

describe('MusicQueryComponent', () => {
  let component: MusicQueryComponent;
  let fixture: ComponentFixture<MusicQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicQueryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
