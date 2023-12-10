import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios"





const Masivi = (props)=> {
    
    const [list, setList] = useState([])
    const [axiosdata, setAxiosdata] = useState ([])
    const [value, setValue] = useState()
    // const getValueInInput = (getValue) => {
    //     setValue(getValue)
       
    // }

   useMemo(()=> {
   
    axios.get('https://api.zoommer.ge/v1/Products/v3?CategoryId=855&Page=1&Limit=60')
    .then(response => {
        // setAxiosdata(response.data)
       
        const dataAxios = response.data.products
        props.getAxiosDataState(dataAxios)
       
    })

   

    .catch(errors => {
        console.log(errors)
    })
    
   

   },[])

    
    return(
        <>
      
          
        </>
        
    )
   
   
   

}

export default  Masivi