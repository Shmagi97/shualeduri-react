import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardKomponent = (props) => {
    
    return(
  
        props.filteredBrandnamedataState2.map((el,index)=>{
      
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

export default CardKomponent