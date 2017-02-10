import React from 'react';
import ButtonComponent from './button.jsx';
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
        this.state = {buttonName: 'Add To Favourites',colorName:'green'};
    }
    whenClick(){
      $.ajax({
          type: 'POST',
          url: '/restaurant/add',
          data: {
              'name': this.props.name,
              'address': this.props.address,
              'cuisines': this.props.cuisines,
              'ratings':this.props.ratings,
              'image':this.props.image
          },
          success: function(msg){
              this.setState({buttonName:'Added to Your Favourites',colorName:'red'});
          }.bind(this)
      });
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
              <ButtonComponent  click={this.whenClick.bind(this)} size='large' color={this.state.colorName || 'green'} name='heart' button={this.state.buttonName}/>
            </Card>
        );
    }
}
module.exports = CardsComponent;
