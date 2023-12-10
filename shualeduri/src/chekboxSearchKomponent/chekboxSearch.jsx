import '../chekboxSearchKomponent/chekboxSearch.css'
import { useState } from 'react'

const ChekboxSearch = (props)=> {

    const [cheked, setCheked] = useState({})
    props.chekidInfoTruOrFalseState2(cheked)
    // console.log(cheked, 'meore')


    function getMin(event){
        const getvalueMin = event.target.value
        props.minState2(getvalueMin)
    }

    function getMax (event) {
        const getValueMax = event.target.value
        props.maxState2(getValueMax)
    }


    const chekboxAxiosStateNewSet =  [...new Set(props.dataAxiosState2?.map((el)=> el.brandName))]
    // console.log(chekboxAxiosStateNewSet)

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
                //    const objectCheked = {value, isChekid, index}
                  setCheked((items)=> ({
                    ...items,
                   [value]: isChekid
     
                     }))
                }
  
              return(
            <div  className='chekboxDiv2'  key={index}>
              
               <input type="checkbox" value={el} onChange={chekedFn}  checked={cheked[index]}   />
               <label htmlFor="input1" > {el} 
               </label>
            </div>
      
                  )
               })}
           </div>
           
           </>
        
    )
}

export default ChekboxSearch