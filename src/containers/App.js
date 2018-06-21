import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'

class App extends Component {
    render() {
        const {name} = this.props
        const {year, photos} = this.props
        const {getPhotos} = this.props.pageActions
        return <div>
            <User className={'user'} name={name}/>
            <Page className={'page'} year={year} photos={photos} getPhotos={getPhotos} fetching={this.props.fetching}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        name: state.user.name,
        year: state.page.year,
        photos: state.page.photos,
        fetching: state.page.fetching
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)