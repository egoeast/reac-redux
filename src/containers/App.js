import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'

class App extends Component {
    render() {
        const {name} = this.props
        const {year, photo} = this.props
        const {setYear} = this.props.pageActions
        return <div>
            <User className={'user'} name={name}/>
            <Page className={'page'} year={year} photos={photo} setYear={setYear}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        name: state.user.name,
        year: state.page.year,
        photo: state.page.photo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)