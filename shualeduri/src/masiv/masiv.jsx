import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios"
import { MasivContext } from "../context/context";





const Masivi = ()=> {
    
    const { setDatapopular, setDataaxios } = useContext(MasivContext)
    
   useMemo(()=> {
   
    axios.get('https://api.zoommer.ge/v1/Products/v3?CategoryId=855&Page=1&Limit=500')
    .then(response => {
        // setAxiosdata(response.data)
        
        const dataAxios = response.data.products
        setDataaxios(dataAxios)

        console.log(dataAxios, 'masiv')

        const dataAxiosPopularSearch = response?.data.popularSearches
        setDatapopular(dataAxiosPopularSearch)
        
      
       
    })

   

    .catch(errors => {
        console.log(errors)
    })
    
   

   },[])

}

export default  Masivi