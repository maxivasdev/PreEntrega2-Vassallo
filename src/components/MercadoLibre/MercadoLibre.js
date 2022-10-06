import { useState, useEffect } from "react"

const MercadoLibre = () => {
    const [products, setProducts] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=supermercado')
            .then(response => {
                return response.json() 
            }).then(res => {
                setProducts(res.results.slice(0, 20))
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    console.log(products)

    const handleSearch = () => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then(response => {
                return response.json() 
            }).then(res => {
                setProducts(res.results.slice(0, 20))
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <h2>Buscador de Productos</h2>
            {<input value={input} onChange={(e) => setInput(e.target.value)}/>}
            <button onClick={handleSearch}>Buscar</button>
            {products.map(product => <div key={product.id}>
                    <img src={product.thumbnail} alt={product.title}/><br></br>
                    {product.title}<br></br>
                    $ {product.price}<br></br>
                    <button>Comprar</button>
                    <button>Detalle</button>
                    </div>)}
        </div>
    )
}

export default MercadoLibre