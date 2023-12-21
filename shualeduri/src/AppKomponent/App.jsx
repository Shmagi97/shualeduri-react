import { useState } from 'react'
import { Section1, Section2 } from '../inAppKomponents/inapp'
import '../AppKomponent/App.css'
import Masivi from '../masiv/masiv'
import Search from '../hedSearch/search'
import { MasivContext } from '../context/context.js'

function App() {
  const [dataaxios, setDataaxios] = useState([])
  const [element, setElement] = useState('')

  const [min, setMin] = useState()
  const [max, setMax] = useState()
  const [datapopular, setDatapopular] = useState([])
 
  const [cheked, setCheked] = useState({})
  

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
      (cheked.Apple && el.brandName === 'Apple') ||
      (cheked.Google && el.brandName === 'Google') ||
      (cheked.Samsung && el.brandName === 'Samsung') ||
      (cheked.Xiaomi && el.brandName === 'Xiaomi') ||
      (cheked.Nothing && el.brandName === 'Nothing') ||
      (cheked.OnePlus && el.brandName === 'OnePlus') ||
      (cheked.Realme && el.brandName === 'Realme') ||
      (cheked.Nokia && el.brandName === 'Nokia')||
      (cheked.Honor && el.brandName === 'Honor') ||
      (cheked.CAT && el.brandName === 'CAT')
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
      setMin,
      setMax,
      setCheked,
      
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
