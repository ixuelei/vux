<template>
	<div class="vux_index">
		<group>
      <cell title="title" value="value"></cell>
      <cell title="title" value="value"></cell>
      <cell title="title" value="value"></cell>
    </group>
     <v-chart :data="data" prevent-default>
      <v-scale x :tick-count="3" />
      <v-tooltip :show-item-marker="false" show-x-value />
      <v-line />
    </v-chart>
    <div style='width:100px;height:100px;'>
      <x-circle
        :percent="percent"
        :stroke-width="6"
        :trail-width="6"
        :stroke-color="['#36D1DC', '#5B86E5']"
        trail-color="#ececec">
        <span style="color:#36D1DC">{{ percent }}%</span>
      </x-circle>
    </div>
	</div>
</template>

<script>
	import { Group, Cell } from 'vux'
	import { VChart, VTooltip, VLine, VScale } from 'vux'
	import { XCircle } from 'vux'
export default {
    name:'HelloWorld',
    data(){
        return {
        	data:[
        { date: '2017-06-05', value: 116 },
        { date: '2017-06-06', value: 129 },
        { date: '2017-06-07', value: 135 },
        { date: '2017-06-08', value: 86 },
        { date: '2017-06-09', value: 73 },
        { date: '2017-06-10', value: 85 },
        { date: '2017-06-11', value: 73 },
        { date: '2017-06-12', value: 68 },
        { date: '2017-06-13', value: 92 },
        { date: '2017-06-14', value: 130 },
        { date: '2017-06-15', value: 245 },
        { date: '2017-06-16', value: 139 },
        { date: '2017-06-17', value: 115 },
        { date: '2017-06-18', value: 111 },
        { date: '2017-06-19', value: 309 },
        { date: '2017-06-20', value: 206 },
        { date: '2017-06-21', value: 137 },
        { date: '2017-06-22', value: 128 },
        { date: '2017-06-23', value: 85 },
        { date: '2017-06-24', value: 94 },
        { date: '2017-06-25', value: 71 },
        { date: '2017-06-26', value: 106 },
        { date: '2017-06-27', value: 84 },
        { date: '2017-06-28', value: 93 },
        { date: '2017-06-29', value: 85 },
        { date: '2017-06-30', value: 73 },
        { date: '2017-07-01', value: 83 },
        { date: '2017-07-02', value: 125 },
        { date: '2017-07-03', value: 107 },
        { date: '2017-07-04', value: 82 },
        { date: '2017-07-05', value: 44 },
        { date: '2017-07-06', value: 72 },
        { date: '2017-07-07', value: 106 },
        { date: '2017-07-08', value: 107 },
        { date: '2017-07-09', value: 66 },
        { date: '2017-07-10', value: 91 },
        { date: '2017-07-11', value: 92 },
        { date: '2017-07-12', value: 113 },
        { date: '2017-07-13', value: 107 },
        { date: '2017-07-14', value: 131 },
        { date: '2017-07-15', value: 111 },
        { date: '2017-07-16', value: 64 },
        { date: '2017-07-17', value: 69 },
        { date: '2017-07-18', value: 88 },
        { date: '2017-07-19', value: 77 },
        { date: '2017-07-20', value: 83 },
        { date: '2017-07-21', value: 111 },
        { date: '2017-07-22', value: 57 },
        { date: '2017-07-23', value: 55 },
        { date: '2017-07-24', value: 60 }
      ],
      percent: 0
        }
    },
    components: {
			Group,
    	Cell,
    	VChart,
	    VTooltip,
	    VLine,
	    VScale,
	    XCircle
		},
    mounted() {
    	setTimeout(()=>{
    		this.percent = 100
    	},3000)
    },
    created() {

    },
    methods: {
    	
    }
}


</script>

<style lang="less" scoped>
	.vux_index {}
</style>