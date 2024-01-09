

function Products(prop){
    return (
        <div className=" bg-red-700">
            <li>{prop.name}</li>
            <li>{prop.product_id}</li>
            <img src={prop.image} alt={prop.name}/>      
        </div>
    )
}

export default Products;