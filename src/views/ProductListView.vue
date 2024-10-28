<template>
  <div class="productlist">
    <div class="container">
      <div class="title">
        <h2>找新鮮嗎? <span class="line-break">來棗我們吧</span></h2>
        <div>
          <img src="/public/img/Hi.svg" alt="" />
        </div>
      </div>
      <div class="product-container">
        <div class="product-card">
          <img src="/public/img/product.jpg" class="product-image" alt="商品照片" />
          <div class="product-info">
            <h5 class="product-title">13號 珍蜜</h5>
            <div class="quantity-control">
              <button class="quantity-button">-</button>
              <input type="number" min="1" class="quantity-input" />
              <button class="quantity-button">+</button>
            </div>
            <button class="add-to-cart">加入購物車</button>
          </div>
        </div>
        <div class="product-card">
          <img src="/public/img/product.jpg" class="product-image" alt="商品照片" />
          <div class="product-info">
            <h5 class="product-title">11號 雪麗</h5>
            <div class="quantity-control">
              <button class="quantity-button">-</button>
              <input type="number" min="1" class="quantity-input" />
              <button class="quantity-button">+</button>
            </div>
            <button class="add-to-cart">加入購物車</button>
          </div>
        </div>
        <div class="product-card">
          <img src="/public/img/product.jpg" class="product-image" alt="商品照片" />
          <div class="product-info">
            <h5 class="product-title">白玉甘蔗汁</h5>
            <div class="quantity-control">
              <button class="quantity-button">-</button>
              <input type="number" min="1" class="quantity-input" />
              <button class="quantity-button">+</button>
            </div>
            <button class="add-to-cart">加入購物車</button>
          </div>
        </div>
        <div class="product-card">
          <img src="/public/img/product.jpg" class="product-image" alt="商品照片" />
          <div class="product-info">
            <h5 class="product-title">紅心芭樂</h5>
            <div class="quantity-control">
              <button class="quantity-button">-</button>
              <input type="number" min="1" class="quantity-input" />
              <button class="quantity-button">+</button>
            </div>
            <button class="add-to-cart">加入購物車</button>
          </div>
        </div>
        <div class="product-card">
          <img src="/public/img/product.jpg" class="product-image" alt="商品照片" />
          <div class="product-info">
            <h5 class="product-title">少籽白芭樂</h5>
            <div class="quantity-control">
              <button class="quantity-button">-</button>
              <input type="number" min="1" class="quantity-input" />
              <button class="quantity-button">+</button>
            </div>
            <button class="add-to-cart">加入購物車</button>
          </div>
        </div>
        <div class="product-card">
          <img src="/public/img/product.jpg" class="product-image" alt="商品照片" />
          <div class="product-info">
            <h5 class="product-title">地瓜葉</h5>
            <div class="quantity-control">
              <button class="quantity-button">-</button>
              <input type="number" min="1" class="quantity-input" />
              <button class="quantity-button">+</button>
            </div>
            <button class="add-to-cart">加入購物車</button>
          </div>
        </div>
        <div class="product-card">
          <img src="/public/img/product.jpg" class="product-image" alt="商品照片" />
          <div class="product-info">
            <h5 class="product-title">茄子</h5>
            <div class="quantity-control">
              <button class="quantity-button">-</button>
              <input type="number" min="1" class="quantity-input" />
              <button class="quantity-button">+</button>
            </div>
            <button class="add-to-cart">加入購物車</button>
          </div>
        </div>
        <div class="product-card">
          <img src="/public/img/product.jpg" class="product-image" alt="商品照片" />
          <div class="product-info">
            <h5 class="product-title">蘆筍</h5>
            <div class="quantity-control">
              <button class="quantity-button">-</button>
              <input type="number" min="1" class="quantity-input" />
              <button class="quantity-button">+</button>
            </div>
            <button class="add-to-cart">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.line-break {
  display: inline;
}
.productlist {
  background-color: #f5e1c9;
  min-height: calc(100vh - var(--navbar-height));
}
.title {
  padding-top: 30px;
  display: flex;
  align-items: center;
}
h2 {
  margin: 0;
  font-size: 64px;
  font-weight: 700;
  color: white;
  color: var(--primary-color);
  padding-right: 24px;
}

.title img {
  width: 100px;
  color: rgb(245, 225, 201);
  background-color: rgb(245, 225, 201);
}

.product-container {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  background-color: #f5e1c9;
}

/* 卡片样式 */
.product-card {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}

/* 商品图片样式 */
.product-image {
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
}

/* 商品信息样式 */
.product-info {
  text-align: center;
  margin-top: 15px;
}

.product-title {
  color: #50653e;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

/* 数量控制样式 */
.quantity-control {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.quantity-button {
  background-color: #50653e;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 1.2rem;
  border-radius: 5px;
}

.quantity-input {
  width: 50px;
  text-align: center;
  margin: 0 8px;
  font-size: 1rem;
  padding: 5px;
  border: 1px solid #50653e;
  border-radius: 5px;
}

/* 加入购物车按钮样式 */
.add-to-cart {
  background-color: #50653e;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  transition: background-color 0.3s ease;
}

.add-to-cart:hover {
  background-color: #3e4f2d;
}
@media (max-width: 768px) {
  .line-break {
    display: block;
  }
  .title {
    padding-top: 10px;
    justify-content: center;
  }
  h2 {
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    color: white;
    color: var(--primary-color);
    padding-right: 24px;
  }

  .title img {
    width: 75px;
    color: rgb(245, 225, 201);
    background-color: rgb(245, 225, 201);
  }
}
</style>