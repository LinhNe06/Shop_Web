import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9999/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Lỗi gọi API:", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Cửa Hàng Web Shop</h1>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "8px",
            }}
          >
            <h3>{product.name}</h3>
            <p style={{ color: "red", fontWeight: "bold" }}>
              Giá: {product.price.toLocaleString()} đ
            </p>
            <button style={{ padding: "5px 10px", cursor: "pointer" }}>
              Mua ngay
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
