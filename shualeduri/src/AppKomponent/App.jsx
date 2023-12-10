import { useState } from 'react'
import { Section1, Section2 } from '../inAppKomponents/inapp'
import '../AppKomponent/App.css'
import Masivi from '../masiv/masiv'

function App() {
  const [dataaxios, setDataaxios] = useState([])
  
  const [chekidtru, setChekidtru ] = useState({})
  const [min, setMin] = useState()
  const [max, setMax] = useState()
  const [datadom, setDatadom] = useState({})
  

  function minFn(value){
    setMin(value)
  }
  
  function maxFn(value){
    setMax(value)
  }


  function getAxiosData (value){
    setDataaxios(value)
  }

  function chekidInfoTruOrFalse(value){
      setChekidtru(value)
  }

  const filteredChekIdAxios = dataaxios?.filter((el)=> {

   
    //  if( chekidtru.Apple  === true || chekidtru.Google === true || chekidtru.Samsung === true || chekidtru.Xiaomi === true){
        
    //  } 

    if (
      (chekidtru.Apple && el.brandName === 'Apple') ||
      (chekidtru.Google && el.brandName === 'Google') ||
      (chekidtru.Samsung && el.brandName === 'Samsung') ||
      (chekidtru.Xiaomi && el.brandName === 'Xiaomi')
    ) {
      return true;
    } else {
      return false;
    }
     
    
    

  })

  return (
   
      <section className='appSection'>
           <Masivi
            getAxiosDataState = {getAxiosData}
           />
          <Section1
            dataAxiosState = {dataaxios}
            minState = {minFn}
            maxState = {maxFn}
            chekidInfoTruOrFalseState = {chekidInfoTruOrFalse}
          />
          <Section2
           filteredBrandnamedataState = {filteredChekIdAxios}
          />

      </section>
      
  
  )
}

export default App
