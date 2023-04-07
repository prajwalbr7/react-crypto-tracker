// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = details

  return (
    <li className="Item-container">
      <div className="container-img-name">
        <img src={currencyLogo} alt={currencyName} className="crypto-img" />
        <p className="para-style-item0">{currencyName}</p>
      </div>
      <div className="container-name">
        <p className="para-style-item">{usdValue}</p>
        <p className="para-style-item">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
