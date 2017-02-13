import React from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from './searchBox.jsx';
import DisplayComponent from './display.jsx';

class MainComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            json: [],
            button: '',
            color: '',
            icon: ''
        };
    }
    getCityId(cityId, cuisine) {
        $.ajax({

            url: `https://developers.zomato.com/api/v2.1/cities?q=${cityId}`,
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader("user-key", "05d077a0d976341f50c2166d0aa71759");
            },
            success: function(data) {
                console.log('Successfully got JSON from Zomato' + JSON.stringify(data));
                this.getResturantDataFromZomato(data.location_suggestions[0].id, cuisine).bind(this);
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });
    }
    getResturantDataFromZomato(cityId, cuisine) {
        $.ajax({

            url: `https://developers.zomato.com/api/v2.1/search?entity_id=${cityId}&entity_type=city&q=${cuisine}&count=20`,
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader("user-key", "05d077a0d976341f50c2166d0aa71759");
            },
            success: function(data) {
                console.log('Successfully got JSON from Zomato' + data);
                this.setState({json: data.restaurants, button: 'Search', color: 'green', icon: 'search'});
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });
    }

    render() {
        return (
            <div>
                <SearchComponent button={this.state.button} icon={this.state.icon} color={this.state.color} callAjaxCity={this.getCityId.bind(this)}/>
                <DisplayComponent json={this.state.json}/>
            </div>
        );
    }
}
module.exports = MainComponent;
