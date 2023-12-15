import { useState } from 'react'
import { Section1, Section2 } from '../inAppKomponents/inapp'
import '../AppKomponent/App.css'
import Masivi from '../masiv/masiv'
import Search from '../hedSearch/search'
import { MasivContext } from '../context/context.js'

function App() {
  const [dataaxios, setDataaxios] = useState([])
  const [element, setElement] = useState('')
  console.log(element, 'eleme')
  const [chekidtru, setChekidtru ] = useState({})
  const [min, setMin] = useState()
  const [max, setMax] = useState()
  const [datapopular, setDatapopular] = useState([])


  const filterSearchName = dataaxios?.filter((el)=> el.name === element)

  // popilar searchebi 
  const filterSearchNamePopular = dataaxios?.filter((el)=> el.name.toLowerCase().startsWith(element) )
 
  console.log(filterSearchNamePopular, 'mmm')
   // popilar searchebi 
  
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
    
  }   else {dinamiState = filterMinMax}


  return (



     <MasivContext.Provider value={{
      dataaxios,
      setDataaxios,
      datapopular,
      setDatapopular,
      setElement,
      setChekidtru,
      setMin,
      setMax,
      filterSearchName,
      filterSearchNamePopular,
     
     }}>

      <Search/>
   
      <section className='appSection'>

          <Masivi/>
          <Section1/>
          <Section2
           
           filterMinMaxState = {dinamiState}
          />

      </section>

      </MasivContext.Provider>

      
  
  )
}

export default App
