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
      <div class="container">
        <div class="row">
          <div class="col about">
            <img src="/img/about.webp" alt="" />
            <div class="info-box">
              <p>傳承與創新</p>
              <p>Inheritance and ​Innovation</p>
            </div>
          </div>
          <div class="col story">
            <h2>關於蔡氏小農</h2>
            <p>在外工作近十年，每次返鄉見到父母逐漸蒼老，心中總是不捨。於是2023年，我決定結束都市生活，回到屏東創立<strong>「蔡氏小農」</strong>。</p>
            <p>其實，蔡家對土地的耕耘早在2013年由父母開始，他們專注栽培蜜棗，堅守品質，成就了蔡家的好口碑。</p>
            <p>如今我承接這份信念，將「蔡氏蜜棗」的純正風味帶給顧客。蜜棗對我們來說，不僅是水果，更是對土地的承諾。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section home">
      <div class="container">
        <h2>走吧，我們回屏東吧</h2>
        <p>回家，是靈魂的歸宿。</p>
        <p>是心靈深處的洗滌與重生。</p>
        <p>是一次精神的突破，一次全新的開始。</p>
      </div>
    </div>
    <div class="section">
      <div class="container">第四區</div>
    </div>
  </div>
</template>
<style scoped>
.home {
  background: url(/img/storyBG.webp);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
}
.home .container {
  text-align: center;
  align-items: center;
}
.home h2 {
  font-size: 56px;
  color: #f4f4f4;
  font-weight: 900;
  margin-bottom: 100px;
}

.home p {
  font-size: 30px;
  color: #f4f4f4;
  font-weight: 900;
  height: 50px;
}

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
.section .row {
  display: flex;
  align-items: center;
  height: calc(100vh - var(--navbar-height));
}
.section .col {
  width: 50%;
}
.about {
  position: relative; /* 設為相對定位，方便內部元素絕對定位 */
  height: 80%;
}

.about img {
  width: 100%;
  object-fit: cover;
  height: 100%;
  margin: auto;
  clip-path: polygon(15% 5%, 85% 5%, 100% 25%, 85% 92%, 0% 95%, 1% 52%);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}

.info-box {
  width: 300px;
  height: 100px;
  position: absolute;
  text-align: center;
  bottom: 10px; /* 距離底部 10px */
  right: 10px; /* 距離右側 10px */
  background-color: var(--secondary-color);
  color: var(--primary-color); /* 文字顏色 */
  padding: 10px 15px;
  border-radius: 8px; /* 圓角 */
  font-size: 24px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* 陰影效果 */
  transition: transform 0.3s;
}

.info-box:hover {
  transform: scale(1.1); /* 懸停時稍微放大 */
}

.about img:hover {
  transform: scale(1.05); /* 滑鼠懸停時圖片稍微放大 */
}
.story {
  padding: 50px;
}

.story h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 40px;
  color: var(--primary-color);
  letter-spacing: 2px;
}

.story p {
  font-size: 20px;
  line-height: 1.8rem;
  letter-spacing: 1px;
  color: var(--primary-color);
  text-align: justify;
  margin-bottom: 10px;
}

.story strong {
  color: #0a84ff; /* 強調的文字顏色 */
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
  .home h2 {
    font-size: 36px;
    color: #f4f4f4;
    font-weight: 900;
    margin-bottom: 100px;
  }

  .home p {
    font-size: 20px;
    color: #f4f4f4;
    font-weight: 900;
    height: 50px;
  }
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
  .section .row {
    flex-direction: column; /* 手機端改為上下排列 */
    height: auto;
  }

  .section .col {
    width: 100%;
    padding: 10px;
  }

  .story h2 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  .story p {
    font-size: 18px;
    line-height: 1.6rem;
  }

  .info-box {
    width: 200px;
    height: 75px;
    /* line-height: 70px; */
    font-size: 16px;
  }
}
</style>