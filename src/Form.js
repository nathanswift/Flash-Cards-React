import React from 'react'
import { Form } from 'semantic-ui-react'

class Cform extends React.Component {

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // Do something
        this.props.addCard(this.state)
        this.setState({ question: "", answer: "" })
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
                <Form.Input
                    fluid
                    label="Question"
                    placeholder="Question"
                    name="question"
                    debugger
                    value={this.props.question}
                    onChange={this.handleChange}
                />
                <Form.Input
                    fluid
                    label="Answer"
                    placeholder="Answer"
                    name="answer"
                    value={this.props.answer}
                    onChange={this.handleChange}
                />
                <Form.Button color="green">Submit</Form.Button>
            </Form.Group>
            </Form>
        )
    }

}

export default Cform