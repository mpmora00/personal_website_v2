import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import stringHash from 'string-hash';
import path from 'path';


export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern'
      }
    },
    modules: {
      generateScopedName(name, filePath: string, css: string) {
        const filename = path.basename(filePath, '.module.scss');

        // This is the default css modules naming logic
        const i = css.indexOf(`.${name}`);
        const lineNumber = css.substring(0, i).split(/[\r\n]/).length;
        const hash = stringHash(css).toString(36).substr(0, 5);

        return `${filename}_${name}_${hash}_${lineNumber}`;
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  }
});