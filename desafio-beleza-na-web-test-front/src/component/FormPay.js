import React, { useState } from "react";


function FormPay() {
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

  console.log(inputPrice, number, name, month);
  return (
    <div>
      <h2>Cartão de Crédito</h2>
      <form>
        <label>numero do cartão</label>
        <input
          type="number"
          onChange={hendelImputCredCard}
          value={inputPrice}
          pattern="@^[1-9][0-9]{2}-[1-3]{3}-[0-9]{3}-[0-9]{3}$"
        />

        <label>nome do titular</label>
        <input type="text" onChange={hendelName} value={name} />

        <label>validade mes/ano</label>
        <input type="month" onChange={hendelMonth} value={month} />

        <label>cvv</label>
        <input
          type="number"
          onChange={hendelNumber}
          value={number}
          pattern={"[0-9]{3}$"}
        />
      </form>
    </div>
  );
}

export default FormPay;
