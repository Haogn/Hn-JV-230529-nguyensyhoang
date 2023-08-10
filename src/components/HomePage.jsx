import React, { useState } from "react";
import "./Style.css";
import ListProduc from "./ListProduc";
import Cart from "./Cart";

function HomePage() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Samsung S23 Ultra - 1TB",
      price: 6000,
      image:
        "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/s/2/s23-ultra-xanh_4.png",
      count: 0,
    },
    {
      id: 2,
      title: "Iphone 14 Pro-Max",
      price: 5000,
      image:
        "https://stcv4.hnammobile.com/downloads/1/apple-iphone-14-pro-max-128gb-01662790553.jpg",
      count: 0,
    },
    {
      id: 3,
      title: "Sony PS4-Pro 1TB",
      price: 5777,
      image:
        "https://audiovietnam.vn/wp-content/uploads/2020/04/may-choi-game-sony-ps4-pro-cuh-7218B-om-audiovietnam.vn-3.jpg",
      count: 0,
    },
    {
      id: 4,
      title: "Samsung Zflip 4 1TB",
      price: 3666,
      image:
        "https://bizweb.dktcdn.net/100/177/937/products/galaxy-z-flip4-highlights-kv-jpeg.jpg?v=1662958737853",
      count: 0,
    },
    {
      id: 5,
      title: "Huawei Mate Xs 2",
      price: 4666,
      image:
        "https://images2.thanhnien.vn/Uploaded/nthanhluan/2022_05_01/3368-2400.jpg",
      count: 0,
    },
    {
      id: 6,
      title: "Oppo Find N2 Flip",
      price: 3555,
      image:
        "https://toquoc.mediacdn.vn/280518851207290880/2022/12/17/2-16712673777671306665019.jpg",
      count: 0,
    },
    {
      id: 7,
      title: "App Watch SE GPS",
      price: 1055,
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MPLT3ref_VW_34FR+watch-44-alum-midnight-nc-se_VW_34FR_WF_CO?wid=2000&hei=2000&fmt=png-alpha&.v=1683237043713",
      count: 0,
    },
    {
      id: 8,
      title: "Marshall Stanmore",
      price: 4666,
      image:
        "https://g5u3b2d5.rocketcdn.me/wp-content/uploads/2022/04/14157261_stanmore-ii_both_cf4ce24afc854a408502306f2a55afec_1024x1024.webp",
      count: 0,
    },
    {
      id: 9,
      title: "Lambogini",
      price: 100000,
      image:
        "https://vcdn-vnexpress.vnecdn.net/2023/02/07/lamborghini-invencible-2649-1675734269.jpg",
      count: 0,
    },

    {
      id: 11,
      title: "Bugatti Chiron",
      price: 2500000,
      image:
        "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg",
      count: 0,
    },
    {
      id: 12,
      title: "Maselati",
      price: 50999,
      image: "https://img1.oto.com.vn/2022/02/24/OpzfnMD2/mc20-dd1-24d8.jpg",
      count: 0,
    },
    {
      id: 13,
      title: "Lahmacun",
      price: 12666,
      image:
        "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
      count: 0,
    },
    {
      id: 14,
      title: "Malikane",
      price: 2500000000,
      image:
        "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg",
      count: 0,
    },
    {
      id: 15,
      title: "Helicopter",
      price: 28750000,
      image:
        "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg",
      count: 0,
    },
    {
      id: 16,
      title: "Luxury Yatch",
      price: 17500000,
      image: "https://d.neoldu.com/news/57966.jpg",
      count: 0,
    },
    {
      id: 17,
      title: "Limosine",
      price: 1000000,
      image:
        "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
      count: 0,
    },
    {
      id: 18,
      title: "Ada",
      price: 125000000,
      image: "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg",
      count: 0,
    },
    {
      id: 22,
      title: "Stadium",
      price: 2500000,
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/01/thumbs_b_c_dc24a18cc233bd960f410911f5d39bf2.jpg",
      count: 0,
    },
    {
      id: 23,
      title: "Bitcoin",
      price: 60000,
      image:
        "https://www.cumhuriyet.com.tr/Archive/2021/9/27/1872247/kapak_141123.jpg",
      count: 0,
    },
    {
      id: 19,
      title: "Messi Tshirt",
      price: 250,
      image:
        "https://bizweb.dktcdn.net/100/177/937/products/galaxy-z-flip4-highlights-kv-jpeg.jpg?v=1662958737853",
      count: 0,
    },
  ]);
  const [isShow, setIsShow] = useState(false);
  const money = 128000000000;

  // moi laa click tang them 1 :
  const handleAdd = (objProduct) => {
    const addProduct = [...data];
    const addIndex = addProduct.findIndex((e) => e.id === objProduct.id);
    addProduct[addIndex].count += 1;
    setData(addProduct);
  };

  // moi lan click tru count 1 :
  const handleDown = (objPro) => {
    const downProduct = [...data];
    const downIndex = downProduct.findIndex((e) => e.id === objPro.id);
    if (downProduct[downIndex].count > 0) {
      downProduct[downIndex].count -= 1;
    }
    setData(downProduct);
  };

  // xoa san pham khoi gio hang
  const handleDeleteCart = (xoa) => {
    // console.log(xoa);
    const deleteCart = [...data];
    const deleteCartIndex = deleteCart.findIndex((e) => e.id === xoa.id);

    deleteCart[deleteCartIndex].count = 0;
    setData(deleteCart);
  };

  // loc cac phan tu co count > 0
  const fliterCount = data.filter((item) => item.count > 0);
  console.log("fliterCount", fliterCount);

  // tong gia tien
  function compar() {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i].count * data[i].price;
    }

    return sum;
  }
  const countCart = fliterCount.length;

  return (
    <div>
      <header>
        <p className="header">
          To Spend --- <strong>$ {(money - compar()).toLocaleString()} </strong>{" "}
          --- You have money
        </p>
      </header>
      <div className="grid-margin stretch-card">
        <div className="card">
          {isShow && (
            <Cart
              fliterCount={fliterCount}
              compar={compar()}
              money={money}
              plusCount={handleAdd}
              minCount={handleDown}
              handleDeleteCart={handleDeleteCart}
            />
          )}
          <ListProduc
            data={data}
            handleAdd={handleAdd}
            handleDown={handleDown}
          />
          <button className="cart" onClick={() => setIsShow(!isShow)}>
            <i className="fa-solid fa-cart-shopping"></i>
            <p>
              <strong>{countCart}</strong>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
