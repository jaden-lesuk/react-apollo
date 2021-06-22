import {gql} from '@apollo/client'

export const CREATE_USER_MUTATION = gql`
    mutation createuser($firstName: String! $lastName: String! $email: String! $password: String!) {
        createUser(firstName: $firstName lastName: $lastName email: $email password: $password) {
            firstName
        }
    }
`