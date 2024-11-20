import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'EnerminaApp',
  access: (allow) => ({
    'users/*': [allow.authenticated.to(['read', 'delete','write'])],
    'article/*': [allow.authenticated.to(['read', 'delete', 'write'])],
  }),
});
