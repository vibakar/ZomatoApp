import React from 'react';
import CardsComponent from './cards.jsx';
import { Card } from 'semantic-ui-react';

class DisplayFavComponent  extends React.Component{

  constructor(){
    super();
  }
  render(){

    var divStyle = {
      margin: 70
    };
    var fav = this.props.fav;
    var JsonArray = this.props.json.map(function(item){
      if(fav == 'favourites'){
        return <CardsComponent id={item._id} name={item.name}
           image={item.image}
           address={item.address}
           cuisines={item.cuisines}
           ratings={item.ratings} fav='favourites'/>
      }

    });
    return (
        <div style={divStyle}><Card.Group>{JsonArray}</Card.Group></div>
    );
  }
}

module.exports = DisplayFavComponent;
