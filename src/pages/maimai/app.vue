<template>
	<div>
	<h1>
		<Vinput></Vinput>
		<h1>欢迎页-by麦麦</h1>
		<em>博客地址： </em>	<a href="https://maimai123.github.io">火星麦的博客</a>
	</h1>
	</div>
</template>
<script>
import Vinput from 'components/vinput.vue';

export default {
	name: 'app',
	components:{
		Vinput
	}
}
</script>
<style>
	h1{
		color: #f00;
		margin: 5% auto;
		text-align: center;
		font-family: arial;
		font-weight: 50;
	}
	img{
		width:200px;
	}
</style>
