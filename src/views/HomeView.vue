<script>
import NavNarComponent from '@/components/NavNarComponent.vue'

export default {
  components: { NavNarComponent },
}
</script>

<template>
  <NavNarComponent></NavNarComponent>
  <div class="wraper">
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
  </div>
</template>
<style scoped>
.wraper {
  width: 100%;
  height: calc(100vh - 60px);
  background-image: url('/img/07f51b1cea86669fc9578201c74d3053.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: var(--text);
  display: flex;
  flex-direction: column;
}
.wraper .box {
  width: 150px;
  text-align: center;
  font-weight: 700;
  padding-top: 50px;
  margin: 0 0 auto 0;
}
.box img {
  width: 100px;
}
.box h1 {
  font-size: 36px;
}
.box p {
  font-size: 20px;
  letter-spacing: 2px;
}
.logo {
  text-align: left;
}

.main button {
  font-size: 30px;
  font-weight: 700;
  padding: 5px 50px;
  background-color: #ffffff00;
  border: 3px solid var(--secondary-color);
  color: var(--secondary-color);
  cursor: pointer;
  white-space: nowrap;
}
.spacer {
  flex: 1;
}

@media (max-width: 768px) {
  .wraper .box {
    margin: auto;
  }
}
</style>