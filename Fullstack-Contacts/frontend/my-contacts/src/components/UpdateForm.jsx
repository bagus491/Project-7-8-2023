
import { useState } from "react"
import { Card,Container,Row,Col,Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'

const Forms = () => {
    const [Nama, setNama] = useState("")
    const [noHp, setnoHp] = useState("")
    const [Email, setEmail] = useState("")
    const Navigate = useNavigate()
    const {id} = useParams()

    const userForm = async (e) => {
        e.preventDefault()
        try{
            await axios.put(`http://localhost:5000/updateuser/${id}`, {
                Nama,
                noHp,
                Email,
            })
            Navigate('/')
        }catch{
            console.log('error')
        }
    }



    return(
        <>
        <Container>
            <Row>
                <Col md={5}>
                <Card style={{ width: '18rem' }}>
          <Card.Body>
          <form onSubmit={userForm}>
                    <div className="mb-3">
                        <input type="text" placeholder="Nama"
                            name="Nama"
                            onChange={(e) => setNama(e.target.value)}
                        ></input>
                        <br></br><br></br>
                        <input type="text" placeholder="noHp"  
                        name="noHp"
                        onChange={(e) => setnoHp(e.target.value)}></input>
                        <br></br><br></br>
                        <input type="text" placeholder="Email" 
                         name="Email"
                         onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <br></br><br></br>
                        <button type="submit">Update</button>
                    </div>
                  </form>
                  <Button onClick={() =>  Navigate(`/details/${id}`)}>Back</Button>
         </Card.Body>
    </Card>
                
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Forms