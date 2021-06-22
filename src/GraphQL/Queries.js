import {gql} from '@apollo/client'

export const LOAD_USERS = gql`
    query {
        getAllusers {
            id
            firstName
            lastName
            email
        }
    }
`