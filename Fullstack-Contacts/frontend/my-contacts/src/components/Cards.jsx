import { useState } from 'react'
import {Button, Card} from 'react-bootstrap'
import axios  from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

const Cards = () => {
    const [GetDetails, setGetDetails]  = useState([])
    const {id} = useParams()
    const Navigate = useNavigate()

    const DeleteContact = async () => {
        try{
             await axios.delete(`http://localhost:5000/delete/${id}`)
             Navigate('/')
        }catch{
            console.log('error')
        }
    }
    
    const GetDatabyid = async () => {
        try{
            const respone = await axios.get(`http://localhost:5000/details/${id}`)
            setGetDetails(respone.data)
        }catch{
            console.log('error')
        }
    }

    GetDatabyid()
   
    return(
        <>
        <Card style={{ width: '18rem' }} bg='dark' >
      <Card.Body className='text-white'>
                <Card.Title>{GetDetails.Nama}</Card.Title>
                <Card.Subtitle className="mb-2">{GetDetails.noHp}</Card.Subtitle>
                <Card.Text>
                {GetDetails.Email}
                </Card.Text>
                <Button onClick={() => Navigate(`/updateuser/${GetDetails._id}`)} variant='success'>UpdateUser</Button>
                <br></br><br></br>
                <Button variant='danger' onClick={() => DeleteContact()}>hapusContact</Button>
                <br></br><br></br>
                <Button onClick={() => Navigate('/')}>Back</Button>
      </Card.Body>
    </Card>
        </>
    )
}

export default Cards