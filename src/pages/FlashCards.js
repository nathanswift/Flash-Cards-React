import React from 'react'
import { Image, Button, Container, Card } from 'semantic-ui-react'
import Fcards from '../components/Fcards'
import Cform from '../components/Form'
import LLogo from '../assets/images/flashlamp4.png'

class FlashCards extends React.Component {
  state = {
    flashcards: [
    { id: 1, question: `How much weight can a leopard carry up a tree?`, answer: `Twice it's bodyweight!`},
    { id: 2, question: `How far is Jupiter from the sun?`, answer: `483.8 million mi`},
    { id: 3, question: `What year was JavaScript Created?`, answer: `1995`},
    { id: 4, question: `How much wood could a woodchuck chuck if a woodchuck could chuck wood?`, answer: `Lots of wood could a woodchuck chuck if a woodchuck could chuck wood!`}
  ]}
  
  getId = () => Math.floor((1 + Math.random()) * 10000)

  addCard = (flashData) => {
    let fcard = { id: this.getId(), ...flashData }
    this.setState({ flashcards: [...this.state.flashcards, fcard] })
  }

  removeCard = (id) => {
    const flashcards = this.state.flashcards.filter( fcard => {
      if (id !== fcard.id)
        return fcard
    })
    this.setState({ flashcards })
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm })

  toggleQ = () => this.setState({ showA: !this.props.showA })

  
  render() {
    let bodyStyle = {
      backgroundColor: '#1c1c1c',
      width: '100%',
      minHeight: '1200px',
      maxHeight: '100%'
    }

    let imageStyle = {
      width: '500px',
      height: 'auto',
      paddingRight: '60px',
      paddingTop: '30px',
      opacity: '.8'
    }

    let btnStyle = {
      marginBottom: '20px'
    }


    return (
      <div style={bodyStyle}>   
        <Container Container textAlign='center'>
            <Image centered style={imageStyle} src={LLogo} />
          <br/><br/>
          <Card.Group itemsPerRow={4}>
          { this.state.flashcards.map(fcard => {
            return (
              <Fcards 
              key={fcard.id}
              fcard={fcard}
              removeCard={this.removeCard}
              editCard={this.editCard}
              />
              )
            })}
          </Card.Group>
          <br/><br/><br/>
            <Button style={btnStyle} inverted secondary
              onClick={this.toggleForm}
              > 
            Add a New Flashcard </Button>
            { this.state.showForm ? <Cform key={this.state.id} addCard={this.addCard} /> : null}
        </Container>
      </div>
    )
  }
}

export default FlashCards;
