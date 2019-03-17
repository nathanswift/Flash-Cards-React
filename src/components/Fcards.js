import React from 'react'
import { Button, Image, Card, Icon, Form, Input} from 'semantic-ui-react'
import QAimage from '../assets/images/QA.png'


class Fcards extends React.Component {
    state = {
        editing: false,
        showA: false,
        count: 0
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

    countLikes = (e) => {
        let _count = (this.state.count + 1)
        this.setState({ count: _count})
    }
    
    
    render() {
        
        let viewStyle = {}
        let editStyle = {}
    
        if (this.state.editing) {
            viewStyle.display = 'none'
        } else {
            editStyle.display = 'none'
        }

        let cardStyle = {
            color: 'white',
            backgroundColor: '#232a35'
        }

        let btnStyle = {
            display: 'flex',
            alignItems: 'flex-bottom',
            width: '100%'
        }

        let cardBodyStyle = {
            width: '100%',
            margin: 'auto',
            height: '75px'
        }

        let btnGroupStyle = {
            width: '100%',
            padding: '10px'
        }

        let headerStyle = {
            fontSize: '2em',
            padding: '10px'
        }

        let editStyles = {
            padding: '35px'
        }

        return(
        <Card style={cardStyle}>
            <div style={viewStyle}> 
            <Image src={QAimage} />
            <Card.Content>
                <Card.Header style={headerStyle}> {this.state.showA ? `Answer` : `Question`} </Card.Header> 
            </Card.Content>
            <Card.Description style={cardBodyStyle}>
               {this.state.showA ? this.state.changedAnswer : this.state.changedQuestion}
            </Card.Description>
            <Button style={btnGroupStyle} color='orange' onClick={() => this.toggleQ()}> {this.state.showA ? `Get Question` : `Get Answer`} </Button>  
            <br/>
            <Button.Group style={btnGroupStyle}>
                <Button color="red" onClick={() => {this.props.removeCard(this.props.fcard.id)}}>Delete</Button>
                <Button.Or />
                <Button color="blue" onClick={() => {this.editCard(this.props.fcard)}}>Edit</Button>
            </Button.Group>
            <Button 
                style={btnStyle}
                color='green'
                content='Like if you got the correct answer'
                icon='heart'
                label={{ basic: true, color: 'grey', pointing: 'left', content: this.state.count }}
                onClick={() => this.countLikes(this.state.count)}
            />
            </div>
            <div style={editStyle}>
            <Form style={editStyles}>
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

