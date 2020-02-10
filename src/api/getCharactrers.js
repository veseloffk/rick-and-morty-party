import { gql } from "apollo-boost";

export const GET_CHARACTERS = gql`
  query launchList($name: String) {
    characters(filter: { name: $name }) {
      results {
        name
        image
        id
      }
    }
  }
`;
