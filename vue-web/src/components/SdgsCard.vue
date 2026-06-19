<!--
檔案說明：SdgsCard.vue - 單一 SDG 卡牌元件，負責顯示編號、標題與說明，並處理卡牌的翻轉互動（點擊翻面）。
-->


<script setup>
import { ref } from 'vue'  // 匯入 ref 函式來萊娣應會變動的資料(因為這個元件需要記錄：目前是正面還是背面)
import { getGoalDetail, getGoalIconCandidates, getGoalPhoto, getGoalTint } from '../data/sdgMedia'

// 代表父元件會傳進來：sdg。例如
// 例如：
// {
//   number: 12,
//   title: "責任消費與生產",
//   englishTitle: "Responsible Consumption and Production",
//   description: "減少浪費..."
// }

// 為什麼要 defineProps？因為：17張卡牌內容都不一樣，所以卡牌元件要能接收不同 SDG 資料
const props = defineProps({
  sdg: {
    type: Object,
    required: true,
  },
})

const isFlipped = ref(false)  // 用來記錄目前卡牌是正面還是背面，初始為 false（代表正面）。當使用者點擊卡牌時，會切換這個值，讓卡牌翻轉。

const titleParts = props.sdg.title.split('\n')
const chineseTitle = titleParts[0] || props.sdg.title
const englishTitle = titleParts[1] || ''
const goalPhoto = getGoalPhoto(props.sdg.number)
const goalIconCandidates = getGoalIconCandidates(props.sdg.number)
const goalIconIndex = ref(0)
const goalDescription = getGoalDetail(props.sdg.number, props.sdg.description)
const goalTint = getGoalTint(props.sdg.number)
const backFaceStyle = {
  background: `linear-gradient(180deg, ${goalTint.light}, #ffffff)`,
  borderColor: `${goalTint.base}33`,
}

function handleIconError() {
  if (goalIconIndex.value < goalIconCandidates.length - 1) {
    goalIconIndex.value += 1
  }
}


// 切換卡牌正反面。
function flipCard() {
  isFlipped.value = !isFlipped.value
}
</script>

<template>
  <button class="card-shell" :class="{ flipped: isFlipped }" @click="flipCard">
    <div class="card-face front">
      <img
        v-if="goalPhoto"
        :src="goalPhoto"
        :alt="`${chineseTitle} 對應照片`"
        class="front-photo"
      />
      <div class="front-overlay"></div>
      <div class="card-top">
        <span class="number-badge">SDG {{ sdg.number }}</span>
        <span class="mini-text">Click to flip</span>
      </div>
      <div class="card-main">
        <h3 class="chinese-title">{{ chineseTitle }}</h3>
        <p class="english-title">{{ englishTitle }}</p>
      </div>
      <p class="card-tip">點擊卡牌查看詳細介紹</p>
    </div>

    <div class="card-face back" :style="backFaceStyle">
      <span class="label">Goal Introduction</span>
      <div class="back-content">
        <img
          v-if="goalIconCandidates.length"
          :src="goalIconCandidates[goalIconIndex]"
          :alt="`${chineseTitle} 官方圖示`"
          class="goal-icon"
          @error="handleIconError"
        />
        <p class="description-text">{{ goalDescription }}</p>
      </div>
    </div>
  </button>
</template>

<style scoped>
.card-shell {
  position: relative;
  /* 卡牌高度再拉高，讓背面較長的介紹也能完整顯示。 */
  min-height: 560px;
  border: 0;
  background: transparent;
  cursor: pointer;
  perspective: 1000px;
}

.card-face {
  position: absolute;
  inset: 0;
  padding: 28px;
  border-radius: 28px;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.7s ease;
  box-shadow: 0 22px 40px rgba(40, 48, 66, 0.14);
  overflow: hidden;
}

.front {
  background: linear-gradient(155deg, #2a7d65, #174f46 54%, #17342d 100%);
  color: #fff;
}

.back {
  color: #17342d;
  border: 1px solid rgba(123, 117, 146, 0.24);
  transform: rotateY(180deg);
  justify-content: flex-start;
  gap: 20px;
}

.card-top {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.card-main {
  position: relative;
  z-index: 2;
  display: grid;
  gap: 10px;
  margin-top: auto;
}

.number-badge {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(240, 234, 249, 0.18);
  border: 1px solid rgba(229, 223, 242, 0.26);
  font-size: 0.86rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.mini-text,
.label {
  font-size: 0.84rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.78;
}

.label {
  align-self: center;
  margin-top: 8px;
}

.front-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.front-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(7, 15, 20, 0.18) 0%, rgba(7, 15, 20, 0.42) 48%, rgba(7, 15, 20, 0.82) 100%);
}

.chinese-title {
  margin: 0;
  font-size: 2rem;
  line-height: 1.2;
}

.english-title {
  position: relative;
  z-index: 2;
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.92;
}

p {
  margin: 0;
  line-height: 1.7;
}

.card-tip {
  position: relative;
  z-index: 2;
  opacity: 0.88;
}

.back-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  text-align: center;
  padding-top: 12px;
}

.goal-icon {
  width: 100%;
  max-width: 190px;
  border-radius: 20px;
  box-shadow: 0 12px 26px rgba(23, 52, 45, 0.18);
}

.description-text {
  color: #17342d;
  max-width: 24ch;
  font-size: 1rem;
  line-height: 1.9;
  letter-spacing: 0.01em;
}

.flipped .front {
  transform: rotateY(180deg);
}

.flipped .back {
  transform: rotateY(360deg);
}
</style>
