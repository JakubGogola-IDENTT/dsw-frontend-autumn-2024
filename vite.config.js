import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    server: {
        port: 3000,
    },
    plugins: [react()],
    base: '/',
    publicDir: 'public',
    build: {
        cssMinify: 'lightningcss',
        rollupOptions: {
            output: {
                manualChunks: {
                    'react-vendor': ['react', 'react-dom', 'react-router-dom'],
                },
            },
            external: '/envConfig.js',
        },
    },
    optimizeDeps: {
        include: ['react/jsx-runtime'],
    },
});
