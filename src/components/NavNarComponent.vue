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
  height: var(--navbar-height);
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

nav a {
  color: var(--secondary);
  text-decoration: none;
  margin: 0 20px;
  font-size: 16px;
  font-weight: 700;
  position: relative;
  transition: color 0.3s ease;
}

nav a::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3px;
  height: 3px;
  background: linear-gradient(
    90deg,
    rgba(255, 0, 150, 0.7),
    rgba(0, 204, 255, 0.7)
  );
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

nav a:hover {
  color: var(--white);
}

nav a:hover::before {
  transform: scaleX(1);
}
nav .logo {
  font-size: 28px;
  font-weight: bold;
  color: var(--text);
}

nav .menu {
  display: flex;
  list-style: none;
  margin-bottom: 0;
}

.menu-toggle {
  display: none;
  user-select: none;
  color: var(--secondary);
}

.menu-toggle:hover {
  color: var(--white);
}

@media (max-width: 768px) {
  nav .menu {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(var(--navbar-height) - 5px);
    right: 0;
    background-color: var(--primary-color);
    width: 100%;
    text-align: center;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }

  nav .menu.open {
    max-height: 300px; /* 根據項目數量可調整 */
  }

  .menu-toggle {
    display: block;
    cursor: pointer;
    font-size: 24px;
  }
}
</style>
