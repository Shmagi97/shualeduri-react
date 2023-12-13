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

  const filterMinMax = filteredChekIdAxios?.filter((el)=>el.price > min && el.price < max)


  let dinamiState = []

  if (filterMinMax.length === 0 ) {
    dinamiState = filteredChekIdAxios
    
  }  else { dinamiState = filterMinMax  }

 
  

  return (
   
      <section className='flex mt-40'>
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
           
           filterMinMaxState = {dinamiState}
          />

      </section>
      
  
  )
}

export default App
