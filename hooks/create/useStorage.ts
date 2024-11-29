import { awsBucketName, awsRegion } from '@/utils/env';
import { useCallback } from 'react';

function useStorage() {
  const getUrl = useCallback((path: string) => {
    return `https://${awsBucketName}.s3.${awsRegion}.amazonaws.com/${path}`;
  }, []);

  return {
    getUrl,
  };
}

export default useStorage;
