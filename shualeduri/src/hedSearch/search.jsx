import { useContext, useEffect, useState } from 'react'
import { MasivContext } from '../context/context'
import '../hedSearch/search.css'

const Search = ()=> {
  const {datapopular, filterStartWorld, setSearchvalue, searchvalue } = useContext(MasivContext)
  const dataPopularNewSet = [...new Set(datapopular)]

  // const [element, setElement] = useState({})
  // console.log(element, 'element')

  let dinamicData = []

  if(!searchvalue){
    dinamicData =  ["შეავსეთ საძიებო ველი"]

  } else { dinamicData = filterStartWorld }

 

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

                 const selector = `.${el}`;
              
              return (
                <div key={index}>
                    <p className = 'rame'>  {el}
                  
                       {/* { useEffect(()=>{
                          const elements = document.querySelectorAll('.rame')
                           const elementsNewArray = new Array(elements)
                          console.log(elementsNewArray)

                       },[])
                       } */}
                    
                    </p>
                </div>
              )
            })}
          </div>
          <h2>პოპულარული ძიება</h2>
          <div>
            
           {dataPopularNewSet?.map((el, index)=> {
            return(
              <div key={index} >
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