import '../chekboxSearchKomponent/chekboxSearch.css'
import { useState } from 'react'

const ChekboxSearch = (props)=> {

    // const [cheked, setCheked] = useState(false)
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

    // function chekedFn(event){
    //     setCheked(event.target.checked)
    // }

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
            <div key={index}  className='chekboxDiv2'>
                {/* დაამატე ჩეკიდ ინპუტში */}
               <input type="checkbox" value={el}  onClick={getValueChekbox}   />
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