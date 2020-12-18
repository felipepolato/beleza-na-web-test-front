import React, { useState } from "react";

function DetailsPrice() {
  const [inputPrice, setInputPrice] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [number, setNumber] = useState("");

  const hendelImputCredCard = (event) => {
    setInputPrice(event.target.value);
  };

  const hendelName = (event) => {
    setName(event.target.value);
  };

  const hendelMonth = (event) => {
    setMonth(event.target.value);
  };

  const hendelNumber = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <h2>Cartão de Crédito</h2>
      <form>
        <label>numero do cartão</label>
        <input type="number" onChange={hendelImputCredCard} />
        <label>nome do titular</label>
        <input type="text" onChange={hendelName} />
        <label>validade mes/ano</label>
        <input type="month" onChange={hendelMonth} />
        <label>cvv</label>
        <input type="number" onChange={hendelNumber} />
      </form>
    </div>
  );
}

export default DetailsPrice;
