// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['NunitoSans', ...defaultTheme.fontFamily.sans]
      },
      height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh']
      }
    }
  }
}
