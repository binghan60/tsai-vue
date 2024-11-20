<template>
  <!-- <div class="bg-primary">
    <div class="container"> -->
  <nav class="bg-primary text-white flex justify-between items-center p-3 lg:px-5 lg:py-1 shadow-md border-b border-border">
    <a @click="chagnePage('/')">
      <div class="logo h-10 cursor-pointer">
        <img class="h-full w-auto" src="/img/logo.png" alt="Logo" />
      </div>
    </a>
    <div class="lg:hidden" @click="toggleMenu">
      <span class="text-2xl">☰</span>
    </div>
    <ul :class="['lg:flex lg:space-x-6 lg:space-y-0 absolute lg:static top-16 right-0 w-full text-center lg:w-auto transition-all duration-100 ease-out lg:max-h-full max-h-0 overflow-hidden', { 'max-h-72': isMenuOpen }]">
      <li @click="chagnePage('/styleGuild')" class="cursor-pointer relative h-12 flex items-center justify-center bg-primary z-50">展示中心</li>
      <li @click="chagnePage('/productlist')" class="cursor-pointer relative h-12 flex items-center justify-center bg-primary z-50">商品列表</li>
      <li @click="chagnePage('/cart')" class="cursor-pointer relative h-12 flex items-center justify-center bg-primary z-50">購物車</li>
      <li @click="chagnePage('/member')" class="cursor-pointer relative h-12 flex items-center justify-center bg-primary z-50">會員中心</li>
    </ul>
  </nav>
  <!-- </div>
  </div> -->
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
    chagnePage(path) {
      this.$router.push(path)
      this.isMenuOpen = false
    },
  },
}
</script>