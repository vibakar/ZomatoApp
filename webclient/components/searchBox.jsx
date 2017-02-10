import React from 'react';
import cardsComponent from './cards.jsx';
import { Button, Input} from 'semantic-ui-react';

class SearchComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            cityId: '',
            cuisine: ''
        };
    }
    onChangeCity(e) {
        this.setState({cityId: e.target.value});
    }
    onChangeCuisine(e) {
        this.setState({cuisine: e.target.value});
    }
    onClick() {
        var cityId = this.state.cityId;
        var cuisine = this.state.cuisine;
        this.getJson(cityId,cuisine);
        this.setState({cityId: ''});
        this.setState({cuisine: ''});
    }
    getJson(cityId,cuisine){
      this.props.callAjaxCity(cityId,cuisine);
    }

    render() {
      var divStyle = {
        marginTop :0,
        marginLeft:'400px'
      }
      var inputStyle = {
        marginRight:'10px'
      }
        return (
            <div>
              <div style={divStyle}>
                    <Input style={inputStyle} type='text' placeholder='Enter CityName' onChange={this.onChangeCity.bind(this)} value={this.state.cityId} autoFocus/>
                    <Input style={inputStyle} type='text' placeholder='Enter Cuisine' onChange={this.onChangeCuisine.bind(this)} value={this.state.cuisine}/>
                    <Button style={inputStyle} size='large' color='green' onClick={this.onClick.bind(this)}>Search</Button>
              </div>
            </div>
        );
    }
}

module.exports = SearchComponent;
