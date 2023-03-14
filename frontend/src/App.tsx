import './App.css'
import AssetCard from './components/AssetCard'
interface StyleProps {
  [key: string]: string | number;
}
function App() {
  const cardStyle: StyleProps = {
    position:'relative',
    left: '0%',
    right: '0%',
    top: '30.48%',
    bottom: '0%',
    margin:'70.26px'
  }

  return (
    <div className='main' style={{ display: 'flex', justifyContent:'center'}}>
      <AssetCard style={cardStyle} image={"/bitcoinsv.png"}></AssetCard>
      <AssetCard style={cardStyle} image={"/solana.png"}></AssetCard>
      <AssetCard style={cardStyle} image={"/ethereum.png"}></AssetCard>
      <AssetCard style={cardStyle} image={"/binance.png"}></AssetCard>
      <AssetCard style={cardStyle} image={"/shiba-inu.png"}></AssetCard>
   </div >
  )
}

export default App
