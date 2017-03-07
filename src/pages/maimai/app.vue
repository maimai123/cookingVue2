<template>
	<div>
		<HeadApp />
		<h1>
			<h1>欢迎页-by{{ username.toUpperCase()}}</h1>
			<em>博客地址： </em>	<a href="https://maimai123.github.io">火星麦的博客</a>
			<input v-model="username" />
		</h1>
	</div>
</template>
<script>
import HeadApp from 'components/header.vue';
export default {
	name: 'app',
	data () {
		return {
			username: '麦麦a'
		}
	},
	components:{
		HeadApp
	}
}
</script>
<style>
h1{
	color: #f00;
	margin: 3% auto;
	text-align: center;
	font-family: arial;
	font-weight: 50;
}
.maimai img{
	width:200px;
}
</style>
