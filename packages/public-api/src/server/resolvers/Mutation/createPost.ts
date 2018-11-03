import { Context } from "public-api-context";

interface Arguments {
  text: string;
}

export default async function createPost (
  { },
  { text }: Arguments,
  context: Context
) {
  const profile = await context.account.profile();
  return context.database.createPost({
    createdBy: {
      connect: {
        id: profile.id,
      },
    },
    text,
  });
}
