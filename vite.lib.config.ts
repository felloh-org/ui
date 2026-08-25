import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      entryRoot: '.',
      include: ['index.ts', 'components/**/*', 'tokens/**/*', 'utils/**/*'],
      outDir: 'dist',
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: 'index.ts',
      name: 'FellohUI',
      formats: ['es'],
      fileName: 'felloh-ui',
      cssFileName: 'felloh-ui',
    },
    rollupOptions: {
      external: (id) =>
        /^react($|\/)/.test(id) ||
        /^@radix-ui\//.test(id) ||
        ['lucide-react', 'clsx', 'tailwind-merge', 'class-variance-authority', 'sonner', '@tanstack/react-table'].some((d) => id === d || id.startsWith(d + '/')),
    },
  },
});
