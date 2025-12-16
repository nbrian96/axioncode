/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      extend: {
        colors: {
          border: 'var(--color-border)', // gray-200
          input: 'var(--color-input)', // gray-50
          ring: 'var(--color-ring)', // blue-600
          background: 'var(--color-background)', // white
          foreground: 'var(--color-foreground)', // gray-900
          primary: {
            DEFAULT: 'var(--color-primary)', // gray-900
            foreground: 'var(--color-primary-foreground)', // white
          },
          secondary: {
            DEFAULT: 'var(--color-secondary)', // gray-50
            foreground: 'var(--color-secondary-foreground)', // gray-900
          },
          destructive: {
            DEFAULT: 'var(--color-destructive)', // red-600
            foreground: 'var(--color-destructive-foreground)', // white
          },
          muted: {
            DEFAULT: 'var(--color-muted)', // gray-100
            foreground: 'var(--color-muted-foreground)', // gray-500
          },
          accent: {
            DEFAULT: 'var(--color-accent)', // blue-600
            foreground: 'var(--color-accent-foreground)', // white
            hover: 'var(--color-accent-hover)', // blue-700
            subtle: 'var(--color-accent-subtle)', // blue-600 with opacity
          },
          popover: {
            DEFAULT: 'var(--color-popover)', // white
            foreground: 'var(--color-popover-foreground)', // gray-900
          },
          card: {
            DEFAULT: 'var(--color-card)', // white
            foreground: 'var(--color-card-foreground)', // gray-900
          },
          success: {
            DEFAULT: 'var(--color-success)', // green-600
            foreground: 'var(--color-success-foreground)', // white
          },
          warning: {
            DEFAULT: 'var(--color-warning)', // yellow-500
            foreground: 'var(--color-warning-foreground)', // gray-900
          },
          error: {
            DEFAULT: 'var(--color-error)', // red-600
            foreground: 'var(--color-error-foreground)', // white
          },
          text: {
            primary: 'var(--color-text-primary)', // gray-800
            secondary: 'var(--color-text-secondary)', // gray-500
          },
        },
        borderRadius: {
          lg: 'var(--radius-lg)',
          md: 'var(--radius-md)',
          sm: 'var(--radius-sm)',
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
        fontSize: {
          'hero': 'clamp(2rem, 4vw, 3.5rem)',
          'headline': 'clamp(1.5rem, 3vw, 2.5rem)',
          'subheadline': 'clamp(1.25rem, 2.5vw, 2rem)',
        },
        spacing: {
          'base': 'var(--spacing-base)',
          'scale-1': 'var(--spacing-scale-1)',
          'scale-2': 'var(--spacing-scale-2)',
          'scale-3': 'var(--spacing-scale-3)',
        },
        boxShadow: {
          'sm': 'var(--shadow-sm)',
          'md': 'var(--shadow-md)',
          'lg': 'var(--shadow-lg)',
        },
        transitionTimingFunction: {
          'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
        transitionDuration: {
          'base': '300ms',
          'fast': '150ms',
        },
        keyframes: {
          'fade-in': {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          'slide-in': {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          'swipe-indicator': {
            '0%, 100%': { transform: 'translateX(-10px)' },
            '50%': { transform: 'translateX(10px)' },
          },
        },
        animation: {
          'fade-in': 'fade-in 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          'slide-in': 'slide-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          'swipe-indicator': 'swipe-indicator 2s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  }