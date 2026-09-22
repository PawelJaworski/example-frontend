// SCAFFOLDED ONCE by frontend-development/scripts/codegen — this file is YOURS.

// Page state, pre-wired to the generated API client. Everything below already
// works; extend it only when a GWT scenario needs behavior the model cannot
// express (navigate on success, client-side validation, derived views).

import { Injectable, inject, signal } from '@angular/core';
import { IssuePolicyApi } from './issue-policy.api';
import type {
  IssuePolicyPayload,
} from './issue-policy.contracts';

@Injectable()
export class IssuePolicyStore {
  private readonly api = inject(IssuePolicyApi);

  readonly pending = signal(false);
  readonly error = signal<string | null>(null);
  readonly issuePolicyResult = signal<string | null>(null);

  async issuePolicy(payload: IssuePolicyPayload): Promise<void> {
    await this.run(async () => {
      this.issuePolicyResult.set(await this.api.issuePolicy(payload));
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
