import React, { useState, useEffect } from "react";
import axios from "axios";

function PayPage() {
  const [description, setDescription] = useState([]);

  useEffect(() => {
    getDescription();
  }, []);

  const getDescription = () => {
    axios
      .get("http://www.mocky.io/v2/5b15c4923100004a006f3c07")
      .then((response) => {
        setDescription(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.massege);
      });
  };
  return (
    <div>
      <h2>Cartão de Crédito</h2>
      <form>
        <label>numero do cartão</label>
        <input type="number" />
        <label>nome do titular</label>
        <input type="text" />
        <label>validade mes/ano</label>
        <input type="month" />
        <label>cvv</label>
        <input type="number" />
      </form>

      <div>
        <p>
          Produto:<strong> R$ {description.subTotal} </strong>
        </p>
        <p>
          Frete: <strong> R${description.shippingTotal}</strong>
        </p>
        <p>
          Desconto: <strong>-R$ {description.discount}</strong>
        </p>
        <p>
          Total: <strong> R${description.total}</strong>
        </p>
      </div>

      
    </div>
  );
}

export default PayPage;
