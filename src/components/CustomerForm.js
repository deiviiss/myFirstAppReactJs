import React, { Component } from 'react';

//otra forma de exportar el componente
export default class CustomerForm extends Component {

  // estado inicial del componente
  state = {
    cliente: '',
    asesor: ''
  }

  //funcion que envia el formulario
  onEnviar = (event) => {
    // console.log(this.state)
    this.props.addCustomer(this.state.cliente, this.state.asesor)
    event.preventDefault() //evita el envió del formulario
  }

  //funcion que detecta cambios en los input
  onCambio = (event) => {
    //modificando el estado del componente
    this.setState({
      [event.target.name]: event.target.value //interpreta el nombre del campo input
    })
  }

  render() {
    return (
      //metodo onSubmit para enviar el formulario
      <form onSubmit={this.onEnviar}>
        <input type="text" name="cliente" placeholder="Captura un cliente"
          onChange={this.onCambio}
          value={this.state.cliente} />

        <br /><br />

        <textarea name="asesor" placeholder="Escribe las observaciones"
          onChange={this.onCambio}
          value={this.state.asesor}>
        </textarea>

        <br /><br />

        <button type="submit">Enviar</button>
      </form>
    )
  }
}