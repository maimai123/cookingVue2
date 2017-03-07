<template>
	<div>
	<HeadApp />
	<div class="container mt30">
		<div class="row">
			<div class="col-sm-4">
				<sidebar></sidebar>
			</div>
			<div class="col-sm-8">
				<timeCompent	/>
			</div>
		</div>
	</div>
	</div>
</template>
<script>
import HeadApp from 'components/header.vue';
import sidebar from 'components/sidebar.vue';
import timeCompent from 'components/TimeEntries.vue';
export default {
	name: 'app',
	data () {
    return {
      username: '麦麦'
    }
  },
	components:{
		HeadApp,
		sidebar,
		timeCompent
	}
}
</script>
<style lang="less">
	.jumbotron{
		width: 80%;
		h1{
			margin-bottom: 10px;
		}
	}
	.mt30{
		margin-top: 30px;
	}
</style>
