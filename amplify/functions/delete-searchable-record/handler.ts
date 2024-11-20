import { env } from '$amplify/env/delete-searchable-record';
import { searchClient } from '@algolia/client-search';
import { Schema } from '../../data/resource';

const client = searchClient(env.ALGOLIA_APP_ID, env.ALGOLIA_WRITE_API_KEY);
type Handler = Schema['deleteSearchableRecord']['functionHandler'];

export const handler: Handler = async (event, context) => {
  try {
    const { indexName, objectID } = event.arguments;

    await client.deleteObject({
      indexName,
      objectID,
    })

    return { content: 'Done' };
  } catch (e) {
    console.log("Exception");
    console.log(e);
    console.log("Incoming event");
    console.log(event);
    return { content: "An unexpected error has occured while processing your request." };
  }
}