import React, { Component } from "react";
import "./Customer.css";

import PropTypes from 'prop-types'; //valida el tipo de dato de los componentes


class Customer extends Component {

  //estilo en linea del componente
  StyleCompleted() {
    return {
      fontSize: '20px',
      color: this.props.customer.finalizado ? 'gray' : 'yellow', // condición para aplicar estilo
      textDecoration: this.props.customer.finalizado ? 'line-through' : 'none' // condición para aplicar estilo

    }
  }

  render() {

    const { customer } = this.props; //des estructuring JS
    // const pinkColor = { background: 'pink' };

    //las diferentes formas de agregar styles
    return <div style={this.StyleCompleted()}> {/* por estilo en linea*/}
      {/*<p className='red'>{this.props.customer.cliente}</p>   por clase*/}
      {/*<p style={pinkColor}>{this.props.customer.monto}</p>  por objeto*/}
      {/*<p style={{ background: 'blue' }}>{customer.id}</p> por estilo en linea*/}
      {customer.asesor}
      {customer.cliente}
      {customer.monto}
      {customer.finalizado}
      {customer.id}

      <input type="checkbox" onChange={this.props.checkFinalizado.bind(this, customer.id)} />
      <button style={btnDelete} onClick={this.props.deleteCustomer.bind(this, customer.id)}> {/* estilo por objeto*/}
        X
        </button>
    </div>
  }
}

// indicamos con PropoTypes el tipo de dato que recibe el componente
Customer.propTypes = {
  customer: PropTypes.object.isRequired
}

const btnDelete = {
  fontSize: '28px',
  background: '#EA2027',
  color: '#fff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer'
}

export default Customer