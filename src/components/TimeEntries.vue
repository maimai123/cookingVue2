<template>
	<div class="jumbotron">
		<h1>跟我来吧？</h1>
			<strong>
				<a href="/addnew.html">创建一个任务</a>
			</strong>
			<h2>{{ doneList }}</h2>
	</div>
</template>
<script>
import store from '../vuex/store';
import { mapGetters } from 'vuex';
	export default {
		computed:{
			doneList(){
				return store.getters.doneList
			}
		}
	}
</script>
<style>
	p{
		font-family: arial;
		color: #999999;
		font-size:14px;
		text-align: center;
	}
</style>
