import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../component/Button";
import DetailsPrice from "../../component/DetailsPrice";

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
      <DetailsPrice />
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

      <Button />
    </div>
  );
}

export default PayPage;
