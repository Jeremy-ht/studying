import Star from '@/components/Star';

const UI = {}
const UIPoll = [
	Star
]
UI.install = function (Vue) {
	UIPoll.forEach(component => {
		Vue.component(component.name, component)
	})
	
}

export default UI


