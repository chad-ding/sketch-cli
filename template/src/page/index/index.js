import VNode from '@/vnode'
import template from './template.html'

class Page extends VNode {
	constructor() {
		super(template, document.body)
		this.boot()
	}

	boot() {
		console.info('初始化页面')
	}
}

new Page()
