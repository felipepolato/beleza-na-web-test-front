import React, { useEffect, useState } from 'react'
import axios from 'axios'

function CartPage() {
  const [product, setProduct] = useState([])
  const [detailsPrice, setDetailsPrice] = useState(0)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    axios
      .get('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((response) => {
        setDetailsPrice(response.data)
        setProduct(response.data.items)
        console.log(response.data.items)
      })
      .catch((error) => {
        console.error(error.massege)
      })
  }

  return (
    <div>
      {product &&
        product.map((item) => {
          return (
            <div>
              <p>{item.product.name}</p>
              <p>{item.product.priceSpecification.price}</p>
              <img src={item.product.imageObjects[0].small} />
            </div>
          )
        })}

      <div>
        <p>Produto: R$ {detailsPrice.subTotal} </p>
        <p>Frete: R$ {detailsPrice.shippingTotal}</p>
        <p>Desconto: -R$ {detailsPrice.discount}</p>
        <p>Total: R$ {detailsPrice.total}</p>
      </div>
    </div>
  )
}

export default CartPage
