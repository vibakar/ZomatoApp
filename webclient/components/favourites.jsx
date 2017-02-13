import React from 'react';
import {Card} from 'semantic-ui-react';
import DisplayFavComponent from './displayFavourites.jsx';

class Favourites extends React.Component {
    constructor() {
        super();
        this.state = {
            json: []
        };
    }
    componentWillMount() {
        $.ajax({
            url: '/restaurant/',
            type: 'GET',
            success: function(data) {
                console.log('Successfully got JSON' + data);
                this.setState({json: data});
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });
    }
    removeFavCard(id) {
        var favArray = this.state.json;
        var arr = [];
        for (var obj of favArray) {
            if (obj._id != id) {
                arr.push(obj);
            }
        }
        this.setState({json: arr});
    }
    updateFavComments(id,comments){
        var favArray = this.state.json;
        for (var obj of favArray) {
            if (obj._id == id) {
                obj.comments = comments;
            }
        }
        this.setState({json: favArray});
    }

    render() {
        return (
            <div>
                <DisplayFavComponent favComments={this.updateFavComments.bind(this)} removeFav={this.removeFavCard.bind(this)} fav='favourites' json={this.state.json}/>
            </div>
        );
    }
}
module.exports = Favourites;
