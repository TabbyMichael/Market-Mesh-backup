import AWS from 'aws-sdk';

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION || 'us-east-1',
});

export const resolvers = {
  Query: {
    signedUploadUrl: async (_: any, { filename, contentType }: any) => {
      const key = `uploads/${Date.now()}-${filename}`;

      const s3Params = {
        Bucket: process.env.S3_BUCKET_NAME || 'marketmesh-uploads',
        Key: key,
        Expires: 3600, // 1 hour
        ContentType: contentType,
        ACL: 'public-read',
      };

      const uploadUrl = await s3.getSignedUrlPromise('putObject', s3Params);
      const publicUrl = `https://${s3Params.Bucket}.s3.amazonaws.com/${key}`;

      return {
        uploadUrl,
        key,
        publicUrl,
      };
    },
  },
  Mutation: {
    deleteUpload: async (_: any, { key }: { key: string }) => {
      const s3Params = {
        Bucket: process.env.S3_BUCKET_NAME || 'marketmesh-uploads',
        Key: key,
      };

      await s3.deleteObject(s3Params).promise();
      return true;
    },
  },
};
