function Products(prop){
    return (
        <div>
            <li>{prop.name}</li>
            <li>{prop.product_id}</li>
            <img src={prop} alt={prop.name}/>      
        </div>
    )
}