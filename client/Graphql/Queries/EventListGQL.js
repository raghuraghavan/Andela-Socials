import gql from 'graphql-tag';

const EVENT_LIST_GQL = (after = '', first = 1, startDate, venue,
  category) => ({
  query: gql`
    query(
      $after: String,
      $first: Int,
      $startDate: String,
      $venue: String,
      $category: ID,


    ){
      eventsList(
        after: $after
        first: $first
        startDate_Istartswith: $startDate,
        venue: $venue
        socialEvent: $category

      ){
        edges{
          node{
            id
            title
            description
            venue
            startDate
            socialEvent{
              name
            }
            featuredImage
            active
          }
          cursor
        }
      }
    }`,
  variables: {
    after,
    first,
    startDate,
    venue,
    category,
  },
});
export default EVENT_LIST_GQL;