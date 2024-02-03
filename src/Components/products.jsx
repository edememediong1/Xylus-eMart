

function Products({name, product_id, image, description}){
    return (
        <div className=" bg-red-700">
            <h1>{name}</h1>
            <p>{product_id}</p>
            <img src={image} alt={name}/>   
            <p>{description}</p>   
        </div>
    )
}

export default Products;