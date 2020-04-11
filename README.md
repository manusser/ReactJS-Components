# ReactJS-Components
🧱 ReactJS Special Components I've made for my website

# CryptoAPI Usage
At first, you need to import it via:
```javascript
import CryptoAPI from './CryptoAPI'
```

Now you can use it:
```jsx
<CryptoAPI name="bitcoin" />
```

You can edit the display mode via:
```javascript
  render() {
    const { error, isLoaded, item } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div key={item.name}>{item.name} ${item.market_data.current_price.usd}</div> //Output: Bitcoin $6000
      );
    }
   }
```

## Learn more about this API at [Rapidapi](https://rapidapi.com/Gramzivi/api/covid-19-data?endpoint=apiendpoint_90422c25-72f4-4e9a-a792-67e3dc7553a1)

