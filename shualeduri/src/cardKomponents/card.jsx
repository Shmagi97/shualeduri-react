import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { MasivContext } from '../context/context';

const CardKomponentSearch = () => {
   const {filterSearchName, dinamikFilterPopular, filterSerachNotValid} = useContext(MasivContext)

   let dinamikMasiv = []
   if ((filterSearchName.length === 0) && (dinamikFilterPopular.length > 0)){
    dinamikMasiv = dinamikFilterPopular
   } else if ((filterSearchName.length > 0) && (dinamikFilterPopular.length <= 1) ){
    
    dinamikMasiv = filterSearchName 
  } else if ((filterSearchName.length === 0) && (dinamikFilterPopular.length <= 1)){
    dinamikMasiv = filterSerachNotValid
  }


  return(
    
    dinamikMasiv?.map((el,index)=> {
      
      return(
        <Card style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top" src={el.imageUrl} />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            {el.price + " " + "₾"}
          </Card.Text>
          <Button variant="primary">ყიდვა</Button>
        </Card.Body>
      </Card>
      )
    })
  )

}

const CardKomponent = (props) => {
  // console.log( props.filterMinMaxState2, 'element')
  return(
    props.filterMinMaxState2?.map((el,index)=> {
      
      return(
        <Card style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top" src={el.imageUrl} />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>
            {el.price + " " + "₾"}
          </Card.Text>
          <Button variant="primary">ყიდვა</Button>
        </Card.Body>
      </Card>
      )
    })
  )

}




export   {CardKomponent, CardKomponentSearch} 