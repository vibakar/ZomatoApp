import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

var textBoxStyle = {
  height: '70px'
}
var imgStyle = {
  height: '200px',
}
var textStyle = {
  color: 'green',
  fontSize: '110%'
}
var inputStyle = {
  color: 'black'
}

class CardsComponent extends React.Component {
    constructor() {
        super();
    }
    onClick(){
      alert('Added to favourites')
    }
    render() {
        return (
            <Card>
              <Image style={imgStyle} src={this.props.image} />
              <Card.Content>
                <Card.Header>
                  {this.props.name}
                </Card.Header>
                <Card.Meta>
                  <span className='date'>
                      <span style={textStyle} >Address :</span><span style={inputStyle} >{this.props.address}</span>
                  </span>
                </Card.Meta>
                <Card.Description>
                  <span style={textStyle} >Cuisines :</span><span style={inputStyle} >{this.props.cuisines}</span>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                   <span style={textStyle}>Ratings :</span><span style={inputStyle}>{this.props.ratings}/5</span>
              </Card.Content>
              <Button onClick={this.onClick} size='large' color='green' ><Icon name='heart'></Icon>Add To Favourities</Button>
            </Card>
        );
    }
}
module.exports = CardsComponent;
