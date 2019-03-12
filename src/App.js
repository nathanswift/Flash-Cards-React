import React from 'react'
import { Header, Icon, Button, Container, Card } from 'semantic-ui-react'
import Fcards from './Fcards'
import Fcard from './Fcard'

class App extends React.Component {
  state = {
    flashcards: [
    { id: 1, question: `How much weight can a leopard carry up a tree`, answer: `twice it's bodyweight`},
    { id: 2, question: `Who is who`, answer: `Who is who`},
    { id: 3, question: `What is What`, answer: `What is What`},
    { id: 4, question: `How much wood could a woodchuck chuck if a woodchuck could chuck wood`, answer: `Lots of wood could a woodchuck chuck if a woodchuck could chuck wood`}
  ]}
  
  getId = () => Math.floor((1 + Math.random()) * 10000)
  
  render() {
    return (
      <Container Container textAlign='center'>
        <Header as='h2' icon>
          <Icon name='users' circular />
          <Header.Content>FLASH</Header.Content>
        </Header>
        <Button inverted secondary/>
        <Card.Group itemsPerRow={4}>
        { this.state.flashcards.map(fcard => {
        return (
          <Fcards 
          fcard={fcard}
          />
          )
        })}
         
        </Card.Group>
      </Container>
    )
  }
}

export default App;
