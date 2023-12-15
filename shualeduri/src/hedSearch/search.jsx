import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { MasivContext } from '../context/context'
import '../hedSearch/search.css'

const Search = ()=> {
   
  const useref = useRef()

  const [searchvalue, setSearchvalue] = useState('')
 

  const {datapopular, setElement, dataaxios } = useContext(MasivContext)

  const filterDataAxios = dataaxios?.filter((el)=> el.name.toLowerCase().startsWith(searchvalue))
  const filterDataAxiosBrandName = [...new Set(filterDataAxios.map((el)=> el.name ))] 
 

  let dinamicData = []

  if(!searchvalue){
    dinamicData =  ["შეავსეთ საძიებო ველი"]

  } else { dinamicData = filterDataAxiosBrandName }

 

  function getValueSearch (event){
    const value = event.target.value
    setSearchvalue(value)
  }

  const modalClick = document.querySelector('.modalSection')
  const section2Blur = document.querySelector('.section2Div')


  let modalOpen = false

  function clickModalFn(){
    if (!modalOpen){
       modalClick.classList.add('modalOpen')
       section2Blur.style.filter =  "blur(6px)";
       modalOpen = true
    } else if (modalOpen){
       modalClick.classList.remove('modalOpen')
       section2Blur.style.filter =  "blur(0px)";
       modalOpen = false
    }
  }
  

  useEffect(()=>{

    const elements = document.querySelectorAll('.mapName')
    const masiv = Array.from(elements)
   
    masiv.forEach((el)=> el.addEventListener('click', ()=> {
      
      setElement(el.outerText)
      modalClick.classList.remove('modalOpen')
      section2Blur.style.filter =  "blur(0px)";
    
      
    }))

  
  },[searchvalue])

  
  // popilar searchebi 

  useEffect(()=>{

    const elementsPopular = document.querySelectorAll('.mapName2')
    const masiv2 = Array.from(elementsPopular)
    

    masiv2.forEach((el)=> el.addEventListener('click', ()=> {
      setElement(el.outerText)
      
      modalClick.classList.remove('modalOpen')
      section2Blur.style.filter =  "blur(0px)";
    }))
  
  },[searchvalue])

   // popilar searchebi 

    return(

      <>

       <section className='searchSection'>
        <div>
          
          <div>
            <p>*7007 / +995 (32) 2 60 30 60</p>
          </div>

          <div>
             <p>სავაჭრო პოლიტიკა</p>
             <p>განვადება</p>
             <p>კარიერა</p>
             <p>Trade In</p>
             <p>ფილიალები</p>
             <p>ყველა აქცია</p>
          </div>
          
        </div>

        <div className='searchSectionDiv2'>

          <img src="https://zoommer.ge/icons/main-logo.svg" alt="zoomerLogo" className='imgZoomer'/>
          { useEffect(()=>{
            
              const imgZoomer = document.querySelector('.imgZoomer');
  
              imgZoomer.addEventListener('click', () => {
               window.location = '/'
              });
          }, [])
          }

          <div>
             <img src="https://zoommer.ge/icons/dots.svg" alt="iqon" />
             <p>ნავიგაცია</p>
          </div>

          <div>   
             <img src="https://zoommer.ge/icons/main-search.svg" alt="searchIqon" />
              <input type="search" name="" id="" placeholder='ძებნა' onChange={ getValueSearch } onClick={clickModalFn}/>

          </div>

          <div>
            <div>
              <img src="https://zoommer.ge/icons/header-cart.svg" alt="kalataImage" />
              <p>კალათა</p>
            </div>
          </div>

          <div>
            <div>
              <img src="https://zoommer.ge/icons/user-icon.svg" alt="kalataImage" />
              <p>შესვლა</p>
            </div>
          </div>

        </div>
       </section>
       
       <section className='modalSection'>
          <h2>ძებნის შედეგი</h2>
          <div>
            {dinamicData?.map((el, index)=> {
              
              return (
                <div className='mapName' key={index} ref={useref}>
                    <p >  {el} </p>
                </div>
              )
            })}
          </div>
          <h2>პოპულარული ძიება</h2>
          <div>
            
           {datapopular?.map((el, index)=> {
            return(
              <div className='mapName2' key={index} >
                <p>{el}</p>
              </div>
            )
           })}
          </div>
       </section>

       </>
    )
}

export default Search