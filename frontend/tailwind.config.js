/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#f5f7fb',
        panel: 'rgba(255, 255, 255, 0.7)',
        neon: {
          blue: '#5fe4ff',
          purple: '#8b5cf6',
          cyan: '#22d3ee'
        }
      },
      fontFamily: {
        sans: ['"Tajawal"', '"Space Grotesk"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 30px rgba(59, 130, 246, 0.2)',
        card: '0 20px 60px rgba(15, 23, 42, 0.12)'
      },
      backgroundImage: {
        'mesh': 'radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.35), transparent 45%), radial-gradient(circle at 80% 10%, rgba(34, 211, 238, 0.25), transparent 40%), radial-gradient(circle at 50% 80%, rgba(96, 165, 250, 0.18), transparent 45%)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulse 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      }
    }
  },
  plugins: []
};
