把 SDG 卡牌正面圖片放在這個資料夾。

檔名請固定用下面格式：

- `sdg-01.jpg`
- `sdg-02.jpg`
- `sdg-03.jpg`
- `sdg-04.jpg`
- `sdg-05.jpg`
- `sdg-06.jpg`
- `sdg-07.jpg`
- `sdg-08.jpg`
- `sdg-09.jpg`
- `sdg-10.jpg`
- `sdg-11.jpg`
- `sdg-12.jpg`
- `sdg-13.jpg`
- `sdg-14.jpg`
- `sdg-15.jpg`
- `sdg-16.jpg`
- `sdg-17.jpg`

原因：

- `vue-web/public` 裡的檔案會在 Vite build 後原樣保留
- Azure 部署後可以直接用 `/images/sdgs/front/...` 存取
- 這樣不需要依賴外部圖片網站，最穩定
