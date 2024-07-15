import * as path from 'node:path'
import { defineConfig } from 'vite'
import VueRouter from 'unplugin-vue-router/vite'
import Vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    VueRouter(),
    Vue(),
    VueDevTools(),
    Components({
      dts: true
    }),
    AutoImport({
      imports: ['vue', 'pinia'],
      dirs: ['src/stores'],
      dts: true,
      vueTemplate: true,
    }),
  ],
})
