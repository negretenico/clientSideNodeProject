import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
<<<<<<< HEAD:project/src/app/header/header.component.spec.ts
=======
>>>>>>> origin/main
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
<<<<<<< HEAD
=======
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
>>>>>>> origin/main:project/src/app/footer/footer.component.spec.ts
=======
>>>>>>> origin/main
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<< HEAD
<<<<<<< HEAD:project/src/app/header/header.component.spec.ts
    fixture = TestBed.createComponent(HeaderComponent);
=======
    fixture = TestBed.createComponent(FooterComponent);
>>>>>>> origin/main:project/src/app/footer/footer.component.spec.ts
=======
    fixture = TestBed.createComponent(HeaderComponent);
>>>>>>> origin/main
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
