import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            Components: path.join(__dirname, './src/components'),
            Apis: path.join(__dirname, './src/apis'),
            AppContainer: path.join(__dirname, './src/containers'),
            Utils: path.join(__dirname, './src/utils')
        }
    }
})

