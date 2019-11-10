import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpFilesComponent } from './http-files.component';

describe('HttpFilesComponent', () => {
  let component: HttpFilesComponent;
  let fixture: ComponentFixture<HttpFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
