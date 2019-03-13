import React from 'react'
import { Header, Icon, Button, Container, Card, Input } from 'semantic-ui-react'
import Fcards from './Fcards'
import Cform from './Form'

class App extends React.Component {
  state = {
    flashcards: [
    { id: 1, question: `How much weight can a leopard carry up a tree`, answer: `twice it's bodyweight`},
    { id: 2, question: `Who is who`, answer: `Who is who`},
    { id: 3, question: `What is What`, answer: `What is What`},
    { id: 4, question: `How much wood could a woodchuck chuck if a woodchuck could chuck wood`, answer: `Lots of wood could a woodchuck chuck if a woodchuck could chuck wood`}
  ]}
  
  getId = () => Math.floor((1 + Math.random()) * 10000)

  addCard = (flashData) => {
    let fcard = { id: this.getId(), ...flashData }
    this.setState({ flashcards: [...this.state.flashcards, fcard] })
  }

  removeCard = (id) => {
    const flashcards = this.state.flashcards.filter( fcard => {
      if (fcard.id !== id)
        return fcard
    })
    this.setState({ flashcards })
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  toggleQ = () => this.setState({ showA: !this.props.showA })
  
  render() {
    return (
      <Container Container textAlign='center'>
        <Header as='h2' icon>
          <Icon name='users' circular />
          <Header.Content>FLASH</Header.Content>
        </Header>
        <br/><br/>
        <Button inverted secondary
          onClick={this.toggleForm}
          > 
        Add a New Flashcard </Button>
        { this.state.showForm ? <Cform addCard={this.addCard} /> : null}
        <br/><br/>
        <Card.Group itemsPerRow={4}>
        { this.state.flashcards.map(fcard => {
        return (
          <Fcards 
          fcard={fcard}
          removeCard={this.removeCard}
          editCard={this.editCard}
          />
          )
        })}
         
        </Card.Group>
      </Container>
    )
  }
}

export default App;
