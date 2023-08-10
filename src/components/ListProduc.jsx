import React from "react";
import "./Style.css";

function ListProduc({ data, handleAdd, handleDown }) {
  const handleAddCart = (e) => {
    handleAdd(e);
  };

  const handleDownCart = (e) => {
    handleDown(e);
  };
  return (
    <div>
      <div className="list-product">
        {data.map((e, i) => (
          <div className="item-product" key={i}>
            <img src={e.image} alt="" className="img-productt" />
            <div className="box d-flex justify-content-between align-items-center">
              <p>
                <strong>{e.title}</strong>
              </p>
              <p>
                <strong>{e.price} $</strong>
              </p>
            </div>
            <div className="box d-flex justify-content-between align-items-center">
              <button
                disabled={e.count < 1}
                className="btn btn-danger btn-icon-text"
                onClick={() => handleDownCart(e)}
              >
                Down
              </button>
              <span>{e.count}</span>
              <button
                className="btn btn-danger btn-icon-text"
                onClick={() => handleAddCart(e)}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProduc;
