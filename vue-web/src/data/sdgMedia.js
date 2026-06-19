// 主要功能：SDG 圖片與資料對照表

// 這裡使用了 LoremFlickr 來提供 SDG 相關的圖片，並且根據 SDG 的編號對應到不同的主題關鍵字，確保每個目標都有獨特的圖片。這些圖片會在前端顯示，讓使用者更直觀地了解每個 SDG 的內容。
const goalPhotoMap = {
  1: 'https://loremflickr.com/800/600/poverty,slum?lock=1',
  2: 'https://loremflickr.com/800/600/hunger,food,farm?lock=2',
  3: 'https://loremflickr.com/800/600/health,hospital,doctor?lock=3',
  4: 'https://loremflickr.com/800/600/education,classroom,school?lock=4',
  5: 'https://loremflickr.com/800/600/women,leadership,equality?lock=5',
  6: 'https://loremflickr.com/800/600/water,sanitation,clean?lock=6',
  7: 'https://loremflickr.com/800/600/solar,energy,renewable?lock=7',
  8: 'https://loremflickr.com/800/600/work,career,industry?lock=8',
  9: 'https://loremflickr.com/800/600/bridge,technology,infrastructure?lock=9',
  10: 'https://loremflickr.com/800/600/diversity,inclusion,community?lock=10',
  11: 'https://loremflickr.com/800/600/city,public-transport,urban?lock=11',
  12: 'https://loremflickr.com/800/600/recycling,sustainable,consumption?lock=12',
  13: 'https://loremflickr.com/800/600/climate,forest,environment?lock=13',
  14: 'https://loremflickr.com/800/600/ocean,coral,marine?lock=14',
  15: 'https://loremflickr.com/800/600/forest,wildlife,biodiversity?lock=15',
  16: 'https://loremflickr.com/800/600/justice,peace,court?lock=16',
  17: 'https://loremflickr.com/800/600/partnership,teamwork,meeting?lock=17',
}

// 每個 SDG 都有一組對應的顏色，包含 base 色和 light 色，這些顏色可以用在前端的設計上，例如背景色、按鈕色等，讓整體風格更統一且具有識別性。
const goalTintMap = {
  1: { base: '#E5243B', light: '#FCE5E8' },
  2: { base: '#DDA63A', light: '#FAF1DE' },
  3: { base: '#4C9F38', light: '#E6F4E1' },
  4: { base: '#C5192D', light: '#F8E1E6' },
  5: { base: '#FF3A21', light: '#FFE7E3' },
  6: { base: '#26BDE2', light: '#E3F7FC' },
  7: { base: '#FCC30B', light: '#FFF6D9' },
  8: { base: '#A21942', light: '#F3E1E8' },
  9: { base: '#FD6925', light: '#FEEADF' },
  10: { base: '#DD1367', light: '#FBE2EC' },
  11: { base: '#FD9D24', light: '#FEF0DF' },
  12: { base: '#BF8B2E', light: '#F5EDDE' },
  13: { base: '#3F7E44', light: '#E5F0E6' },
  14: { base: '#0A97D9', light: '#E0F2FB' },
  15: { base: '#56C02B', light: '#E8F7E0' },
  16: { base: '#00689D', light: '#DDEEF6' },
  17: { base: '#19486A', light: '#E1EAF0' },
}


// 每個 SDG 都有一組對應的圖示候選清單，這些圖示來自 Wikimedia Commons，都是官方的 SDG 圖示，可以在前端根據需要選擇使用，確保視覺上的一致性和專業感。
const goalIconCandidatesMap = {
  1: [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_01NoPoverty.svg',
  ],
  2: [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_02ZeroHunger.svg',
  ],
  3: [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_03GoodHealthWellBeing.svg',
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_03GoodHealth.svg',
  ],
  4: [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_04QualityEducation.svg',
  ],
  5: [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_05GenderEquality.svg',
  ],
  6: [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_06CleanWaterSanitation.svg',
  ],
  7: [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_07AffordableCleanEnergy.svg',
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_07CleanEnergy.svg',
  ],
  8: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Sustainable_Development_Goal_08DecentWork.svg/330px-Sustainable_Development_Goal_08DecentWork.svg.png',
  ],
  9: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sustainable_Development_Goal_09Industry.svg/330px-Sustainable_Development_Goal_09Industry.svg.png',
  ],
  10: [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_10ReducedInequalities.svg',
  ],
  11: [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_11SustainableCities.svg',
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_11SustainableCitiesCommunities.svg',
  ],
  12: [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_12ResponsibleConsumption.svg',
  ],
  13: [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Sustainable_Development_Goal_13Climate.svg/330px-Sustainable_Development_Goal_13Climate.svg.png',
  ],
  14: [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_14LifeBelowWater.svg',
  ],
  15: [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_15LifeOnLand.svg',
  ],
  16: [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_16PeaceJusticeInstitutions.svg',
  ],
  17: [
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_17PartnershipsForTheGoals.svg',
    'https://commons.wikimedia.org/wiki/Special:FilePath/Sustainable_Development_Goal_17Partnerships.svg',
  ],
}

// 每個 SDG 都有一段對應的詳細說明，這些說明可以在前端的 SDG 詳細頁面顯示，讓使用者更深入地了解每個目標的內容和重要性。這些說明是根據聯合國官方對 SDG 的定義和解釋整理而來的，確保資訊的準確性和權威性。
const goalDetailMap = {
  1: '消除貧窮不只是減少收入不足的人數，也包括讓每個人都能獲得基本生活保障、教育、醫療與工作機會，降低世代貧窮持續發生的風險。',
  2: '消除飢餓強調每個人都應該穩定取得安全、足夠且有營養的食物，同時支持永續農業、改善糧食分配，避免因貧困或災害造成長期營養不良。',
  3: '良好健康與福祉希望所有年齡層都能享有健康生活，重點包含疾病預防、心理健康、母嬰照護、醫療可近性，以及建立更安全的生活環境。',
  4: '優質教育的核心是提供公平、包容且高品質的學習機會，讓不同背景的人都能培養知識、技能與終身學習能力，提升未來發展的可能性。',
  5: '性別平等不只是消除歧視，更要讓所有人都能在教育、工作、政治與家庭中享有平等權利、尊重與安全，發揮自己的能力與影響力。',
  6: '潔淨水與衛生關注安全飲水、衛生設施與水資源管理，目標是讓每個人都能擁有乾淨用水與健康生活環境，同時減少污染與浪費。',
  7: '可負擔的潔淨能源希望更多人能使用穩定、安全且價格合理的能源，並提高再生能源比例，降低對環境的衝擊，推動更永續的發展模式。',
  8: '合適的工作及經濟成長強調包容性的經濟發展，讓人們擁有安全、有尊嚴且具保障的工作機會，同時提升生產力並減少剝削與失業問題。',
  9: '產業創新與基礎建設重視韌性基礎設施、科技創新與產業升級，透過更有效率與更永續的技術，帶動社會進步與長期經濟發展。',
  10: '減少不平等希望縮小不同族群在收入、資源、機會與社會參與上的落差，建立更包容的制度，讓每個人都能被公平對待並擁有發展機會。',
  11: '永續城鄉致力於打造安全、韌性且宜居的城市與社區，包括可負擔住宅、便利交通、公共空間、防災能力與更友善的生活環境。',
  12: '責任消費與生產鼓勵節約資源、減少浪費、提升回收再利用效率，並在生產與消費過程中兼顧環境與社會責任，建立更永續的生活方式。',
  13: '氣候行動呼籲全球積極面對氣候變遷，透過減碳、節能、調適與教育行動，降低極端天氣與環境衝擊對人類與生態造成的風險。',
  14: '水下生命關注海洋與水域生態保護，包括減少污染、避免過度捕撈、維護海洋多樣性，讓海洋資源能持續支持人類與自然共存。',
  15: '陸域生命聚焦森林、土地、生物多樣性與自然棲地保育，目標是減少環境破壞、恢復退化生態，讓陸地生態系統能健康延續。',
  16: '和平正義與健全制度強調法治、公平、透明與安全，期望減少暴力與腐敗，保障人權，並建立能讓人民信任與參與的公共制度。',
  17: '促進目標實現的夥伴關係代表各國、企業、學校與社會組織需要合作共享資源、知識與技術，才能一起推動永續發展目標真正落地。',
}

// 這裡定義了一些函式，讓前端可以根據 SDG 的編號來取得對應的圖片、圖示候選清單、詳細說明和顏色。這樣前端在渲染 SDG 相關的內容時，就可以直接呼叫這些函式來獲取需要的資料，確保資料的一致性和維護的便利性。
export function getGoalPhoto(goalNumber) {
  return goalPhotoMap[goalNumber] || ''
}

export function getGoalIconCandidates(goalNumber) {
  return goalIconCandidatesMap[goalNumber] || []
}

export function getGoalDetail(goalNumber, fallbackDescription = '') {
  return goalDetailMap[goalNumber] || fallbackDescription
}

export function getGoalTint(goalNumber) {
  return goalTintMap[goalNumber] || { base: '#5f667b', light: '#eef2f3' }
}
