import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './src', // ✅ Убедись, что путь относительный
    plugins: [
        react({
            babel: {
                plugins: ['babel-plugin-styled-components'],
            },
        }),
    ],
    build: {
        outDir: 'dist',
        sourcemap: true, // ✅ Включи для отладки
        minify: 'esbuild', // ✅ Оставь 'esbuild' для стандартного минификации
        target: 'esnext', // ✅ Современный таргет
        rollupOptions: {
            output: {
                manualChunks: undefined, // ✅ Отключи разбиение на чанки
            },
        },
    },
    server: {
        port: 3000,
        open: true,
    },
});

