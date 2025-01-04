import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import env from "vite-plugin-env-compatible";

export default defineConfig({
  plugins: [react(),
              env({ prefix: "VITE",  mountedPath: "process.env" })],
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: "import { jsx } from '@emotion/react'",
  }
  // define: { 'process.env.NODE_ENV': '"production"' }, // ←削除
})
