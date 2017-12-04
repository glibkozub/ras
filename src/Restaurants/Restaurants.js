import React, { Component } from 'react'
import Map from './Map'

class Restaurants extends Component {
  render() {
    return (
      <div>
        <h3>Restaurants in the area (Tel Aviv, 32.0959075, 34.8150165)</h3>
        <Map />
      </div>
    )
  }

  componentDidMount() {

  }
}

export default Restaurants;