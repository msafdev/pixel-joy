import { FetchPostResponse } from "@/utils/types";
import { GraphQLClient, gql } from "graphql-request";

const graphQLClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GQL_ENDPOINT || ""
);

const getPosts = async () => {
  const query = gql`
    query FetchPost {
      postsConnection {
        edges {
          node {
            id
            title
            slug
            thumbnail {
              url
            }
            category
            createdAt
            content {
              html
            }
            person {
              name
              id
              avatar {
                url
              }
            }
          }
        }
      }
    }
  `;

  const response = await graphQLClient.request(query);

  return response as FetchPostResponse;
};

export { getPosts };
