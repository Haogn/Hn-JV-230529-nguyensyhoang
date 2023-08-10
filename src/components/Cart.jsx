import React from "react";
import "./Style.css";

function Cart({ fliterCount, compar, plusCount, minCount, handleDeleteCart }) {
  // tăng số lượng :
  const handlePlus = (e) => {
    plusCount(e);
  };
  // giảm số lượng
  const handleMin = (e) => {
    minCount(e);
  };
  // xoa san pharm khoi gio hang
  const handleDelete = (e) => {
    handleDeleteCart(e);
  };
  const cart = fliterCount;
  console.log("cart", cart);
  return (
    <div>
      <h1>Your cart</h1>
      <div className="d-flex justify-content-between align-items-center">
        <div className="card mb-7" style={{ margin: "auto" }}>
          {fliterCount.map((e, i) => (
            <div className="card-body" key={i}>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row alingn-items-center">
                  <div>
                    <img
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                      className="img-fluid rounded-3"
                      src={e.image}
                      alt=""
                    />
                  </div>
                  <div className="ms-3" style={{ margin: "auto", width: 300 }}>
                    <h5>{e.title}</h5>
                  </div>
                </div>
                <div
                  className="d-flex flex-row align-itmes-center"
                  style={{ margin: "auto", gap: "10px" }}
                >
                  <div style={{ width: 50 }}>
                    <h5
                      className="fw-normal mb-0 d-flex"
                      style={{ gap: "5px" }}
                    >
                      <i
                        className="fa-solid fa-minus"
                        onClick={() => handleMin(e)}
                      ></i>
                      {e.count}
                      <i
                        className="fa-solid fa-plus"
                        onClick={() => handlePlus(e)}
                      ></i>
                    </h5>
                  </div>
                  <div style={{ width: 150, margin: "auto" }}>
                    <h5 className="mb-0">{e.price} $</h5>
                  </div>
                  <div style={{ color: "#1b1b1b", margin: "auto" }}>
                    <i
                      className="fas fa-trash-alt"
                      onClick={() => handleDelete(e)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h3>Tổng giá tiền :{compar} $</h3>
        </div>
      </div>
    </div>
  );
}

export default Cart;
