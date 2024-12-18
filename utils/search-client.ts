import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { algoliaAppId, algoliaSearchApiKey } from './env';

export const searchClient = algoliasearch(
  algoliaAppId,
  algoliaSearchApiKey
)
