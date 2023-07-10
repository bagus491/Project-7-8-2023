import { useEffect, useState } from 'react'
import {Container,Table,Row,Col,Button} from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Tables = () => {
    const [GetDatas , setGetDatas] = useState([])
    const Navigate = useNavigate()

    useEffect(() => {
        const getApi = async () => {
            try{
                const respone = await axios.get('http://localhost:5000/')
                setGetDatas(respone.data)
            }catch{
                console.log('error')
            }
        }
        getApi()
    },[])

    return(
        <>
        <Container>
        <br></br><br></br>
            <Button variant='success' onClick={() => Navigate('/addUser')}>Tambah Contact</Button>
            <br></br><br></br>
            <Row>
                <Col md={4}>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nama</th>
          <th>Email</th>
          <th>Handler</th>
        </tr>
      </thead>
      <tbody>
      {
        GetDatas ? GetDatas.map((e,i) => (
            <tr key={e._id}>
                <td>{i++}</td>
                <td>{e.Nama}</td>
                <td>{e.Email}</td>
                <td><Button onClick={() => Navigate(`/details/${e._id}`)}>Details</Button></td>
            </tr>
        )):<tr>
            <td colSpan={4}>Data Kosong</td>
        </tr>
      }
      </tbody>
    </Table>
                </Col>
            </Row>
     
        </Container>
        </>
    )
}

export default Tables