import './App.css'
import AssetCard from './components/AssetCard'
interface StyleProps {
  [key: string]: string | number;
}
function App() {
  const cardStyle: StyleProps = {
    position:'relative',
    left: '-4%',
    right: '3%',
    top: '30.48%',
    bottom: '0%',
    margin:'40px'
  }

  return (
    <div className='main' style={{ display: 'flex', justifyContent:'center'}}>
     <img src="/trending-asset.png" alt="" style={{position:'relative', width:'40px',height:'40px', left:'7.5%', top:'20%', border:'1.5px solid #DC1FFF'}}/>
      <div className='my-text'>Trending Assets</div>
      <AssetCard style={cardStyle} image={"/assets/bitcoinsv.png"} name={"Bitcoin (BTC)"} 
      price={"$31,812.80"} percentageClass={"profit"} percentage={"+10%"} image1={"/assets/solana.png"} image2={"/assets/ethereum.png"} image3={"/assets/binance.png"}></AssetCard>
      <AssetCard style={cardStyle} image={"/assets/solana.png"} name={"Solana (SOL)"}
       price={"$32.83"} percentageClass={"loss"} percentage={"-12.32%"}  image1={"/assets/bitcoinsv.png"} image2={"/assets/ethereum.png"} image3={"/assets/binance.png"}></AssetCard>
      <AssetCard style={cardStyle} image={"/assets/ethereum.png" } name={"Ethereum (ETH)"} 
      price={"$1,466.45"} percentageClass={"loss"} percentage={"-11.93%"}  image1={"/assets/solana.png"} image2={"/assets/bitcoinsv.png"} image3={"/assets/binance.png"}></AssetCard>
      <AssetCard style={cardStyle} image={"/assets/binance.png"} name={"Binance USD (BUSD)"} 
      price={"$1.00"} percentageClass={"profit"} percentage={"+0.26%"}  image1={"/assets/solana.png"} image2={"/assets/ethereum.png"} image3={"/assets/binance.png"}></AssetCard>
      <AssetCard style={cardStyle} image={"/assets/shiba-inu.png"} name={"Shiba Inu (SHIB)"} 
      price={"$0.00000001948"} percentageClass={"loss"} percentage={"-8.1%"}  image1={"/assets/solana.png"} image2={"/assets/ethereum.png"} image3={"/assets/binance.png"}></AssetCard>
   </div >
  )
}

export default App
