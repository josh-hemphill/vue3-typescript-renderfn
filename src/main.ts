import { createApp, h, resolveComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue';

const app = createApp({
	name: 'App',
	setup() {
		const helloWolrd = resolveComponent('hello-world');
		return () => [
			h('img',{alt:'Vue logo', src:'./assets/logo.png'}),
			h(helloWolrd,{msg:'Welcome to Your Vue.js + TypeScript App'}),
			h('style',`
				#app {
				font-family: Avenir, Helvetica, Arial, sans-serif;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				text-align: center;
				color: #2c3e50;
				margin-top: 60px;
				}
			`.replace(/  +/g,' '))
		]
	}
});

app.component('hello-world',HelloWorld);

app.mount('#app')
