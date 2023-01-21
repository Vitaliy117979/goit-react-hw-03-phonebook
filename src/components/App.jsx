import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { nanoid } from 'nanoid'
import { Form } from 'components/Form/Form';
import { ContactList } from './ContactList/ContactList';
import { MainWrapper } from './MainWrapper.styled';  
import { Filter } from './Filter/Filter';
export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    ],
    
    filter: ''
  };
  onHandlerSubmit = ({ name, number }) => {
    const notify = () => toast(`Sorry, ${name} is already in contacts.`);
    if (this.state.contacts.find(contact => contact.name === name)) {
      notify();
      
            return 
          }


    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), name, number }],
    }));
  };

  deleteItem = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

changeFilter = (e) => {
this.setState({filter: e.currentTarget.value})
}




getFiltredContacts = () => {
  const { filter, contacts } = this.state;
  const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );


}
  render() {
  const { filter, } = this.state;


    console.log(this.state);
    return (
      <MainWrapper>
        <Toaster   position="top-right"
  reverseOrder={false}/>
        <h1>Phonebook</h1>
        <Form onSubmit={this.onHandlerSubmit} />
        <h2>Contacts</h2>
        <Filter value ={filter}
        onChange = {this.changeFilter}
        />
        <ContactList 
        items={this.getFiltredContacts()}
        onDeleteItem={this.deleteItem}
        
        />
      </MainWrapper>
    );
  }
}
