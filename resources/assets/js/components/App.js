import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import SearchBarContainer from '../containers/SearchBarContainer'
import { simpleAuthentication } from '../containers/LoginContainer'
import NotificationContainer from '../containers/NotificationContainer'
import AppDrawerContainer from '../containers/AppDrawerContainer'
import LoadingSpinContainer from '../containers/LoadingSpinContainer'
import DefaultMenuCollection from '../modules/DefaultMenuCollection'
import FooterComponent from './FooterComponent'
import ScrollToTopOnMount from '../modules/ScrollToTopOnMount'

const App = (props) => {
  return (
    <div>
      <ScrollToTopOnMount/>
      <header>
        <AppDrawerContainer MenuCollection={DefaultMenuCollection} />
      </header>
      <main>
        <NotificationContainer />
        <LoadingSpinContainer />
        <div className="container" style={{ paddingTop: "75px" }}>
          {props.children}
        </div>
      </main>
      <FooterComponent />
    </div>
  )
}

export default App