把 SDG 卡牌背面圖片放在這個資料夾。

建議使用 `png`，檔名請固定用下面格式：

- `sdg-01.png`
- `sdg-02.png`
- `sdg-03.png`
- `sdg-04.png`
- `sdg-05.png`
- `sdg-06.png`
- `sdg-07.png`
- `sdg-08.png`
- `sdg-09.png`
- `sdg-10.png`
- `sdg-11.png`
- `sdg-12.png`
- `sdg-13.png`
- `sdg-14.png`
- `sdg-15.png`
- `sdg-16.png`
- `sdg-17.png`

原因：

- `vue-web/public` 裡的檔案會在 Vite build 後原樣保留
- Azure 部署後可以直接用 `/images/sdgs/back/...` 存取
- 使用自己的圖片比外部網址穩定，不容易失效

如果你之後真的想改成 `jpg` 或其他命名方式，也可以再請我一起改程式路徑。
