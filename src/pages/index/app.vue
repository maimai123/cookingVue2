<template>
	<div>
	<h1>
		<Vinput></Vinput>
		<h1>来自火星的麦麦</h1>
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
