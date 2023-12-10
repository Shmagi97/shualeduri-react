import { useState } from 'react'
import { Section1, Section2 } from '../inAppKomponents/inapp'
import '../AppKomponent/App.css'
import Masivi from '../masiv/masiv'

function App() {
  const [dataaxios, setDataaxios] = useState([])
  const [chekidinfo, setChekidinfo] = useState()
  const [min, setMin] = useState()
  const [max, setMax] = useState()

  function minFn(value){
    setMin(value)
  }
  
  function maxFn(value){
    setMax(value)
  }

  console.log(max, 'kkkk')

  function getAxiosData (value){
    setDataaxios(value)
  }

  function getChekedInfo(value){
    setChekidinfo(value)

  }

  // const filteredChekIdAxios = dataaxios?.filter(el => el.brandName === chekidinfo)

  const filteredChekIdAxios = dataaxios?.filter((el)=> {
    // console.log(el.price)
    if(el.brandName === chekidinfo && el.price > min && el.price < max){
      return el.brandName
    } 
  })

  return (
   
      <section className='appSection'>
           <Masivi
            getAxiosDataState = {getAxiosData}
           />
          <Section1
            dataAxiosState = {dataaxios}
            getChekidInfoState = {getChekedInfo}
            minState = {minFn}
            maxState = {maxFn}
          />
          <Section2
           filteredBrandnamedataState = {filteredChekIdAxios}
          />

      </section>
      
  
  )
}

export default App
