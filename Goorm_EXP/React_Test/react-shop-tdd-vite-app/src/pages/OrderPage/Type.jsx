import React, { useContext, useEffect, useState, useMemo } from "react";
import axios from "axios";
import Products from "./Products";
import Options from "./Options";
import ErrorBanner from "../../components/ErrorBanner";
import { OrderContext } from "../../contexts/OrderContext";

function Type({ orderType, searchKeyword = "" }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const [orderDatas, updateItemCount] = useContext(OrderContext);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      const response = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(response.data);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  const ItemComponents = orderType === "products" ? Products : Options;

  const filteredItems = useMemo(() => {
    if (orderType !== "products") return items;

    return items.filter((item) =>
      item.name.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
  }, [items, searchKeyword, orderType]);

  const optionItems = filteredItems.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, orderType)
      }
    />
  ));

  const orderTypeKorean = orderType === "products" ? "상품" : "옵션";

  return (
    <>
      {error && <ErrorBanner message="에러가 발생했습니다" />}
      <h2>{orderType}</h2>
      <p>하나의 가격 {orderType === "products" ? 1000 : 500}</p>
      <p>
        {orderTypeKorean} 총 가격: {orderDatas.totals[orderType]}
      </p>

      {orderType === "products" &&
        searchKeyword &&
        filteredItems.length === 0 && <p>검색 결과가 없습니다.</p>}

      <div
        style={{
          display: "flex",
          flexDirection: orderType === "options" ? "column" : "row",
          gap: "20px",
          justifyContent: orderType === "products" ? "center" : "flex-start",
        }}
      >
        {optionItems}
      </div>
    </>
  );
}

export default Type;
