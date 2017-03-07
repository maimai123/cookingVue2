<template>
	<div class="panel panel-danger">
		<div class="panel-heading">
      <h1 class="text-center">已有时长</h1>
    </div>
		<div class="panel-body">
			<h1 class="text-center">{{ time }} 小时</h1>
		</div>
	</div>
</template>
<script>
import store from '../vuex/store';
	export default {
		data(){
			return{

			}
		},
		computed:{
			time(){
				return store.state.totalTime;
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
