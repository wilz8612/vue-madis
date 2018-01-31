import Mock from 'mockjs';


const ruleListData = 
[
	{
		"id":1,
		"name": "规则1",
		"description":"规则1描述",
		"src_zone": "区域1",
		"dst_zone": "区域2",
		"src_asset": [
			{
				"id":1,
				"name": "asset1",
				"ip": "10.50.10.0/255.255.255.0",
				"comment":"asset1 描述"
			},
			{
				"id":3,
				"name": "asset3",
				"ip": "10.50.10.3:10.50.10.4",
				"comment":"asset1 描述"
			}			
		],
		"dst_asset": [
			{
				"id":4,
				"name": "asset4",
				"ip": "10.50.10.4:10.50.10.5",
				"comment":"asset1 描述"
			}		
		],
		"service": {
			"id":3,
			"name": "Modbus-TCP",
			"ports":[502],
			"type": "工业协议",
			"comment":"http协议"
		},
		"action": true,
		"log": true
	}
];
export { ruleListData };
