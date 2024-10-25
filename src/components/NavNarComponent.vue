<template>
  <nav>
    <div class="logo"></div>
    <div class="menu-toggle" @click="toggleMenu">☰</div>
    <ul :class="['menu', { open: isMenuOpen }]">
      <li><a href="#">首頁</a></li>
      <li><a href="#">品牌介紹</a></li>
      <li><a href="#">商品列表</a></li>
      <li><a href="#">聯絡我們</a></li>
    </ul>
  </nav>
</template>
  
  <script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>
  
<style scoped>
nav {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: var(--text);
  border-bottom: 1px solid #6b8456;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
}

nav a {
  color: var(--secondary);
  text-decoration: none;
  margin: 0 20px;
  font-size: 16px;
  font-weight: 700;
}
nav a:hover {
  color: var(--white);
}

nav .logo {
  font-size: 28px;
  font-weight: bold;
  color: var(--text);
}

nav .menu {
  display: flex;
  list-style: none;
}

.menu-toggle {
  display: none;
}

@media (max-width: 768px) {
  nav .menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: var(--primary-color);
    width: 100%;
    text-align: center;
  }

  nav .menu.open {
    display: flex;
  }

  .menu-toggle {
    display: block;
    cursor: pointer;
    font-size: 24px;
  }
}
</style>
  