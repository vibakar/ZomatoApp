import React from 'react';
import CardsComponent from './cards.jsx';
import { Card } from 'semantic-ui-react';

class DisplayComponent  extends React.Component{

  constructor(){
    super();
  }
  render(){

    var divStyle = {
      margin: 70
    }

    var JsonArray = this.props.json.map(function(item){
      return <CardsComponent name={item.restaurant.name}
         image={item.restaurant.featured_image}
         address={item.restaurant.location.address}
         cuisines={item.restaurant.cuisines}
         ratings={item.restaurant.user_rating.aggregate_rating}/>
    });
    return (
        <div style={divStyle}><Card.Group>{JsonArray}</Card.Group></div>
    );
  }
}

module.exports = DisplayComponent;
