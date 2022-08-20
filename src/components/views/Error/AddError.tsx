import React from "react";
import { Btn } from "../../common/Btn";
import "../common-style.css";

export const AddError = () => {
  return (
    <div className="box">
      <h1 className="text">Taka karta istnieje już w bazie danych.</h1>
      <p>
        <Btn text="Dodaj inną kartę" to="/add" />
      </p>
      <p>
        <Btn text="Rozpocznij naukę" to="/learning" />
      </p>
    </div>
  );
};
