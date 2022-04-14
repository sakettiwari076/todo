
import { withData }  from 'next-apollo' 
import {HttpLink } from 'apollo-link-http' 

const config =  {
    link : new HttpLink ( {
    url : 'https://whole-grubworm-91.hasura.app/v1/graphql',

    })

}
export default config ;