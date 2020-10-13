import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from './common/Footer'
import NavBar from './common/NavBar'
import HomePage from './page/HomePage'
import TeamPage from './page/TeamPage'
import TodoPage from './page/TodoPage'
import PrivacyPage from './page/PrivacyPage';
import TermsAndServicesPage from './page/TermsAndServicesPage';
import NotFoundPage from './page/NotFoundPage'
import AppDialog from './AppDialog'
import Auth from './Auth'
import LoadingIndicator from './LoadingIndicator'
import ArchivePage from './page/ArchivePage';

function App() {

  var defaultTheme = createMuiTheme({
        palette: {
          type:  'dark',
          primary: {
            main: '#edff14'
          }
        }
      })
  
  defaultTheme = responsiveFontSizes(defaultTheme);
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Auth>
      <AppDialog>
      <Router>
        <div className="App">
          <LoadingIndicator>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/todo" component={TodoPage}/>
            <Route exact path="/archive" component={ArchivePage}/>
            <Route exact path="/team" component={TeamPage}/>
            <Route exact path="/privacy" component={PrivacyPage}/>
            <Route exact path="/terms" component={TermsAndServicesPage}/>
            <Route exact path="/404" component={NotFoundPage}/>
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
          </LoadingIndicator>
        </div>
      </Router>
      </AppDialog>
      </Auth>
    </MuiThemeProvider>
  )
}

export default App;
