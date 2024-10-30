<template>
  <div class="container">
    <div class="shopping-cart-page">
      <!-- 結帳步驟進度條 -->
      <div class="checkout-steps">
        <div class="step" :class="{ active: currentStep >= 1 }">購物車</div>
        <div class="step" :class="{ active: currentStep >= 2 }">運送資訊</div>
        <div class="step" :class="{ active: currentStep >= 3 }">付款資訊</div>
      </div>

      <!-- 購物車商品列表 -->
      <template v-if="currentStep == 1">
        <div class="cart-items">
          <h2>購物車商品列表</h2>
          <div v-for="(item, index) in cartItems" :key="item.id" class="cart-item">
            <div>
              <img :src="item.imageUrl" alt="商品圖片" class="cart-item-image" />
            </div>
            <div class="cart-item-details">
              <div style="flex: 1">
                <h5 class="cart-item-title">{{ item.title }}</h5>
                <div class="cart-item-price">單價: {{ item.price }} 元</div>
              </div>
              <div class="quantity-control" style="flex: 1">
                <button @click="decreaseQuantity(index)" class="quantity-button">-</button>
                <input type="number" v-model.number="item.quantity" class="quantity-input" min="1" />
                <button @click="increaseQuantity(index)" class="quantity-button">+</button>
              </div>
            </div>
            <button @click="removeItem(index)" class="remove-item">刪除</button>
          </div>
        </div>

        <!-- 總計區域 -->
        <div class="cart-summary">
          <h3>總計</h3>
          <div class="summary-item">
            <span>商品總計:</span>
            <span>{{ cartTotal }} 元</span>
          </div>
          <div class="summary-item">
            <span>運費:</span>
            <span>{{ shippingFee }} 元</span>
          </div>
          <div class="summary-item total">
            <span>結帳總額:</span>
            <span>{{ cartTotal + shippingFee }} 元</span>
          </div>
          <div class="actions">
            <button class="continue-shopping" @click="goToShop">繼續購物</button>
            <button class="checkout" @click="goToCheckout">前往結帳</button>
          </div>
        </div>
      </template>
      <template v-if="currentStep == 2">
        <div class="shipping-form">
          <h2>運送資訊</h2>
          <form>
            <div class="form-group">
              <label for="name">收件人姓名</label>
              <input type="text" id="name" v-model="name" required />
            </div>
            <div class="form-group">
              <label for="address">地址</label>
              <input type="text" id="address" v-model="address" required />
            </div>
            <div class="form-group">
              <label for="phone">電話</label>
              <input type="tel" id="phone" v-model="phone" />
            </div>
            <div class="form-group">
              <label for="deliveryMethod">運送方式</label>
              <select id="deliveryMethod" v-model="deliveryMethod" required>
                <option value="standard">常溫</option>
                <option value="express">冷藏</option>
              </select>
            </div>
            <div class="actions">
              <button type="button" class="continue-shopping" @click="currentStep = 1">回購物車</button>
              <button type="submit" class="checkout">下一步</button>
            </div>
          </form>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentStep: 1,
      cartItems: [
        {
          id: 1,
          title: '商品 A',
          price: 500,
          quantity: 2,
          imageUrl: '/img/dates.png',
        },
        {
          id: 2,
          title: '商品 B',
          price: 300,
          quantity: 1,
          imageUrl: 'https://binghan60.github.io/tsai-vue/img/sugarcane.png',
        },
      ],
      shippingFee: 60,
    }
  },
  computed: {
    cartTotal() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    },
  },
  methods: {
    increaseQuantity(index) {
      this.cartItems[index].quantity++
    },
    decreaseQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--
      }
    },
    removeItem(index) {
      this.cartItems.splice(index, 1)
    },
    goToShop() {
      this.$router.push('/productlist')
    },
    goToCheckout() {
      this.currentStep++
    },
  },
}
</script>

<style scoped>
.shopping-cart-page {
  padding: 20px;
  background-color: #f5e1c9;
  color: #333;
}

.checkout-steps {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: 700;
}

.step {
  padding: 10px;
  border-bottom: 3px solid #ccc;
  color: #8b8b8b;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.step.active {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}

.cart-items {
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.cart-items h2 {
  border-bottom: 1px solid gainsboro;
  padding: 0 0 10px 0;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
}

.cart-item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
}

.cart-item-details {
  display: flex;
  width: 100%;
}

.cart-item-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #50653e;
  margin-bottom: 5px;
}

.cart-item-price,
.cart-item-subtotal {
  color: #666;
  font-size: 1rem;
  margin-bottom: 5px;
}

.quantity-control {
  display: flex;
  align-items: center;
}

.quantity-button {
  width: 30px;
  background-color: #50653e;
  color: #fff;
  border: none;
  padding: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 5px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  transition: background-color 0.3s ease;
}

.quantity-button:hover {
  background-color: #405331;
}

.quantity-input {
  width: 50px;
  text-align: center;
  font-size: 1rem;
}

.remove-item {
  white-space: nowrap;
  background-color: #c0392b;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 0.9rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.remove-item:hover {
  background-color: #a83224;
}

.cart-summary {
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.summary-item {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  font-size: 1.1rem;
}

.total {
  font-weight: bold;
  font-size: 1.2rem;
  color: #50653e;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.continue-shopping,
.checkout {
  background-color: #50653e;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.continue-shopping:hover,
.checkout:hover {
  background-color: #405331;
  transform: scale(1.05);
}

.shipping-form {
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.shipping-form h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type='text'],
input[type='tel'],
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .quantity-button {
    width: 25px;
  }
  .cart-item-details {
    display: block;
  }
}
</style>
