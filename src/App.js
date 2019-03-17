import React, { Fragment } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import NoMatch from './pages/NoMatch'
import Sidebar from './components/Sidebar'
import { Route, Switch } from 'react-router-dom'
import FlashCards from './pages/FlashCards'
import { Container } from 'semantic-ui-react'


class App extends React.Component {


    render () {
        let bodyStyle = {
            backgroundColor: '#1c1c1c',
            width: '100%',
            minHeight: '1200px',
            maxHeight: '100%',
            margin: 'auto'
          }

        return (
        <Fragment>
          <Sidebar/>
          <Container style={bodyStyle}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/flashCards' component={FlashCards} />
              <Route component={NoMatch} />
            </Switch>
          </Container>
        </Fragment>
        )
    }
}



export default App
