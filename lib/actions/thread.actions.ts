import { connectToDb } from '../mongoose';

interface Params {
  text: string;
  author: String;
  communityId: string | null;
  path: string;
}

export async function createThread({
  text,
  author,
  communityId,
  path,
}: Params) {
  connectToDb();

  const createdThread = await Thread.create();
}
