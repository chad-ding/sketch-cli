module.exports = {
	root: true,
	extends: ['./.eslint-config.js'],
	ignorePatterns: ['template/**/*'],
	rules: {
		'no-new-func': 'off',
		'no-prototype-builtins': 'off'
	}
}
