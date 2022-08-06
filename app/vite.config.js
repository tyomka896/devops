import { defineConfig } from "vite"

export default defineConfig({
    root: 'public',
    build: {
        outDir: '../build',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                assetFileNames: ({ name }) => {
                    if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
                        return 'images/[name]-[hash][extname]';
                    }

                    if (/\.css$/.test(name ?? '')) {
                        return 'css/[name]-[hash][extname]';
                    }

                    return `assets/[name]-[hash][extname]`;
                },
                chunkFileNames: 'js/[name]-[hash].js',
                entryFileNames: 'js/[name]-[hash].js',
            },
        },
    }
})