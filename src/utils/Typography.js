import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '24px',
  googleFonts: [
    {
      name: 'Roboto',
      styles: ['800'],
    },
  ],
  headerFontFamily: ['Roboto'],
  bodyFontFamily: ['Roboto'],
  headerGrey: 100,
  bodyGrey: 'warm',
})

export default typography
