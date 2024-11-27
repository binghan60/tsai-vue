<template>
  <!-- <div class="bg-primary">
    <div class="container"> -->
  <nav class="flex items-center justify-between p-3 text-white border-b shadow-md bg-primary lg:px-5 lg:py-1 border-border">
    <a @click="chagnePage('/')">
      <div class="h-10 cursor-pointer">
        <img class="w-auto h-full" src="/img/logo.png" alt="Logo" />
      </div>
    </a>
    <div class="lg:hidden" @click="toggleMenu">
      <span class="text-2xl">☰</span>
    </div>
    <ul :class="['lg:flex lg:space-x-6 lg:space-y-0 absolute lg:static top-16 right-0 w-full text-center lg:w-auto transition-all duration-100 ease-out lg:max-h-full max-h-0 overflow-hidden', { 'max-h-72': isMenuOpen }]">
      <li @click="chagnePage('/styleGuild')" class="relative z-50 flex items-center justify-center h-12 cursor-pointer bg-primary">展示中心</li>
      <li @click="chagnePage('/productlist')" class="relative z-50 flex items-center justify-center h-12 cursor-pointer bg-primary">商品列表</li>
      <li @click="chagnePage('/cart')" class="relative z-50 flex items-center justify-center h-12 cursor-pointer bg-primary">購物車</li>
      <li @click="chagnePage('/member')" class="relative z-50 flex items-center justify-center h-12 cursor-pointer bg-primary">會員中心</li>
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