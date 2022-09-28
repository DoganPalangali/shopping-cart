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

    const getData = async () => {
      const data = await fetch("https://dummyjson.com/products");
      const jsonData = await data.json();
      setData(jsonData.products);
      console.log("xdd");
    };

    getData();
  }, []);

  console.log(data);

  return (
    <div>
      {data.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
}

export default ProductData;
