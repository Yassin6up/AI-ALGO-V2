import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          900: '#05070f',
          850: '#0a0f1f',
          800: '#0b1224',
          700: '#111a33',
          600: '#182243'
        },
        neon: {
          cyan: '#4cc9f0',
          purple: '#9b5cff',
          blue: '#5d7bff'
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 30px rgba(76,201,240,0.25)'
      },
      backgroundImage: {
        'mesh-gradient': 'radial-gradient(circle at 20% 20%, rgba(155,92,255,0.25), transparent 35%), radial-gradient(circle at 80% 10%, rgba(76,201,240,0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(93,123,255,0.2), transparent 45%)'
      }
    }
  },
  plugins: []
} satisfies Config;
