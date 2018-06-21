import React, { PropTypes, Component } from 'react'
export default class Page extends Component {
    render() {
        const { year, photos } = this.props
        return <div>
            <p>You have {photos.length} photos for {year} year</p>
            <h3>
                {year} Year
            </h3>
            <p>
                <button className={'btn'} onClick={::this.onYearBtnClick}>2016</button>
                <button className={'btn'} onClick={::this.onYearBtnClick}>2017</button>
                <button className={'btn'} onClick={::this.onYearBtnClick}>2018</button>
            </p>
            <p>Loading: {this.props.fetching ? 'loading' : 'finished'}</p>
        </div>
    }

    onYearBtnClick(e){
        this.props.getPhotos(+e.target.textContent)
    }
}
Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    getPhotos: PropTypes.func.isRequired
}
