import React, { Component } from 'react';
import Customer from './Customer' // el './' indica que se encuentra en la misma carpeta

import PropTypes from 'prop-types'; //valida el tipo de dato de los componentes

class Customers extends Component {
  render() {

    return this.props.clientesConsulta.map(customer => // recorre el arreglo de clientes, por cada recorrido renderiza el componente Customer.
      <Customer
        customer={customer}
        key={customer.id}//la propiedad key funciona para agregar un dato único
        deleteCustomer={this.props.deleteCustomer}
        checkFinalizado={this.props.checkFinalizado}

      />)
  }
}

// indicamos con PropoTypes el tipo de dato que recibe el componente
Customers.propTypes = {
  clientesConsulta: PropTypes.array.isRequired
}

export default Customers;