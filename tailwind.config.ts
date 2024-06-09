import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {

      colors: {
        wtaorange: '#FC911F',
        lightOrange: '#FDB66A',
        lightGrey: '#d4d4d4',
        grey: '#494949',
darkGrey: '#333333',
        white: '#fff',
        black: '#000000',
        foundBlack: '#252525',
        darkOrange: '#F37022',
        transparent: '#00000000',
        transparentBlack: '#00000011',
        lightBlue: '#0CECE4',
        blue: '#0CECE4',
        lightGreen: '#5AF97A',
        green: '#8DCB16',
        lightMagenta: '#F950CD',
        magenta: '#83025C',
      },
      screens: {
        '3xl': { max: '1535px' },
        
        '2xl': { max: '1400px' },
        xl: { max: '1279px' },
        

        lg: { max: '1023px' },
        

        md: { max: '767px' },
        

        sm: { max: '639px' },
        xs: { max: '575px' },
        '2xs': { max: '400px' },
        
    },
      extend: {},
    },

  plugins: [],
} satisfies Config

