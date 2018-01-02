import PropTypes from 'prop-types'
import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setInsightAPI } from '../actions/Settings'

import {
  Page,
  Toolbar,
  BackButton,
  List,
  ListItem,
  ListHeader,
  Input
} from 'react-onsenui'

import TRANSLATIONS from '../translations'

class SelectInsightPage extends React.Component {
  componentDidMount() {    
    window.ga.trackView('Insight Page')
  }

  renderToolbar () {
    return (
      <Toolbar>
        <div className='left'>
          <BackButton onClick={() => this.props.navigator.popPage()}>Back</BackButton>
        </div>
        <div className='center'>
          Insight API
        </div>
      </Toolbar>
    )
  }

  render () {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <List>
          <ListItem>
            <Input
              onChange={(e) => this.props.setInsightAPI(e.target.value)}
              value={this.props.settings.insightAPI}
              style={{ width: '100%' }}
              float={true}
            />
          </ListItem>
          <ListHeader>
            Preconfigured Nodes
          </ListHeader>
          <ListItem tappable onClick={() => this.props.setInsightAPI('http://myzcl.com/api/')}>
            explorer.zclassic.org (coming soon)
          </ListItem>
          <ListItem tappable onClick={() => this.props.setInsightAPI('http://explorer.zclmine.pro/api/')}>
            explorer.zclmine.pro
          </ListItem>
          <ListItem tappable onClick={() => this.props.setInsightAPI('http://explorer.myzcl.com/api/')}>
            explorer.myzcl.com
          </ListItem>
        </List>
      </Page>
    )
  }
}

SelectInsightPage.propTypes = {
  secrets: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired,
  setInsightAPI: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    settings: state.settings
  }
}

function matchDispatchToProps (dispatch) {
  // Set context for the send page
  return bindActionCreators(
    {
      setInsightAPI
    },
    dispatch
  )
}

export default connect(mapStateToProps, matchDispatchToProps)(SelectInsightPage)
