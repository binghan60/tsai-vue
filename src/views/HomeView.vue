<script>
import { RouterLink } from 'vue-router'
export default {
  components: { RouterLink },
}
</script>

<template>
  <div class="scroll">
    <div class="wraper section">
      <div class="container">
        <div class="logo">
          <div class="box">
            <img src="/img/logo.png" alt="" />
            <h1>蔡氏小農</h1>
            <p>農產品 | 果物</p>
          </div>
        </div>
      </div>
      <div class="spacer"></div>
      <div class="spacer"></div>
      <div class="main container">
        <h3>Since 2022</h3>
        <RouterLink to="productlist">
          <button type="button">立即購買</button>
        </RouterLink>
      </div>
      <div class="spacer"></div>
    </div>

    <div class="section">
      <div class="container">第二區</div>
    </div>
    <div class="section">
      <div class="container">第三區</div>
    </div>
    <div class="section">
      <div class="container">第四區</div>
    </div>
  </div>
</template>
<style scoped>
.scroll {
  height: calc(100vh - var(--navbar-height));
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}
.section {
  /* padding: 112px; */
  height: calc(100vh - var(--navbar-height));
  scroll-snap-align: start;
}
.wraper {
  width: 100%;
  height: calc(100vh - var(--navbar-height));
  background-image: url('/img/07f51b1cea86669fc9578201c74d3053.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: var(--text);
  display: flex;
  flex-direction: column;
  flex: 1;
}
.wraper .box {
  width: 150px;
  text-align: center;
  font-weight: 700;
  padding-top: var(--navbar-height);
  margin: 0 0 auto 0;
}
.box img {
  width: 100px;
  user-select: none;
}
.box h1 {
  font-size: 36px;
  user-select: none;
  color: white;
}
.box p {
  font-size: 20px;
  letter-spacing: 2px;
  user-select: none;
  color: white;
}
.logo {
  text-align: left;
}

.wraper h3 {
  font-size: 56px;
  font-weight: 900;
  margin-bottom: 25px;
  user-select: none;
}

.main {
  display: flex;
  justify-content: space-between;
  padding-bottom: 36px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.75);
}
.main h3 {
  font-size: 108px;
  text-decoration: none;
}
.main button {
  margin-top: 60px;
  display: flex;
  align-items: center;
  height: 56px;
  line-height: 56px;
  font-size: 24px;
  font-weight: 700;
  padding: 0px 60px;
  background-color: #211b1b00;
  border: 3px solid var(--white);
  color: var(--white);
  cursor: pointer;
  white-space: nowrap;
  transition: 0.5s;
  user-select: none;
}
.main button:hover {
  background-color: #fff;
  color: var(--primary-color);
  border: 3px solid var(--primary-color);
}
.spacer {
  flex: 1;
}
a {
  text-decoration: none;
}
/* 小螢幕 */
@media (max-width: 768px) {
  .wraper .box {
    margin: auto;
  }
  .main {
    display: block;
    text-align: center;
    width: 90%;
    border-bottom: 2px solid rgba(255, 255, 255, 0.75);
  }
  .main h3 {
    font-size: 56px;
  }
  .main button {
    margin: 0px auto;
    display: flex;
    align-items: center;
    height: 56px;
    line-height: 56px;
    font-size: 24px;
    font-weight: 700;
    padding: 0px 60px;
    background-color: #211b1b00;
    border: 3px solid var(--white);
    color: var(--white);
    cursor: pointer;
    white-space: nowrap;
  }
}
</style>