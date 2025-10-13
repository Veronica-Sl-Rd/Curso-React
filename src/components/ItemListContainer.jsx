import "../css/ItemListContainer.css"

const ItemListContainer = (props) => {
    return (
        <div className="saludo-container">
            <h1>
                {props.saludo}
            </h1>
        </div>
    )
}

export default ItemListContainer