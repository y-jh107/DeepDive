import React, { useContext, useState } from "react";
import Type from "./Type";
import { OrderContext } from "../../contexts/OrderContext";
import SearchBar from "../../components/SearchBar";

function OrderPage({ setStep }) {
  const [orderDatas] = useContext(OrderContext);
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <div>
      <h1>Travel Products</h1>
      <SearchBar
        style={{ width: "50%", alignItems: "center" }}
        onSearch={setSearchKeyword}
      />
      <div>
        <Type orderType="products" searchKeyword={searchKeyword} />
      </div>
      <div style={{ display: "flex", marginTop: 20 }}>
        <div style={{ width: "50%" }}>
          <Type orderType="options" />
        </div>
        <div>
          <h2>Total Price: {orderDatas.totals.total}</h2>
          <br />
          <button onClick={() => setStep(1)}>주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
