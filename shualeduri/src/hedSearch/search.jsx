import { useContext, useState } from 'react'
import { MasivContext } from '../context/context'
import '../hedSearch/search.css'

const Search = ()=> {
   
  const [searchvalue, setSearchvalue] = useState()
  // console.log(searchvalue, 'llll')
   
  function getValueSearch (event){
    const value = event.target.value
    setSearchvalue(value)
  }

  const modalClick = document.querySelector('.modalSection')
  //  console.log(modalClick)
  
   let number = 0 

  // function clickModalFn(){
  //   if (number < 1){
  //     number ++
  //     modalClick.classList.add('modalOpen')
  //   } else if (number == 1){
  //     number = 0
  //     modalClick.classList.remove('modalOpen')
  //   }
  // }

  let modalOpen = false

  function clickModalFn(){
    if (!modalOpen){
       modalClick.classList.add('modalOpen')
       modalOpen = true
    } else if (modalOpen){
       modalClick.classList.remove('modalOpen')
       modalOpen = false
    }
  }

    const {datapopular} = useContext(MasivContext)
    // console.log(datapopular, 'llll')
  

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

          <img src="https://zoommer.ge/icons/main-logo.svg" alt="zoomerLogo" />

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
          <div>

          </div>
          <div>
           {datapopular?.map((el, index)=> {
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