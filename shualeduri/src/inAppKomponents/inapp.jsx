
import CardKomponent from '../cardKomponents/card'
import ChekboxSearch from '../chekboxSearchKomponent/chekboxSearch'
import '../inAppKomponents/inApp.css'

const Section1 = (props)=> {
    return(

        <section className="sectionSection">
           <ChekboxSearch
            dataAxiosState2 = {props.dataAxiosState}
            getChekidInfoState2 = {props.getChekidInfoState}
            minState2 = {props.minState}
            maxState2 = {props.maxState}
           />
        </section>
    )
}

const Section2 = (props)=> {
    return(
        <div className="section2Div">
           <CardKomponent
            filteredBrandnamedataState2 = {props.filteredBrandnamedataState}
           />
        </div>
    )
}

export {Section1, Section2}