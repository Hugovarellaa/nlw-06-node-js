import Prismic from "@prismicio/client";
import { DefaultClient } from "@prismicio/client/types/client";

const endpoint = process.env.PRISMIC_API_ENDPOINT;
const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(endpoint as string, {
    req,
    accessToken,
  });
  return prismic;
}
