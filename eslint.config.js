import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      tailwindcss, // Plugin para Tailwind CSS
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Configuración de Tailwind CSS
      'tailwindcss/no-custom-classname': 'off', // Cambiar a "warn" o "error" si deseas evitar clases personalizadas
      'tailwindcss/classnames-order': 'warn', // Asegura que las clases estén en un orden lógico
      'tailwindcss/no-contradicting-classname': 'error', // Evita conflictos entre clases, como `bg-red-500 bg-blue-500`
    },
    settings: {
      tailwindcss: {
        config: './tailwind.config.js', // Ruta al archivo de configuración de Tailwind
        groups: ['colors', 'font-sizes', 'spacing'], // Orden de las clases (opcional)
      },
      react: {
        version: 'detect', // Detecta automáticamente la versión de React
      },
    },
  },
);
