<template>
  <div class="container">
    <div class="grid grid-cols-12 gap-4 p-5">
      <div class="col-span-12 text-center">
        Logo
        <img class="h-16 mx-auto lg:h-24 w-100" src="/img/logo.png" alt="" />
      </div>
      <div class="col-span-12 text-center">Colors</div>
      <div class="col-span-4 m-auto lg:col-span-2">
        <div class="w-16 h-16 m-auto rounded-full bg-primary lg:w-20 lg:h-20"></div>
        <div class="m-auto text-center cursor-pointer">#50653e</div>
      </div>
      <div class="col-span-4 m-auto lg:col-span-2">
        <div class="w-16 h-16 m-auto rounded-full bg-secondary lg:w-20 lg:h-20"></div>
        <div class="m-auto text-center cursor-pointer">#a8d08d</div>
      </div>
      <div class="col-span-4 m-auto lg:col-span-2">
        <div class="w-16 h-16 m-auto rounded-full bg-accent1 lg:w-20 lg:h-20"></div>
        <div class="m-auto text-center cursor-pointer">#d1e058</div>
      </div>
      <div class="col-span-4 m-auto lg:col-span-2">
        <div class="w-16 h-16 m-auto rounded-full bg-accent2 lg:w-20 lg:h-20"></div>
        <div class="m-auto text-center cursor-pointer">#f1a33e</div>
      </div>
      <div class="col-span-4 m-auto lg:col-span-2">
        <div class="w-16 h-16 m-auto rounded-full bg-border lg:w-20 lg:h-20"></div>
        <div class="m-auto text-center cursor-pointer">#d3d3d3</div>
      </div>
      <div class="col-span-4 m-auto lg:col-span-2">
        <div class="w-10 h-10 m-auto rounded-full lg:w-20 lg:h-20"></div>
        <div class="m-auto text-center cursor-pointer"></div>
      </div>
      <div class="col-span-12 text-center">按鈕</div>
      <div class="col-span-6">
        <button class="w-full h-10 rounded-full bg-accent2 text-darkText" type="button">按鈕1</button>
      </div>
      <div class="col-span-6">
        <button class="w-full h-10 rounded-full bg-accent1 text-darkText" type="button">按鈕2</button>
      </div>
      <div class="col-span-12 text-center">提示</div>
      <div class="col-span-6 p-4 mt-1 text-center rounded-lg bg-success text-darkText">成功提示訊息</div>
      <div class="col-span-6 p-4 mt-1 text-center rounded-lg bg-error text-darkText">錯誤提示訊息</div>
      <div class="col-span-12 text-center">邊框</div>
      <div class="col-span-12 p-4 mt-1 text-center border-2 rounded-lg text-darkText border-border">邊框展示</div>
      <div class="col-span-12 text-center">文字顏色</div>
      <div class="col-span-6 text-center text-darkText">深色文字</div>
      <div class="col-span-6 text-center text-lightText">淺色文字</div>
      <div class="col-span-12 text-center">標題</div>
      <div class="col-span-12">
        <h1 class="text-4xl">這是一段標題</h1>
      </div>
      <div class="col-span-12">
        <h2 class="text-3xl">這是一段標題</h2>
      </div>
      <div class="col-span-12">
        <h3 class="text-2xl">這是一段標題</h3>
      </div>
      <div class="col-span-12">
        <h4 class="text-xl">這是一段標題</h4>
      </div>
      <div class="col-span-12">
        <h5 class="text-lg">這是一段標題</h5>
      </div>
      <div class="col-span-12">
        <h6 class="text-base">這是一段標題</h6>
      </div>
    </div>
  </div>
</template>