import App from './App.vue'
import { createApp } from 'vue'
import router from './router'
import vueCodemirror from 'vue-codemirror';
import { basicSetup } from 'codemirror'
import { python } from '@codemirror/lang-python'
import { oneDark } from '@codemirror/theme-one-dark'
import store from './store';
import axios from 'axios';


const app = createApp(App);
app.use(router);
app.use(vueCodemirror, {
	// optional default global options
	autofocus: true,
	autoDestroy: true,
	disabled: false,
	indentWithTab: true,
	tabSize: 4,
	placeholder: 'Code goes here...',
	extensions: [basicSetup, python(), oneDark],  
  });
app.use(store);

const axiosInstance = axios.create({
	baseURL: 'http://47.89.241.167:22000',
  });
app.config.globalProperties.$http = axiosInstance;

app.mount('#app');
