import React from 'react';
import ButtonComponent from './button.jsx';
import {Card, Icon, Image, Button, Input} from 'semantic-ui-react';

var textBoxStyle = {
    height: '70px'
}
var imgStyle = {
    height: '200px'
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
        this.state = {
            icon: '',
            comments: '',
            addButton: 'Add To Favourites',
            deleteButton: 'Delete',
            updateButton: 'Edit',
            deleteColor: 'teal',
            updateColor: 'blue'
        };
    }

    addFavourites() {
        $.ajax({
            type: 'POST',
            url: '/restaurant/add',
            data: {
                'resid': this.props.resid,
                'name': this.props.name,
                'address': this.props.address,
                'cuisines': this.props.cuisines,
                'ratings': this.props.ratings,
                'image': this.props.image
            },
            success: function(msg) {
                console.log(msg);
                this.setState({addButton: 'Added to Your Favourites', colorName: 'blue'});
            }.bind(this)
        });
    }
    deleteFavourites() {
        var id = this.props.id;
        console.log('deleted id', id);
        $.ajax({
            type: 'DELETE',
            url: `/restaurant/delete/${id}`,
            success: function(msg) {
                console.log('success', msg);
                this.props.removeFav(id);
            }.bind(this)
        });
    }
    updateFavourites() {
        var comments = this.state.comments;
        var id = this.props.id;
        $.ajax({
            type: 'PUT',
            url: `/restaurant/update/${id}`,
            data: {
                'comments': comments
            },
            success: function(msg) {
                this.setState({updateButton: 'Done', updateColor: 'grey', icon: 'like outline'});
                this.props.favComments(id,comments);
                console.log('done editing');
            }.bind(this)
        });
          this.setState({'comments':''});
    }
    getComments(e) {
        this.setState({comments: e.target.value});
    }
    render() {
        var find = this.props.search;
        var add = '';
        var del = '';
        if (find == 'search') {
            add = <ButtonComponent click={this.addFavourites.bind(this)} size='large' color={this.state.colorName || 'green'} name='heart' button={this.state.addButton}/>;
        } else {
            del = (
                <div>
                    <Input fluid type='text' onChange={this.getComments.bind(this)} placeholder={this.props.comments} value={this.state.comments}/>
                    <div className='ui two buttons'>
                        <ButtonComponent click={this.updateFavourites.bind(this)} size='small' color={this.state.updateColor || 'blue'} button={this.state.updateButton} name={this.state.icon || 'edit'}/>
                        <ButtonComponent click={this.deleteFavourites.bind(this)} size='small' color={this.state.deleteColor || 'white'} button={this.state.deleteButton} name='dislike outline'/>
                    </div>
                </div>
            )
        }

        return (

            <Card>
                <Image style={imgStyle} src={this.props.image}/>
                <Card.Content>
                    <Card.Header>
                        {this.props.name}
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            <span style={textStyle}>Address :</span>
                            <span style={inputStyle}>{this.props.address}</span>
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        <span style={textStyle}>Cuisines :</span>
                        <span style={inputStyle}>{this.props.cuisines}</span>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <span style={textStyle}>Ratings :</span>
                    <span style={inputStyle}>{this.props.ratings}/5</span>
                </Card.Content>
                {add}
                {del}
            </Card>
        );
    }
}
module.exports = CardsComponent;
