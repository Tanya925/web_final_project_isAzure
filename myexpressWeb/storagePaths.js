// 主要功能：管理上傳圖片的儲存路徑，並確保 uploads 資料夾存在


import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 本機開發時，所有上傳圖片都固定存到專案內的 uploads 資料夾。
export function getUploadsDir() {
  return path.join(__dirname, 'uploads')
}

// 啟動時先確保 uploads 資料夾存在，避免第一次上傳圖片就失敗。
export function ensureUploadsDir() {
  const uploadsDir = getUploadsDir()

  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true })
  }

  return uploadsDir
}
