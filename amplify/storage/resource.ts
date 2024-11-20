import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'PrestigioApp',
  isDefault: true,
  access: (allow) => ({
    'users/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'delete', 'write'])
    ],
    'article/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'delete', 'write'])
    ],
  }),
});
