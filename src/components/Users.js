import React, { Component } from 'react'

export default class Users extends Component {

  state = {
    users: []
  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users') //res es ilegible
    const data = await res.json();//lo convertimos a Json
    console.log(data);
    this.setState({ users: data }) //cambiamos el estado con los datos
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        {/* recorremos los datos */}
        {this.state.users.map(user => {
          return <div key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.website}</p>
          </div>
        })}
      </div>
    )
  }
}
