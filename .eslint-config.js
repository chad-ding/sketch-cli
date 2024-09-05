module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	overrides: [
		{
			files: ['*.js', '*.jsx'],
			extends: ['standard', 'plugin:prettier/recommended', 'prettier/standard']
		}
	]
}
