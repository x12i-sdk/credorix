import assert from 'node:assert/strict';
import { createCredorixClient } from '@x12i/credorix';
const client = createCredorixClient({ serviceUrl: 'https://credorix.example.invalid', callerId: 'fixture-caller', callerToken: 'synthetic-only',
  fetchImplementation: async url => { assert(String(url).includes('fixture-profile')); return Response.json({ id: 'fixture-profile', enabled: true, scheme: 'static-bearer', delivery: 'token-lease', tenancy: { mode: 'single-tenant' }, allowedCallers: ['fixture-caller'] }); },
});
const profile = await client.getSanitizedProfile('fixture-profile');
assert.equal(profile.id, 'fixture-profile');
assert.equal(profile.enabled, true);
console.log({ id: profile.id, scheme: profile.scheme });
