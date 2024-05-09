import Item from "../Item/Item"


const ItemList = ({ productsList }) => {
    return (
        <div className="d-flex flex-wrap">
            {productsList.map((elem) => {
                return <Item key={elem.id} {...elem} />
            })}
        </div>
    )
}

export default ItemList
