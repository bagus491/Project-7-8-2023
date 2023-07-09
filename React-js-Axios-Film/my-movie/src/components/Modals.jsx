
import { Modal,Button,Container,Col,Row,Image} from "react-bootstrap"


const DataModal = ({show,handleClose,ImageLink}) => {
    return(
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col><Image src={ImageLink} rounded /></Col>
                </Row>
            </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default DataModal