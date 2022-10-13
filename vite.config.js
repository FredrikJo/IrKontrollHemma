import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { viteSingleFile } from "vite-plugin-singlefile"
//import adapter from '@sveltejs/adapter-static';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), viteSingleFile()]
})
