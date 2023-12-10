import { useState } from 'react'
import { Section1, Section2 } from '../inAppKomponents/inapp'
import '../AppKomponent/App.css'
import Masivi from '../masiv/masiv'

function App() {
  const [dataaxios, setDataaxios] = useState([])
  const [chekidinfo, setChekidinfo] = useState()
  // console.log(chekidinfo)

  function getAxiosData (value){
    setDataaxios(value)
  }

  function getChekedInfo(value){
    setChekidinfo(value)

  }

  const filteredChekIdAxios = dataaxios?.filter(el => el.brandName === chekidinfo)

  return (
   
      <section className='appSection'>
           <Masivi
            getAxiosDataState = {getAxiosData}
           />
          <Section1
            dataAxiosState = {dataaxios}
            getChekidInfoState = {getChekedInfo}
          />
          <Section2
           filteredBrandnamedataState = {filteredChekIdAxios}
          />

      </section>
      
  
  )
}

export default App
