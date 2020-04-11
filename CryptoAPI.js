import React, { Component } from 'react';


class CryptoAPI extends Component {


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: []
    };
  }

  componentDidMount() {

    const apiHost = "coingecko.p.rapidapi.com";
    const apiKey = ""; // Your API Key from rapidapi.com

    fetch("https://coingecko.p.rapidapi.com/coins/"+this.props.name, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': apiHost,
        'x-rapidapi-key': apiKey
      }
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result
          });
          console.log(result);
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, item } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div key={item.name}>{item.name} {item.market_data.current_price.usd}</div>
      );
    }
  }

}


export default CryptoAPI;
