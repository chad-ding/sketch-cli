const tailwindcss = require('tailwindcss')
const px2rem = require('postcss-game-px2rem')
const postcssNested = require('postcss-nested')
const postcssImport = require('postcss-import')

module.exports = {
	plugins: [
		postcssNested,
		postcssImport,
		tailwindcss,
		px2rem({
			rootValue: 100,
			unitPrecision: 2,
			propList: ['*'],
			selectorBlackList: [],
			mediaQuery: false,
			minPixelValue: 1
		})
	]
}
