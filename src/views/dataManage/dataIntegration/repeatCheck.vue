<template>
	<section>
		<el-tabs v-model="activeName" type="card" @tab-click="handleClick" class="el-col el-col-24" >
		    <el-tab-pane label="指标管理" name="netLearn">
				<el-table :data="netLearnData" highlight-current-row v-loading="netLearnLoading" stripe style="width: 100%;">
					<el-table-column prop="id" type="index" width="60"  label="序号">
					</el-table-column>
					<el-table-column label="指标代码" min-width="100" prop="code"  sortable>
						<!-- <template slot-scope="scope">
							{{ scope.row.src_asset.name }}
						</template> -->
					</el-table-column>
					<el-table-column label="中文名称" prop="name_cn" min-width="100" >
					</el-table-column>
					<el-table-column label="英文名称" prop="name_en"  min-width="100"   >
					</el-table-column>
					<el-table-column  label="月度"  min-width="100" >
						<template slot-scope="scope">
				     <el-checkbox v-model="scope.row.monthBased===1"></el-checkbox>
						</template>
					</el-table-column>

					<el-table-column  label="季度" min-width="100" >
						<template slot-scope="scope">
				     <el-checkbox v-model="scope.row.quarterBased===1"></el-checkbox>
						</template>
					</el-table-column>

					<el-table-column  label="年度"  min-width="100" >
						<template slot-scope="scope">
						 <el-checkbox v-model="scope.row.yearBased===1"></el-checkbox>
						</template>
					</el-table-column>



					<el-table-column label="操作" min-width="100">
						<template slot-scope="scope">
							<el-button size="mini" type="warning" @click="handleAddLearnRule(scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>

			</el-tab-pane>

			<el-tab-pane label="指标数据项管理" name="ruleList">




			</el-tab-pane>

		</el-tabs>

	</section>
</template>

<script>
	import util from '../../../common/js/util'
	//import NProgress from 'nprogress'
	import { getNetLearnData, getRuleListData } from '../../../api/api';

	export default {
		data() {
			return {
				activeName:"netLearn",
				netLearnLoading: true,
				ruleListLoading: true,
				netLearnData: [],
				ruleListData: []
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log("click tab");
			},
			requestData() {
				let para = {
				};
				this.netLearnLoading = true;
				this.ruleListLoading = true;
				//NProgress.start();
				getNetLearnData(para).then((res) => {
					console.log(res.data);
					this.netLearnData = res.data.netLearnData;
					this.netLearnLoading = false;
				});
				getRuleListData(para).then((res) => {
					console.log(res.data);
					this.ruleListData = res.data.ruleListData;
					this.ruleListLoading = false;
				});
				//NProgress.done();
			},
			handleAddLearnRule(val){

				this.$confirm('确认删除吗?', '提示', {
					type: 'warning'
				});
				console.log(val);
			},
			handleEditRule(val){
				console.log(val);
			},
			handleDelRule(val){
				console.log(val);
			}
		},
		mounted() {
			this.requestData();
		}
	}

</script>

<style scoped>

</style>
