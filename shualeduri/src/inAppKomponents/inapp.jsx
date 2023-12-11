
import CardKomponent from '../cardKomponents/card'
import ChekboxSearch from '../chekboxSearchKomponent/chekboxSearch'
import '../inAppKomponents/inApp.css'

const Section1 = (props)=> {
    return(

        <section className="sectionSection">
           <ChekboxSearch
            dataAxiosState2 = {props.dataAxiosState}
            minState2 = {props.minState}
            maxState2 = {props.maxState}
            chekidInfoTruOrFalseState2 = {props.chekidInfoTruOrFalseState}
           />
        </section>
    )
}

const Section2 = (props)=> {
   
    return(
        <div className="section2Div">
           <CardKomponent
            filterMinMaxState2 = {props.filterMinMaxState}
           />
         
        </div>
    )
}

export {Section1, Section2}