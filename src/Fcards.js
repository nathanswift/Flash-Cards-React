import React from 'react'
import { Button, Image, Card, Icon, Form, Input} from 'semantic-ui-react'


class Fcards extends React.Component {
    state = {
        editing: false,
        showA: false
    }

    toggleQ = () => this.setState({ showA: !this.state.showA })

    componentDidMount = () => {
        this.setState({changedAnswer: this.props.fcard.answer, changedQuestion: this.props.fcard.question})
    }

    editCard = () => {
        this.setState({ editing: true, changedAnswer: this.props.fcard.answer, changedQuestion: this.props.fcard.question})
    }

    handleEditing = (e) => {
        if (e.keyCode === 13) {
            this.setState({editing: false})
        }
    }

    handleEditingQuestion = (e) => {
        let _changedQuestion = e.target.value
        this.setState({changedQuestion: _changedQuestion})
        
    }

    handleEditingAnswer = (e) => {
        let _changedAnswer = e.target.value
        this.setState({changedAnswer: _changedAnswer})
        console.log('changing them diapers')
        
    }
    
    
    render() {
        
        let viewStyle = {}
        let editStyle = {}
    
        if (this.state.editing) {
            viewStyle.display = 'none'
        } else {
            editStyle.display = 'none'
        }

        return(
        <Card>
            <div style={viewStyle}> 
            <Image src='https://banner2.kisspng.com/20180706/tp/kisspng-question-mark-computer-icons-check-mark-question-png-5b3fe4188f5878.9335032515309138165872.jpg' />
            <Card.Content>
                <Card.Header> {this.state.showA ? `Answer` : `Question`} </Card.Header> 
            </Card.Content>
            <Card.Description>
               {this.state.showA ? this.state.changedAnswer : this.state.changedQuestion}
            </Card.Description>
            <br/>
            <Button onClick={() => this.toggleQ()}> {this.state.showA ? `Get Question` : `Get Answer`} </Button>
            <Card.Content extra>
                <Icon name='heart'/>
                Like everytime you get it right!
            </Card.Content>    
            <Button color="red" onClick={() => {this.props.removeCard(this.props.fcard.id)}}>Delete</Button>
            <Button color="blue" onClick={() => {this.editCard(this.props.fcard.value)}}>Edit</Button>
            </div>
            <div style={editStyle}>
            <Form>
            <Icon name='question circle'/>New Question
            <Input 
                onKeyDown={this.handleEditing}
                onChange={this.handleEditingQuestion}
                type="text" 
                placeholder="Type your new Question"
                value={this.changedQuestion}
                />
            <Icon name='adn'/> New Answer
            <Input 
                onKeyDown={this.handleEditing}
                onChange={this.handleEditingAnswer}
                type="text" 
                placeholder="Type your new Answer"
                value={this.changedAnswer}
            /> 
            <h4>Press Enter to Submit Changes</h4>
            </Form>
            </div>
        </Card>
        )
    }
    }
        
export default Fcards

