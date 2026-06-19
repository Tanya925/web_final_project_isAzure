// 主要功能：管理上傳圖片的儲存路徑，並確保 uploads 資料夾存在


import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function ensureDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

// Azure 部署時把上傳圖片寫到持久儲存；本機則維持專案內 uploads。
export function getUploadsDir() {
  const uploadRoot = process.env.UPLOADS_DIR || path.join(__dirname, 'uploads')
  ensureDirectory(uploadRoot)
  return uploadRoot
}

// 啟動時先確保 uploads 資料夾存在，避免第一次上傳圖片就失敗。
export function ensureUploadsDir() {
  return getUploadsDir()
}
