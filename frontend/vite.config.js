import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const UnoCSS = (await import('unocss/vite')).default
  return {
    base: './',
    plugins: [
      uni(),
      UnoCSS(),
    ],
  }
})
