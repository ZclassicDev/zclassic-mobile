import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import {
  Page,
  Toolbar,
  BackButton
} from 'react-onsenui'

import TRANSLATIONS from '../translations'

import ZCLASSIC_BANNER from '../../assets/img/zclassic_banner.png'

class RecoverWalletPage extends React.Component {
  componentDidMount() {    
    window.ga.trackView('About Page')
  }

  renderToolbar () {
    const CUR_LANG = this.props.settings.language

    return (
      <Toolbar>
        <div className='left'>
          <BackButton onClick={() => this.props.navigator.popPage()}>Back</BackButton>
        </div>
        <div className='center'>
          { TRANSLATIONS[CUR_LANG].AboutPage.title }
        </div>
      </Toolbar>
    )
  }

  render () {
    return (
      <Page renderToolbar={this.renderToolbar.bind(this)}>
        <div style={{padding: '12px 12px 0 12px', textAlign: 'center'}}>
          <p>Zclassic Wallet v{VERSION}</p>
          <br/>
          <img src={ZCLASSIC_BANNER} width='100'/>
          <br/>
          <p>Made for Zclassic</p>
          <p>Original Author: Kendrick Tan, of zensystem.io</p>
          <p>Found a bug? File it&nbsp;
            <a
              href='#'
              onClick={() => window.open('https://github.com/zencashofficial/zencash-mobile/issues', '_system')} //TODO
            >here</a>
          </p>
        </div>
      </Page>
    )
  }
}

RecoverWalletPage.propTypes = {
  settings: PropTypes.object.isRequired,
  navigator: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps)(RecoverWalletPage)
