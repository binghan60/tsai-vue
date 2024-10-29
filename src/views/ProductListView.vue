<template>
  <div class="productlist">
    <div class="container">
      <div class="title">
        <h2>找新鮮嗎? <span class="line-break">來棗我們吧</span></h2>
        <div>
          <img src="/img/Hi.svg" alt="" />
        </div>
      </div>
      <div class="product-container">
        <div v-for="item in productlist" :key="item.id" class="product-card">
          <span class="product-category">{{ item.category }}</span>
          <!-- 新增標籤 -->
          <img :src="item.imageUrl" class="product-image" alt="商品照片" />
          <div class="product-info">
            <h5 class="product-title">{{ item.title }}</h5>
            <div class="product-price">{{ item.price }} 元/{{ item.unit }}</div>
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

<script>
export default {
  data() {
    return {
      productlist: [],
    }
  },
  methods: {
    async getProduct() {
      try {
        const response = await fetch(`https://vue3-course-api.hexschool.io/v2/api/binghank/products`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json; charset=utf-8 ',
          },
        })
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`)
        }
        const data = await response.json()
        return data
      } catch (error) {
        alert('伺服器忙碌中，請稍後再試。')
        console.error('GetStoreList', error)
        throw error
      }
    },
  },
  async mounted() {
    const productData = await this.getProduct()
    this.productlist = productData.products
  },
}
</script>

<style scoped>
.line-break {
  display: inline;
}
.productlist {
  background-color: #f5e1c9;
  min-height: calc(100vh - var(--navbar-height));
}
.title {
  padding: 30px 0;
  display: flex;
  align-items: center;
}
h2 {
  margin: 0;
  font-size: 64px;
  font-weight: 700;
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
  padding: 20px;
}

.product-card {
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  position: relative; /* 用於定位標籤 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.product-category {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: var(--primary-color);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
}

.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.product-info {
  text-align: center;
  margin-top: 15px;
}

.product-title {
  color: #50653e;
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.product-price {
  font-size: 1.1rem;
  color: #333;
  font-weight: bold;
  margin-bottom: 10px;
}

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
  transition: background-color 0.3s ease;
}

.quantity-button:hover {
  background-color: #3e4f2d;
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

.add-to-cart {
  background-color: #50653e;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.add-to-cart:hover {
  background-color: #3e4f2d;
  transform: scale(1.05);
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
    font-size: 32px;
  }

  .title img {
    width: 75px;
  }
}
</style>
