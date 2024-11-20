import { defineAuth } from '@aws-amplify/backend';
import { postConfirmation } from './post-confirmation/resource';

const GROUP =  ['ADMIN', 'EDITOR', 'AUTHOR', 'SUBSCRIBER'];

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  groups: GROUP,
  triggers: {
    postConfirmation
  }
});
