<template>
  <div class="container">
    <div class="grid grid-cols-12 gap-4 p-5">
      <div class="col-span-12 text-center">
        Logo
        <img class="h-16 lg:h-24 mx-auto w-100" src="/img/logo.png" alt="" />
      </div>
      <div class="col-span-12 text-center">Colors</div>
      <div class="col-span-4 lg:col-span-2 m-auto">
        <div class="bg-primary w-10 lg:w-20 h-10 lg:h-20 rounded-full m-auto"></div>
        <div class="text-center m-auto">#50653e</div>
      </div>
      <div class="col-span-4 lg:col-span-2 m-auto">
        <div class="bg-secondary w-10 lg:w-20 h-10 lg:h-20 rounded-full m-auto"></div>
        <div class="text-center m-auto">#a8d08d</div>
      </div>
      <div class="col-span-4 lg:col-span-2 m-auto">
        <div class="bg-accent1 w-10 lg:w-20 h-10 lg:h-20 rounded-full m-auto"></div>
        <div class="text-center m-auto">#d1e058</div>
      </div>
      <div class="col-span-4 lg:col-span-2 m-auto">
        <div class="bg-accent2 w-10 lg:w-20 h-10 lg:h-20 rounded-full m-auto"></div>
        <div class="text-center m-auto">#f1a33e</div>
      </div>
      <div class="col-span-4 lg:col-span-2 m-auto">
        <div class="bg-border w-10 lg:w-20 h-10 lg:h-20 rounded-full m-auto"></div>
        <div class="text-center m-auto">#d3d3d3</div>
      </div>
      <div class="col-span-4 lg:col-span-2 m-auto">
        <div class="w-10 lg:w-20 h-10 lg:h-20 rounded-full m-auto"></div>
        <div class="text-center m-auto"></div>
      </div>
      <div class="col-span-12 text-center">按鈕</div>
      <div class="col-span-6">
        <button class="bg-accent2 h-10 w-full rounded-full text-darkText" type="button">按鈕1</button>
      </div>
      <div class="col-span-6">
        <button class="bg-accent1 h-10 w-full rounded-full text-darkText" type="button">按鈕2</button>
      </div>
      <div class="col-span-12 text-center">提示</div>
      <div class="col-span-6 text-center mt-1 p-4 bg-success rounded-lg text-darkText">成功提示訊息</div>
      <div class="col-span-6 text-center mt-1 p-4 bg-error rounded-lg text-darkText">錯誤提示訊息</div>
      <div class="col-span-12 text-center">邊框</div>
      <div class="col-span-12 text-center mt-1 p-4 rounded-lg text-darkText border-2 border-border">邊框展示</div>
      <div class="col-span-12 text-center">文字顏色</div>
      <div class="col-span-6 text-center text-darkText">深色文字</div>
      <div class="col-span-6 text-center text-lightText">淺色文字</div>
      <div class="col-span-12 text-center">標題</div>
      <div class="col-span-12 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">標題1</div>
      <div class="col-span-12 text-center">標題2</div>
    </div>
  </div>
</template>