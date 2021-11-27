module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      primary: '#555',
      secondary: '#797979',
      darkest: '#222'
    },
    fontFamily: {
      kakugo: [
        'Hiragino Kaku Gothic ProN',
        'ヒラギノ角ゴ ProN W3',
        'Meiryo',
        'メイリオ',
        'ＭＳ ゴシック',
        'MS Gothic',
        'sans-serif'
      ],
      meiryo: [
        'Meiryo',
        'メイリオ',
        'Hiragino Kaku Gothic ProN',
        'ヒラギノ角ゴ ProN W3',
        'ＭＳ ゴシック',
        'MS Gothic',
        'sans-serif'
      ],
      mincho: [
        'HGS明朝E',
        'ヒラギノ明朝 Pro W3',
        'Hiragino Mincho Pro',
        'ＭＳ Ｐ明朝',
        'serif'
      ],
      serif: [
        'Baskerville Old Face',
        'Baskerville',
        'Times New Roman',
        'Times',
        'Georgia',
        'Palatino',
        'Palatino Linotype',
        'HGS明朝E',
        'ヒラギノ明朝 Pro W3',
        'Hiragino Mincho Pro',
        'ＭＳ Ｐ明朝',
        '游明朝',
        'YuMincho',
        'ヒラギノ明朝 ProN W3',
        'Hiragino Mincho ProN',
        'MS PMincho',
        'serif'
      ],
      sans: ['Merriweather', 'serif']
    },

    extend: {
      minHeight: {
        square: 'calc((92vh + 92vw) /2)',
        golden61vw: '61.8vw',
        golden61vh: '61.8vh',
        golden38vw: '38.2vw',
        golden38vh: '38.2vh',
        golden23vw: '23.6vw',
        golden23vh: '23.6vh'
      },
      spacing: {
        square: 'calc((92vh + 92vw) /2)',
        golden61vw: '61.8vw',
        golden61vh: '61.8vh',
        golden38vw: '38.2vw',
        golden38vh: '38.2vh',
        golden23vw: '23.6vw',
        golden23vh: '23.6vh'
      },
      backgroundImage: {
        surface: `url('img/surface.webp')`
      },
      transitionProperty: {
        header: {
          'transition-property': 'all',
          'transition-timing-function': 'ease-in-out',
          'transition-duration': '2000ms'
        }
      },
      letterSpacing: {
        title: '0.2em'
      }
    }
  },
  variants: {
    extend: {
      mixBlendMode: ['hover', 'focus']
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
};
