import React from 'react'
import { Button, Image, Card, Icon } from 'semantic-ui-react'

const Fcards = ({ fcard, key }) => (
    <Card>
        <Image src='https://banner2.kisspng.com/20180706/tp/kisspng-question-mark-computer-icons-check-mark-question-png-5b3fe4188f5878.9335032515309138165872.jpg' />
        <Card.Content>
        <Card.Header>Question</Card.Header> 
        </Card.Content>
        <Card.Description>
            {  fcard.question }: { fcard.answer }
        </Card.Description>
            <br/>
            <Button>Press For Answer</Button>
        <Card.Content extra>
            <a>
                <Icon name='heart' />
                Like everytime you get it right!
            </a>
        </Card.Content>    
    </Card>
)

export default Fcards
