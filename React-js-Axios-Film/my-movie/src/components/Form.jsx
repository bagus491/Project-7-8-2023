
import { useState } from "react"
import { Container } from "react-bootstrap"
import Cards from './Cards'
import '../style/LandingPage.css'
import Modals from './Modals'

const DataForm = () => {
    const [Keyword, setKeyword] = useState("")
    const [DataApi , setDataApi] = useState([])
    const [show,setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
   const getuser = async (e) => {
    e.preventDefault()
    try{
        await fetch(`http://www.omdbapi.com/?apikey=d680339b&s=${Keyword}`)
            .then((res) => res.json())
            .then((res) => setDataApi(res.Search))
    }catch{
        console.log('error')
    }
   }   

 
    return(
        <>
        <Container>
        <input type="text" name="Keyword" onChange={(e) => setKeyword(e.target.value)}></input>
        <button type="button" onClick={(e) => getuser(e)}>Search</button>
        <br></br><br></br>
        <div className="myCard">
        {
            DataApi ? DataApi.map((e) => (
                   <Cards  key={e.imdbID} Title={e.Title} Poster={e.Poster} Type={e.Type}  handleShow={handleShow} />
                   ))  : <h1>false</h1>    
                   
                }
        </div>
                <Modals show={show} handleClose={handleClose} ImageLink={DataApi.Poster} />
        </Container>
        </>
    )
}

export default DataForm