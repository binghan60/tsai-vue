<script>
import { RouterLink } from 'vue-router'
export default {
  components: { RouterLink },
}
</script>

<template>
  <div class="flex flex-col h-screen min-h-full text-white bg-center bg-no-repeat bg-cover" style="background-image: url('/img/07f51b1cea86669fc9578201c74d3053.webp')">
    <div class="container flex flex-col h-full">
      <div class="flex flex-col items-center pt-10 text-center lg:flex-row lg:pl-10">
        <div class="mb-auto">
          <img src="/img/logo.png" alt="logo" class="w-24 mx-auto select-none" />
          <h1 class="text-3xl font-bold text-white select-none">蔡氏小農</h1>
          <p class="text-base tracking-widest select-none">農產品 | 果物</p>
        </div>
      </div>
      <div class="flex-1"></div>
      <div class="flex flex-col items-center text-center border-b-2 lg:flex-row lg:justify-between border-white/75 pb-9">
        <h3 class="mb-6 text-5xl font-extrabold select-none lg:text-8xl">Since 2022</h3>
        <RouterLink to="productlist">
          <button type="button" class="px-16 mt-6 text-lg font-bold text-white transition-all bg-transparent border-4 border-white select-none h-14 hover:bg-white hover:text-primary hover:border-primary">立即購買</button>
        </RouterLink>
      </div>
      <div class="flex-1"></div>
    </div>
  </div>
  <section class="flex items-center min-h-screen scroll-snap-start">
    <div class="container px-4 mx-auto">
      <div class="flex flex-col items-center row lg:flex-row lg:space-x-8">
        <div class="relative w-full mb-8 col about lg:w-1/2 lg:mb-0">
          <img src="/img/about.webp" alt="關於蔡氏小農" class="w-full object-cover h-[80%] lg:h-[400px] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
          <div class="absolute px-4 py-2 font-bold text-center transition-transform duration-300 rounded-lg shadow-md info-box bottom-4 right-4 bg-secondary text-primary hover:scale-110">
            <p>傳承與創新</p>
            <p>Inheritance and Innovation</p>
          </div>
        </div>
        <div class="w-full text-left col story lg:w-1/2">
          <h2 class="mb-6 text-4xl font-extrabold tracking-wider text-center text-primary lg:text-left">關於蔡氏小農</h2>
          <p class="py-2 pl-4 mb-4 text-lg leading-relaxed border-l-4 border-yellow-300 text-primary bg-yellow-50">
            在外工作近十年，每次返鄉見到父母逐漸蒼老，心中總是不捨。於是2023年，我決定結束都市生活，回到屏東創立
            <strong class="text-accent">「蔡氏小農」</strong>。
          </p>
          <p class="mb-4 text-lg leading-relaxed text-primary">其實，蔡家對土地的耕耘早在2013年由父母開始，他們專注栽培蜜棗，堅守品質，成就了蔡家的好口碑。</p>
          <p class="text-lg leading-relaxed text-primary">如今我承接這份信念，將「蔡氏蜜棗」的純正風味帶給顧客。蜜棗對我們來說，不僅是水果，更是對土地的承諾。</p>
        </div>
      </div>
    </div>
  </section>

  <section class="flex items-center min-h-screen bg-center bg-cover" style="background-image: url('/img/storyBG.webp')">
    <div class="container px-4 mx-auto text-center">
      <h2 class="mb-16 text-4xl font-extrabold text-white lg:text-6xl">走吧，我們回屏東吧</h2>
      <p class="mb-4 text-lg font-extrabold text-white lg:text-2xl">回家，是靈魂的歸宿。</p>
      <p class="mb-4 text-lg font-extrabold text-white lg:text-2xl">是心靈深處的洗滌與重生。</p>
      <p class="text-lg font-extrabold text-white lg:text-2xl">是一次精神的突破，一次全新的開始。</p>
    </div>
  </section>

  <section class="py-16">
    <div class="container mx-auto text-center">
      <!-- 標題 -->
      <h2 class="text-3xl font-bold text-[#4A6448] mb-8">對於果園的堅持</h2>
      <div class="grid grid-cols-2 gap-8 lg:grid-cols-4">
        <!-- 每一項 -->
        <div class="flex flex-col items-center">
          <div class="relative">
            <img src="/img/step1.webp" alt="自產自銷" class="object-cover w-40 h-40 rounded-lg" />
          </div>
          <h3 class="text-xl text-[#E8996B] font-semibold mt-4">自產自銷</h3>
          <p class="text-sm text-[#5A5A5A] mt-2">堅持品質的保證</p>
        </div>

        <div class="flex flex-col items-center">
          <div class="relative">
            <img src="/img/step2.webp" alt="使用有機肥灌溉" class="object-cover w-40 h-40 rounded-lg" />
          </div>
          <h3 class="text-xl text-[#E8996B] font-semibold mt-4">使用有機肥灌溉</h3>
          <p class="text-sm text-[#5A5A5A] mt-2">維持生態環境平衡</p>
        </div>

        <div class="flex flex-col items-center">
          <div class="relative">
            <img src="/img/step3.webp" alt="不使用化學除草劑" class="object-cover w-40 h-40 rounded-lg" />
          </div>
          <h3 class="text-xl text-[#E8996B] font-semibold mt-4">不使用化學除草劑</h3>
          <p class="text-sm text-[#5A5A5A] mt-2">減少對土地造成的污染</p>
        </div>

        <div class="flex flex-col items-center">
          <div class="relative">
            <img src="/img/step4.webp" alt="定量耕作" class="object-cover w-40 h-40 rounded-lg" />
          </div>
          <h3 class="text-xl text-[#E8996B] font-semibold mt-4">定量耕作</h3>
          <p class="text-sm text-[#5A5A5A] mt-2">不量產，守護每個作物</p>
        </div>
      </div>
    </div>
  </section>
  <div class="bg-[#5c7044] text-white py-10 px-6">
    <div class="max-w-6xl mx-auto">
      <h2 class="pb-2 mb-6 text-3xl font-bold border-b border-white md:text-4xl">來自里港的作物</h2>
      <div class="flex flex-col items-center gap-6 md:flex-row">
        <div class="relative flex-shrink-0 w-full md:w-1/2">
          <img src="/img/map.svg" alt="台灣地圖" class="w-full max-w-md mx-auto" />
          <img src="/img/marker.svg" alt="Location, map, pin, mark, navigation Icon" class="absolute top-[73%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 w-6 h-6" loading="lazy" />
        </div>
        <!-- 右側文字 -->
        <div class="text-lg md:w-1/2">
          <p class="leading-relaxed">
            相信大家常聽到的蜜棗大部分都來自高樹，但很多人應該不知道， 其實在<span class="text-[#f08632] font-bold">屏東里港</span>，也有一群正在為蜜棗努力開發的農夫， 加上屏東里港，
            <span class="font-bold">經緯度剛好</span>
            與高樹相似， 完美適合蜜棗的氣候變化。
          </p>
          <p class="mt-4 leading-relaxed">另外位於高屏溪、二重溪及養濕溪交會口，讓土壤滲濕加肥沃，讓里港的蜜棗更具特色。</p>
        </div>
      </div>
    </div>
  </div>
  <div class="h-screen min-h-[500px] bg-cover bg-center bg-no-repeat" style="background-image: url('/img/chartBG.webp')">
    <div class="container grid items-center h-full grid-cols-2 text-white">
      <div class="col-span-1">
        <p>我們的作物占比</p>
        <p>隨著產季及買家需求種類而有所變動</p>
      </div>
      <div class="grid grid-cols-2 col-span-1">
        <p>預約制蔬果</p>
        <p>部分蔬果產量不多，所以我們部分蔬果採取預約制。</p>
        <div class="col-span-1">食安的保護 第一線守護您的食安風險</div>
        <div class="col-span-1">售後的保障 到貨後如有損壞包退</div>
      </div>
    </div>
  </div>
</template>