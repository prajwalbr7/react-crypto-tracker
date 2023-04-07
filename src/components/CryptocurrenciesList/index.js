// Write your JS code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {CoinsLists: [], isLoading: true}

  componentDidMount() {
    this.getCryptoItems()
  }

  getCryptoItems = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updateData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
      id: eachItem.id,
    }))
    this.setState({CoinsLists: updateData, isLoading: false})
  }

  render() {
    const {CoinsLists, isLoading} = this.state
    return (
      <div className="cont-spinner">
        {isLoading ? (
          <div data-testid="loader" className="spinner-style">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="list-container">
            <h1 className="heading-style-list-page">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="img-style-list"
            />
            <div className="container-blue">
              <div className="container-heading-coins">
                <h1 className="heading-coins-style">Coin Type</h1>
                <div className="container-coins">
                  <h1 className="heading-coins-style">USD</h1>
                  <h1 className="heading-coins-style">EURO</h1>
                </div>
              </div>
              <ul className="ul-style">
                {CoinsLists.map(eachItem => (
                  <CryptocurrencyItem details={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
