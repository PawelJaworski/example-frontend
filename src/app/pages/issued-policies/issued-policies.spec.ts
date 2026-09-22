// SCAFFOLDED ONCE by frontend-development/scripts/codegen — this file is YOURS.
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { IssuedPolicies } from './issued-policies';
import {
  ISSUED_POLICIES_ENDPOINT,
} from './issued-policies.contracts';

describe('IssuedPolicies', () => {
  let http: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssuedPolicies],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('renders and requests exactly what the event model wires it to', async () => {
    const fixture = TestBed.createComponent(IssuedPolicies);
    await fixture.whenStable();

    // GET issued-policies fires on init because uis.md wires this page to it
    http.expectOne(ISSUED_POLICIES_ENDPOINT).flush([]);
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('h1')?.textContent)
      .toContain('Issued Policies');
  });
});
