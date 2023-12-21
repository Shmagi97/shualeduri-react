import { useState } from 'react'
import { Section1, Section2 } from '../inAppKomponents/inapp'
import '../AppKomponent/App.css'
import Masivi from '../masiv/masiv'
import Search from '../hedSearch/search'
import { MasivContext } from '../context/context.js'

function App() {
  const [dataaxios, setDataaxios] = useState([])
  const [element, setElement] = useState('')
 
  const [chekidtru, setChekidtru ] = useState({})
  const [min, setMin] = useState()
  const [max, setMax] = useState()
  const [datapopular, setDatapopular] = useState([])
 

  let filterSearchName = dataaxios?.filter((el)=> el.name === element)
  
  
  let filterSearchNamePopular = dataaxios?.filter((el)=> el.name.includes(element) )

  
  let filterSerachNotValid = [];

  if (filterSearchNamePopular.length === 0){
    filterSerachNotValid = [
        { 
          
           name: 'პროდუქტი ვერ მოიძებნა',
        }
      
      ] 
  }  else {filterSerachNotValid = []}

  

  
  let filteredChekIdAxios = dataaxios?.filter((el)=> {
    if (
      (chekidtru.Apple && el.brandName === 'Apple') ||
      (chekidtru.Google && el.brandName === 'Google') ||
      (chekidtru.Samsung && el.brandName === 'Samsung') ||
      (chekidtru.Xiaomi && el.brandName === 'Xiaomi') ||
      (chekidtru.Nothing && el.brandName === 'Nothing') ||
      (chekidtru.OnePlus && el.brandName === 'OnePlus') ||
      (chekidtru.Realme && el.brandName === 'Realme') ||
      (chekidtru.Nokia && el.brandName === 'Nokia')||
      (chekidtru.Honor && el.brandName === 'Honor') ||
      (chekidtru.CAT && el.brandName === 'CAT')
    ) {
      
      return true;
    } else {
      return false;
    } 

  })


  let filterMinMax = filteredChekIdAxios?.filter((el)=>el.price > min && el.price < max)


  let dinamiState = []

  if (filterMinMax.length === 0 ) {
    dinamiState = filteredChekIdAxios
    
  }   else {dinamiState = filterMinMax}





   let dinamiStateSacdeli = []


    if ( dinamiState.length > 0 ) {

      dinamiStateSacdeli = dinamiState
      filterSearchName = []
      filterSearchNamePopular = []
    
      

    } else if ( filterSearchName.length > 0 ){
      dinamiStateSacdeli = filterSearchName
      dinamiState = []
      filterSearchNamePopular = []
      

    } else if (filterSearchNamePopular.length > 0){
      dinamiStateSacdeli = filterSearchNamePopular
      dinamiState = []
      filterSearchName = []
     
    
    } else { dinamiStateSacdeli = filterSerachNotValid }



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
      
     }}>

      <Search/>
   
      <section className='appSection'>

          <Masivi/>
          <Section1/>
          <Section2
           
           filterMinMaxState = {dinamiStateSacdeli}
          />

      </section>

      </MasivContext.Provider>

      
  
  )
}

export default App
