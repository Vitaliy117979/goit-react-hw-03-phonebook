import React, { Component } from 'react';
import { Button } from 'components/Contact/Contact.styled';
import PropTypes from 'prop-types';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  onHandlerChange = e => {
    const { name, value } = e.currentTarget;

    this.setState( { [name]: value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {

    return (
      <form onSubmit={this.onHandleSubmit}>
        <label>
          <p>Name</p>
          <input
            onChange={this.onHandlerChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <p>Number</p>
          <input
            onChange={this.onHandlerChange}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }