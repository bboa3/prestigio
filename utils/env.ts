function assertEnvVariable(name: string, value?: string): asserts value {
  if (!value) {
    throw new Error(`Environment variable "${name}" is not set.`);
  }
}

assertEnvVariable('NEXT_PUBLIC_USER_AWS_REGION', process.env.NEXT_PUBLIC_USER_AWS_REGION);
assertEnvVariable('NEXT_PUBLIC_USER_AWS_BUCKET_NAME', process.env.NEXT_PUBLIC_USER_AWS_BUCKET_NAME);
assertEnvVariable('NEXT_PUBLIC_ALGOLIA_APP_ID', process.env.NEXT_PUBLIC_ALGOLIA_APP_ID);
assertEnvVariable('NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY', process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY);

export const awsRegion = process.env.NEXT_PUBLIC_USER_AWS_REGION!;
export const awsBucketName = process.env.NEXT_PUBLIC_USER_AWS_BUCKET_NAME!;
export const algoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!;
export const algoliaSearchApiKey = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!;
