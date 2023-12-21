import '../chekboxSearchKomponent/chekboxSearch.css'
import { useContext, useState } from 'react'
import { MasivContext } from '../context/context'

const ChekboxSearch = ()=> {

   const {setCheked, dataaxios, setMin, setMax  } = useContext(MasivContext)

    function getMin(event){
        const getvalueMin = event.target.value
        setMin(getvalueMin)
    }

    function getMax (event) {
        const getValueMax = event.target.value
        setMax(getValueMax)
    }


    const chekboxAxiosStateNewSet =  [...new Set(dataaxios?.map((el)=> el.brandName))]
  
    return(

          <>
       
           <div className="divMinMax">
              <input type="number" placeholder='MIN' onChange={getMin}/>
              <input type="number" placeholder='MAX' onChange={getMax}/>
           </div>

           <h1>ბრენდი</h1>
           
           <div className='chekboxDivInMap'>
              {chekboxAxiosStateNewSet?.map((el, index)=> {

               function chekedFn(event){
                   const  value = event.target.value
                    const isChekid = event.target.checked

                   
                  setCheked((items)=> ({
                    ...items,
                   [value]: isChekid
     
                     }))
                }
  
              return(
            <div  className='chekboxDiv2'  key={index}>
              
               <input type="checkbox" value={el} onChange={chekedFn}   />
               <label htmlFor="input1"  > {el} 
               </label>
            </div>
      
                  )
               })}
           </div>
           
           </>
        
    )
}

export default ChekboxSearch