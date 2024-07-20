import { glob } from 'glob';
import { fileURLToPath } from 'node:url';
import { extname, relative, resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
    server: {
        port: 3000,
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
        },
    },
    plugins: [
        solidPlugin(),
        libInjectCss(),
        dts({
            include: ['lib'],
            exclude: ['**/stories.tsx'],
        }),
    ],
    build: {
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            formats: ['es'],
        },
        rollupOptions: {
            external: ['solid-js'],
            input: Object.fromEntries(
                glob
                    .sync('lib/**/*.{ts,tsx}', {
                        ignore: ['src/*', 'lib/**/stories.{ts,tsx}'],
                    })
                    .map((file) => {
                        // The name of the entry point
                        // lib/nested/foo.ts becomes nested/foo
                        const entryPoint = relative('lib', file.slice(0, file.length - extname(file).length));
                        // The absolute path to the entry file
                        // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
                        // @ts-ignore
                        const filePath = fileURLToPath(new URL(file, import.meta.url));
                        const fileFullPath = [entryPoint, filePath];
                        console.log(fileFullPath);
                        return fileFullPath;
                    }),
            ),
            output: {
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: '[name].js',
                format: 'es',
            },
        },
    },
});
