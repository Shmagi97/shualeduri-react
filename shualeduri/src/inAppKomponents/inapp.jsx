
import  { CardKomponentSearch, CardKomponent} from '../cardKomponents/card'
import ChekboxSearch from '../chekboxSearchKomponent/chekboxSearch'
import '../inAppKomponents/inApp.css'

const Section1 = ()=> {
    return(

        <section className="sectionSection">
           <ChekboxSearch />
        </section>
    )
}

const Section2 = (props)=> {
   
    return(
        <section className='cardKomponentSection'>

        <div>
        
            <CardKomponentSearch/>

        </div>

        <div className="section2Div">
           <CardKomponent
            filterMinMaxState2 = {props.filterMinMaxState}
           />
         
        </div>

        </section>
    )
}

export {Section1, Section2}