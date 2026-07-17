import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Own bucket, same AWS credentials/account as backend/src/infrastructure/aws
// (picked up from AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY via the SDK's
// default provider chain — never passed explicitly). Bucket has ACLs
// disabled (Object Ownership = bucket owner enforced), so public read
// comes from the bucket policy alone — do NOT set ACL: 'public-read'
// here, it will error on this bucket.

function region() {
  const r = process.env.AWS_REGION;
  if (!r) throw new Error("AWS_REGION is not set");
  return r;
}

function bucket() {
  const b = process.env.AWS_BUCKET_NAME;
  if (!b) throw new Error("AWS_BUCKET_NAME is not set");
  return b;
}

const s3Client = new S3Client({ region: process.env.AWS_REGION });

export function publicUrlForKey(key: string) {
  return `https://${bucket()}.s3.${region()}.amazonaws.com/${key}`;
}

export async function createPresignedPutUrl(params: {
  key: string;
  contentType: string;
  expiresInSeconds?: number;
}) {
  const { key, contentType, expiresInSeconds = 300 } = params;

  const command = new PutObjectCommand({
    Bucket: bucket(),
    Key: key,
    ContentType: contentType,
  });

  const uploadUrl = await getSignedUrl(s3Client, command, {
    expiresIn: expiresInSeconds,
  });

  return { key, uploadUrl, url: publicUrlForKey(key) };
}
