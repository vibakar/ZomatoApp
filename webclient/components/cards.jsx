import React from 'react';
import ButtonComponent from './button.jsx';
import { Card, Icon, Image, Button, Input } from 'semantic-ui-react';

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
        this.state = {addButton: 'Add To Favourites',deleteButton:'Delete',updateButton:'Edit'};
    }
    addFavourites(){
      $.ajax({
          type: 'POST',
          url: '/restaurant/add',
          data: {
              'resid':this.props.resid,
              'name': this.props.name,
              'address': this.props.address,
              'cuisines': this.props.cuisines,
              'ratings':this.props.ratings,
              'image':this.props.image
          },
          success: function(msg){
            console.log(msg);
              this.setState({addButton:'Added to Your Favourites',colorName:'red'});
          }.bind(this)
      });
    }
    deleteFavourites(){
      var id = this.props.id;
      console.log(id);
      $.ajax({
          type: 'DELETE',
          url: `/restaurant/delete/${id}`,
          success: function(msg){
            console.log('success',msg);
              this.setState({deleteButton:'Deleted',colorName:'red'});
          }.bind(this)
      });
    }

    render() {
      var fav = this.props.fav;
      var del = "";
      var find =this.props.search;
      var add ='';
      var textBox = '';
      if(find=='search'){
        add =
            <ButtonComponent  click={this.addFavourites.bind(this)} size='large' color={this.state.colorName || 'green'} name='heart' button={this.state.addButton}/>;

        }
      if(fav=='favourites'){
        del = (<div>
            <Input type='text' placeholder='Comments' />
            <ButtonComponent  size='small' color={this.state.colorName || 'blue' } button='Edit'/>
            <ButtonComponent  click={this.deleteFavourites.bind(this)} size='large' color={this.state.colorName || 'green' } button={this.state.deleteButton}/>
            </div>)
      }

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
              {add}
              {textBox}
              {del}
            </Card>
        );
    }
}
module.exports = CardsComponent;
