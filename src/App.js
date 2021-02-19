import React, { Component } from 'react'; // biblioteca de React importamos solo el los métodos de componente
import './App.css';//importa css
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//consulta como arreglo
import consultaJson from './sample/apiDB.json';

//components
import Customers from "./components/Customers.js";
import CustomerForm from "./components/CustomerForm.js";
import Users from './components/Users.js'

// console.log(customers)

//component inicial

class App extends Component {

  state = { // objeto que tiene la propiedad de los datos
    clientesConsulta: consultaJson
  }

  addCustomer = (cliente, asesor) => {
    const newCustomer = {
      cliente: cliente,
      asesor: asesor,
      id: this.state.clientesConsulta.length //cambia al agregar una tarea
    }
    console.log(newCustomer);
    this.setState({
      clientesConsulta: [...this.state.clientesConsulta, newCustomer]
    })
  }

  deleteCustomer = (id) => {
    const updateCustomer = this.state.clientesConsulta.filter(customer => customer.id !== id)
    this.setState({ clientesConsulta: updateCustomer })

    console.log(updateCustomer);
  }

  checkFinalizado = (id) => {
    const updateFinalizado = this.state.clientesConsulta.map(customer => {
      if (customer.id === id) {
        customer.finalizado = !customer.finalizado
      }
      return customer
    });
    this.setState({ clientesConsulta: updateFinalizado })
  }

  render() { // recorremos el arreglo del objeto state con map
    return <div>

      <Router>

        <Link to='/'>Home</Link>
        <br />
        <Link to='/users'>Post</Link>
        <Route exact path="/" render={() => {
          return <div>

            <CustomerForm addCustomer={this.addCustomer} />

            <Customers
              clientesConsulta={this.state.clientesConsulta}
              deleteCustomer={this.deleteCustomer}
              checkFinalizado={this.checkFinalizado}
            />
          </div>
        }}>
        </Route>

        <Route path="/users" component={Users} />

      </Router>

    </div>
  }
}

export default App;