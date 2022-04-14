import gql from "graphql-tag" ;
import { Query } from "react-apollo" ;
import {withData} from '../config' ;
const query = gql`
query {
 author {
  id
  name
 }
}
`
const gettingdata = ({authors}) => {
    return (


<Query query={ query } fetchPolicy={ 'cache-and-network' }>
    {({ loading, data: { author:authors }}) => {
      return (
        <div>
          <div>
           {authors.map((a, i) => (
              <div key={i}>
               <h2>{a.name}</h2>
              </div>
           ))}
          </div>
        </div>
      );
    }}
</Query>
    );
};
export default gettingdata;