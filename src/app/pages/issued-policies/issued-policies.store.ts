// SCAFFOLDED ONCE by frontend-development/scripts/codegen — this file is YOURS.

// Page state, pre-wired to the generated API client. Everything below already
// works; extend it only when a GWT scenario needs behavior the model cannot
// express (navigate on success, client-side validation, derived views).

import { Injectable, inject, signal } from '@angular/core';
import { IssuedPoliciesApi } from './issued-policies.api';
import type {
  IssuedPoliciesView,
  IssuedPoliciesSearchCriteria,
} from './issued-policies.contracts';

@Injectable()
export class IssuedPoliciesStore {
  private readonly api = inject(IssuedPoliciesApi);

  readonly pending = signal(false);
  readonly error = signal<string | null>(null);
  readonly issuedPolicies = signal<IssuedPoliciesView[]>([]);

  async loadIssuedPolicies(): Promise<void> {
    await this.run(async () => {
      this.issuedPolicies.set(await this.api.getIssuedPolicies());
    });
  }

  async searchIssuedPolicies(criteria: IssuedPoliciesSearchCriteria): Promise<void> {
    await this.run(async () => {
      this.issuedPolicies.set(await this.api.searchIssuedPolicies(criteria));
    });
  }

  private async run(action: () => Promise<void>): Promise<void> {
    this.pending.set(true);
    this.error.set(null);
    try {
      await action();
    } catch (cause) {
      this.error.set(cause instanceof Error ? cause.message : String(cause));
    } finally {
      this.pending.set(false);
    }
  }
}
