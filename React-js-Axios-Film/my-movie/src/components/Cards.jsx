import { Card ,Button} from "react-bootstrap"
import '../style/LandingPage.css'

const DataCard = ({Title,Poster,Type,handleShow}) => {
    return(
        <>
        <Card style={{ width: '250px' }} className="cardsbg">
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
          {Type}
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>Go somewhere</Button>
      </Card.Body>
    </Card>
        </>
    )
}

export default DataCard