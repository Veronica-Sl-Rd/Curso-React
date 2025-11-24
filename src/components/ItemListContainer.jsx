import "../css/ItemListContainer.css"
import { useEffect, useState  } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import Loader from "./Loader" 
import { collection, getDocs, where, query, addDoc } from "firebase/firestore"
import { db } from "../service/firebase"
import CarrouselNovedades from "./CarrouselNovedades"


const ItemListContainer = (props) => {

    const[data, setData]=useState([])
    const [loader, setLoader] = useState (false)
    const {type}= useParams()

    useEffect(()=>{
        setLoader(true)
        const productsCollection = type
        ? query(collection(db, "productos"), where("category", "==", type))
        : collection(db, "productos")
        getDocs(productsCollection)
        .then((res)=> {
            const list = res.docs.map((doc)=>{
                return{
                id: doc.id,
                ...doc.data()
            }
            })
            setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoader(false))
    },[type])
    //Prueba de carrousel
    const novedades = data.filter(item => item.category === "nuevos")
    //Prueba de carrousel
    return (
        <>
        {
        loader 
        ? <Loader texto="Cargando productos"/> :
        <> 
            {/*SOLO MOSTRÁ EL CARRUSEL CUANDO NO ESTÁS FILTRANDO CATEGORÍAS */}
            {!type && novedades.length > 0 && (
                <CarrouselNovedades productos={novedades} />
            )}
        
        <div className="saludo-container">
            <h1>
                {props.saludo}{type && <span style={{textTransform: 'capitalize'}}>{type}</span> }
            </h1>
            <ItemList data = {data}/>
        </div>
        </>
        }
        </>
    )
}

export default ItemListContainer