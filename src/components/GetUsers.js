import React, { useEffect, useState} from 'react'
import { useQuery, gql } from '@apollo/client'
import {LOAD_USERS} from '../GraphQL/Queries'

const GetUsers = () => {
    const {error, loading, data} = useQuery(LOAD_USERS)
    const [users, setUsers] = useState([])

    useEffect(() => {
        if(data){
            setUsers(data.getAllusers)
        }
    }, [data])

    return (
        <div>
            {/* {users.map((user) => (<p key={user.id}>{user.firstName}</p>))} */}
        </div>
    )
}

export default GetUsers
