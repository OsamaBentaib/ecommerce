import React, { Component } from 'react'
import UserHeader from './UserHeader'
import UserList from './UserList'


export class UserContainer extends Component {

    render() {
        return (
            <div>
                <UserHeader />
                <UserList />
            </div>
        )
    }
}

export default UserContainer
