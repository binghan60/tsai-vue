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
          </div>
          <div class="col story">
            <h2>關於蔡氏小農</h2>
            <p>一位28歲返鄉的青農。在外打拼近十年，生活穩定，但每次返鄉探望父母，看到他們漸漸蒼老的模樣，心中總是不捨。於是在2023年，我決定結束北漂生活，回到屏東，建立了<strong>「蔡氏小農」</strong>。</p>
            <p>其實，蔡家對土地的耕耘早在2013年便由我的父母開始，他們用心栽培蜜棗，深耕技藝，也種下了蔡家對品質的堅持。</p>
            <p>如今，我承接這份技術與信念，致力於將「蔡氏蜜棗」的純正滋味帶給每一位顧客。對我們來說，蜜棗不僅是水果，更是連結土地與初心的故事。</p>
          </div>
        </div>
      </div>
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
.section .row {
  display: flex;
  align-items: center;
  height: calc(100vh - var(--navbar-height));
}
.section .col {
  width: 50%;
}
.about {
  height: 80%;
}
.about img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
  clip-path: polygon(15% 5%, 85% 5%, 100% 25%, 85% 92%, 0% 95%, 1% 52%);
  transition: transform 0.3s;
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
  color: #333;
  letter-spacing: 2px;
}

.story p {
  font-size: 20px;
  line-height: 1.8rem;
  letter-spacing: 1px;
  color: #555;
  text-align: justify;
  margin-bottom: 20px;
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
}
</style>