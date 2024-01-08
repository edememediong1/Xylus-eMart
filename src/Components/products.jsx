

function Products(prop){
    return (
        <div className="">
            <li>{prop.name}</li>
            <li>{prop.product_id}</li>
            <img src={prop.image} alt={prop.name}/>      
        </div>
    )
}

export default Products;