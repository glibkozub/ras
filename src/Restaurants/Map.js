import React from 'react'
import RestaurantCard from './RestaurantCard'

/* global google */
/*eslint no-undef: "error"*/

class Map extends React.Component {
  state = {
    results: []
  }

  initialize = () => {
    const _this = this;

    map = new google.maps.Map(this.refs.map, {
      center: {lat: 32.0959075, lng: 34.8150165},
      zoom: 14
    });

    const request = {
      location: map.getCenter(),
      radius: '500',
      query: 'restaurants'
    };

    const service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);

    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        _this.setState({results: results})

        results.forEach(function (elem, i) {
          new google.maps.Marker({
            map: map,
            place: {
              placeId: results[i].place_id,
              location: results[i].geometry.location
            }
          });
        })
      }
    }
  }

  componentDidMount() {
    window.initialize = this.initialize;
    if (typeof google === 'undefined')
      loadJS('https://maps.googleapis.com/maps/api/js?key=&libraries=places&callback=initialize')
    else
      this.initialize()
  }

  mapStyle = {
    height: '400px',
    width: '100%'
  }

  render() {
    return (
      <div>
        <div ref="map" style={this.mapStyle}></div>
        <div>
          {
            this.state.results.map(result => {
              return <RestaurantCard key={result.id}>{result.formatted_address}</RestaurantCard>
            })
          }
        </div>
      </div>
    )
  }
}

let map

function loadJS(src) {
  var ref = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
}

export default Map