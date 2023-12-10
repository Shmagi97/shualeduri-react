import '../chekboxSearchKomponent/chekboxSearch.css'
import { useState } from 'react'

const ChekboxSearch = (props)=> {

    const [cheked, setCheked] = useState({})
    // console.log(cheked)

    function getValueChekbox (event){
        const getValue = event.target.value
        props.getChekidInfoState2(getValue)
      
    }

    function getMin(event){
        const getvalueMin = event.target.value
        props.minState2(getvalueMin)
    }

    function getMax (event) {
        const getValueMax = event.target.value
        props.maxState2(getValueMax)
    }

    function getChekidTru(){
        props.chekidInfoTruOrFalseState2(cheked)
     }

    function chekedFn(event){
       const  value = event.target.value
       const isChekid = event.target.checked
       getChekidTru()
       
       setCheked((items)=> ({
         ...items,
         [value]: isChekid
        
       }))
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
  
              return(
            <div  className='chekboxDiv2'  key={index}>
                {/* დაამატე ჩეკიდ ინპუტში */}
               <input type="checkbox" value={el} onChange={chekedFn}  checked={cheked[index]} onClick={getValueChekbox}   />
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