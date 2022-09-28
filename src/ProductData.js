import React, { useState, useEffect } from "react";
import Card from "./components/Card";

function ProductData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())

    //   .then((itemData) => {
    //     const items = itemData.products;
    //     setData(items);
    //   });

    // datanın fetchlenmesi;

    const getData = async () => {
      const data = await fetch("https://dummyjson.com/products");
      const dummyData = await data.json();
      setData(dummyData.products);
      console.log("xdd");
      console.log("dummyData = ", dummyData);
    };

    getData();
  }, []);

  console.log(data);

  return (
    <div>
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ProductData;
