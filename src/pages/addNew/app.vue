<template>
	<div>
	<HeadApp />
	<div class="container mt30">
		<div class="row">
			<div class="col-sm-4">
				<sidebar></sidebar>
			</div>
			<div class="col-sm-8">
				<p v-if="!lists.length"><strong>还没有任何计划</strong></p>
				<div v-else v-for="(list,index) in lists">
					<div class="bg-danger jumbotron-box">
						<div class="row">
							<div class="col-sm-3">
								<img class="head-logo img-circle " :src="list.avatar" alt="pic">
								<p class="text-center">
	                <strong>
	                  {{ list.name }}
	                </strong>
	              </p>
							</div>
							<div class="col-sm-9">
								<div class="alert alert-info mt30">
									<strong>{{ list.comment }}</strong>
								</div>
								<span class="time-css"><i class="glyphicon glyphicon-time"></i> {{ list.totalTime }}</span>
								<div>
									<span class="label label-primary"><i class="glyphicon glyphicon-calendar"></i> {{ list.date }}</span>
								</div>
								<div type="button" @click="deletePlan(index)" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>
<script>
import HeadApp from 'components/header.vue';
import sidebar from 'components/sidebar.vue';
import store from '../../vuex/store';
export default {
	name: 'addnew',
	data () {
		return{

		}
	},
	components:{
		HeadApp,
		sidebar,
	},
	computed :{
		lists(){
			return store.state.lists
		}
	},
	methods:{
		deletePlan(index) {
			console.log(this.lists[index].totalTime);
      // 减去总时间
      store.dispatch('decTotalTime',this.lists[index].totalTime)
      // 删除该计划
      store.dispatch('deletePlan',index)
    }
	}
}
</script>
<style lang="less">
	.mt30{
		margin-top:30px;
	}
	.label{
		padding: .5em .6em .3em;
	}
	.jumbotron-box{
		background:#fff;
		border-radius:10px;
		margin: 0 0 20px 0;
		border:1px solid #ddd;
		padding:20px;
	}
	.head-logo{
		width:130px;
		height:130px;
		margin:5px 0;
	}
	.time-css,.date-css{
		font-size:20px;
		color:#4b4748;
	}
	.close{
		position: relative;
		top: -155px;
		outline:nonel
	}
</style>
