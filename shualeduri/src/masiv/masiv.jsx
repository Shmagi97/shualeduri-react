import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios"
import { MasivContext } from "../context/context";





const Masivi = (props)=> {
    
    const { setDatapopular } = useContext(MasivContext)
    
   useMemo(()=> {
   
    axios.get('https://api.zoommer.ge/v1/Products/v3?CategoryId=855&Page=1&Limit=60')
    .then(response => {
        // setAxiosdata(response.data)
        
        const dataAxios = response.data.products
        props.getAxiosDataState(dataAxios)
        const dataAxiosPopularSearch = response?.data.popularSearches
     
        setDatapopular(dataAxiosPopularSearch)
        
      
       
    })

   

    .catch(errors => {
        console.log(errors)
    })
    
   

   },[])

}

export default  Masivi