// SCAFFOLDED ONCE by frontend-development/scripts/codegen — this file is YOURS.
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { IssuePolicy } from './issue-policy';

describe('IssuePolicy', () => {
  let http: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssuePolicy],
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
    const fixture = TestBed.createComponent(IssuePolicy);
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('h1')?.textContent)
      .toContain('Issue Policy');
  });
});
