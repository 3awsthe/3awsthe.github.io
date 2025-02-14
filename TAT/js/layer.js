//AMark
addLayer("A",{
	name:"Alpha",
	symbol:"A",
	position:0,
	row:0,
	startData(){return{
		unlocked:true,
		points:new Decimal(0),
		}
	},
	color:"#10aa98",
	baseResource:"字母",
	baseAmount(){return player.points},
	resource:"Alpha",
	exponent:0.6,
	type:"normal",
	requires:new Decimal(5),
	gainMult()
	{
		let mult=new Decimal(1)
		if(hasUpgrade("A",31))mult=mult.mul(upgradeEffect("A",31))
		if(player.B.points.gte(1))mult=mult.mul(player.B.points.mul(2).pow(0.99))
		return mult
	},
	doReset(resettingLayer)
	{
		let keep=[];
		if(hasMilestone("B",20)&&resettingLayer=="B")keep.push("challenges")
		if (layers[resettingLayer].row > layers[this.layer].row)layerDataReset(this.layer,keep)
	},
	upgrades:{
		11:{
			title:"膨胀",
			tooltip:"A11",
			description(){
				if(inChallenge("A",11)||inChallenge("A",12)||inChallenge("A",13))return "字母增益 x2"
				if(hasUpgrade("A",41))return "字母增益 x2500"
				if(hasUpgrade("A",32))return "字母增益 x500"
				if(hasUpgrade("A",22))return "字母增益 x50"
				if(hasUpgrade("A",16))return "字母增益 x15"
				if(hasUpgrade("A",13))return "字母增益 x8"
				if(hasUpgrade("A",12))return "字母增益 x3"
				return "字母增益 x2"
			},
			cost:new Decimal(1)
		},
		12:{
			title:"膨胀器 ALPHA",
			tooltip:"A12",
			description:"增强 A11",
			cost:new Decimal(3),
			unlocked(){return hasUpgrade("A",11)}
		},
		13:{
			title:"膨胀器 BETA",
			tooltip:"A13",
			description:"增强 A11",
			cost:new Decimal(6),
			unlocked(){return hasUpgrade("A",12)}
		},
		14:{
			title:"可回收利用",
			tooltip:"A14",
			description:"Alpha 增益字母",
			effect()
			{
				if(inChallenge("A",11)||inChallenge("A",12)||inChallenge("A",21))return softcap(player.A.points.add(1).pow(0.3),new Decimal(1000),0.1)
				if(hasUpgrade("A",46))return softcap(player.A.points.add(1).pow(0.5),new Decimal(1000000),0.05)
				if(hasUpgrade("A",42))return softcap(player.A.points.add(1).pow(0.5),new Decimal(100000),0.1)
				if(hasUpgrade("A",34))return softcap(player.A.points.add(1).pow(0.5),new Decimal(10000),0.1)
				if(hasUpgrade("A",24))return softcap(player.A.points.add(1).pow(0.4),new Decimal(1000),0.1)
				if(hasUpgrade("A",15))return softcap(player.A.points.add(1).pow(0.35),new Decimal(1000),0.1)
				return softcap(player.A.points.add(1).pow(0.3),new Decimal(1000),0.1)
			},
			effectDisplay(){return "x"+format(upgradeEffect("A",14))},
			cost:new Decimal(30),
			unlocked(){return hasUpgrade("A",13)}
		},
		15:{
			title:"回收机 ALPHA",
			tooltip:"A15",
			description:"增强 A14",
			cost:new Decimal(50),
			unlocked(){return hasUpgrade("A",14)}
		},
		16:{
			title:"膨胀器 GAMMA",
			tooltip:"A16",
			description:"增强 A11",
			cost:new Decimal(100),
			unlocked(){return hasUpgrade("A",15)}
		},
		21:{
			title:"自我改善",
			tooltip:"A21",
			description:"字母提升字母",
			effect(){
				if(inChallenge("A",11)||inChallenge("A",12)||inChallenge("A",21))return softcap(player.points.add(1).pow(0.125),new Decimal(1000),0.1)
				if(hasUpgrade("A",42))return softcap(player.points.add(1).pow(0.35),new Decimal(100000),0.1)
				if(hasUpgrade("AP",14))return softcap(player.points.add(1).pow(0.35),new Decimal(10000),0.1)
				if(hasUpgrade("A",35))return softcap(player.points.add(1).pow(0.3),new Decimal(1000),0.1)
				if(hasUpgrade("A",33))return softcap(player.points.add(1).pow(0.25),new Decimal(1000),0.1)
				if(hasUpgrade("A",25))return softcap(player.points.add(1).pow(0.2),new Decimal(1000),0.1)
				if(hasUpgrade("A",23))return softcap(player.points.add(1).pow(0.175),new Decimal(1000),0.1)
				return softcap(player.points.add(1).pow(0.125),new Decimal(1000),0.1)
			},
			effectDisplay(){return "x"+format(upgradeEffect("A",21))},
			cost:new Decimal(125),
			unlocked(){return hasUpgrade("A",16)}
		},
		22:{
			title:"超级膨胀 I",
			tooltip:"A22",
			description:"增强 A11 至 x50",
			cost:new Decimal(150),
			unlocked(){return hasUpgrade("A",21)}
		},
		23:{
			title:"更强改善 ALPHA",
			tooltip:"A23",
			description:"增强 A21",
			cost:new Decimal(500),
			unlocked(){return hasUpgrade("A",22)}
		},
		24:{
			title:"回收机 BETA",
			description:"增强 A14",
			tooltip:"A24",
			cost:new Decimal(750),
			unlocked(){return hasUpgrade("A",23)}
		},
		25:{
			title:"更强改善 BETA",
			description:"增强 A21",
			tooltip:"A25",
			cost:new Decimal(1000),
			unlocked(){return hasUpgrade("A",24)}
		},
		26:{
			title:"超越",
			tooltip:"A26",
			description:"解锁一个挑战，解锁 AP 层",
			cost:new Decimal(1500),
			unlocked(){return hasUpgrade("A",25)}
		},
		31:{
			title:"倒反天罡",
			tooltip:"A31",
			description:"字母增益 Alpha",
			cost:new Decimal(5000),
			effect(){
				if(hasUpgrade("AP",15))return softcap(player.points.add(1).pow(0.2),new Decimal(1000),0.1)
				return softcap(player.points.add(1).pow(0.15),new Decimal(1000),0.1)
			},
			effectDisplay(){return "x"+format(upgradeEffect("A",31))},
			unlocked(){return hasUpgrade("A",26)&&hasChallenge("A",11)}
		},
		32:{
			title:"超级膨胀 II",
			tooltip:"A32",
			description:"增强 A11 至 x500",
			cost:new Decimal(15000),
			unlocked(){return hasUpgrade("A",31)&&player.AP.points.gte(1)}
		},
		33:{
			title:"更强改善 GAMMA",
			description:"增强 A21",
			tooltip:"A33",
			cost:new Decimal(4000000),
			unlocked(){return hasUpgrade("A",32)}
		},
		34:{
			title:"回收机 GAMMA",
			description:"增强 A14",
			tooltip:"A34",
			cost:new Decimal(20000000),
			unlocked(){return hasUpgrade("A",33)}
		},
		35:{
			title:"更强改善 DELTA",
			description:"增强 A21 并去掉一个软上限",
			tooltip:"A35",
			cost:new Decimal(2e11),
			unlocked(){return hasUpgrade("A",34)&&hasUpgrade("AP",12)}
		},
		36:{
			title:"发电机",
			description:"增强 AP13 至 150%",
			tooltip:"A36",
			cost:new Decimal(5e12),
			unlocked(){return hasUpgrade("A",35)&&hasUpgrade("AP",13)}
		},
		41:{
			title:"膨胀器 DELTA",
			description:"增强 A11",
			tooltip:"A41",
			cost:new Decimal(5e13),
			unlocked(){return hasUpgrade("A",36)}
		},
		42:{
			title:"更强改善 ZETA & 回收机 DELTA",
			description:"去掉 A21 和 A14 的一个软上限",
			tooltip:"A42",
			cost:new Decimal(5e14),
			unlocked(){return hasUpgrade("A",41)}
		},
		43:{
			title:"新的层级",
			description:"解锁 B 层",
			tooltip:"A43",
			cost(){if(player.B.points.gte(1))return new Decimal(0)
			else return new Decimal(1e15)},
			unlocked(){return hasUpgrade("A",42)}
		},
		44:{
			title:"字母力量增强 BETA",
			description:"增强字母力量对字母的增益效果",
			tooltip:"A44",
			cost:new Decimal(1e24),
			unlocked(){return hasUpgrade("A",43)&&hasUpgrade("B",12)}
		},
		45:{
			title:"膨胀器 EPSILON",
			description:"增强 A11",
			tooltip:"A45",
			cost:new Decimal(1e25),
			unlocked(){return hasUpgrade("A",44)}
		},
		46:{
			title:"回收机 EPSILON",
			description:"去掉 A14 的一个软上限",
			tooltip:"A46",
			cost:new Decimal(1e26),
			unlocked(){return hasUpgrade("A",45)}
		}
	},
	autoUpgrade(){return hasMilestone("C",75)},
	challenges:{
		11:{
			name:"无法想象失去升级的痛苦",
			tooltip:"AC11",
			challengeDescription:"所有膨胀、超级膨胀、回收机、更强改善将失效",
			rewardDescription:"解锁更多 Alpha 升级，字母增益 x10",
			canComplete(){return player.points.gte(1000)},
			goalDescription:"1,000 字母",
			unlocked(){return (hasUpgrade("A",26))||hasMilestone("B",20)}
		},
		12:{
			name:"无法想象失去升级的痛苦 II",
			tooltip:"AC12",
			challengeDescription:"所有膨胀、超级膨胀、回收机、更强改善将失效",
			rewardDescription:"字母增益 x3",
			canComplete(){return player.points.gte(1000000)},
			goalDescription:"1,000,000 字母",
			unlocked(){return ((hasUpgrade("A",26)&&hasMilestone("B",2))||hasMilestone("B",20))&&hasChallenge("A",11)}
		},
		21:{
			name:"无法想象失去升级的痛苦 III",
			tooltip:"AC21",
			challengeDescription:"所有膨胀、超级膨胀、回收机、更强改善将失效",
			rewardDescription:"A、B、AC 层字母增益 ^1.25",
			canComplete(){return player.points.gte(2e11)},
			goalDescription:"2e11 字母",
			unlocked(){return ((hasUpgrade("A",26)&&hasMilestone("B",2))||hasMilestone("B",20))&&hasChallenge("A",12)}
		},
		22:{
			name:"丢掉一切，做回自己",
			tooltip:"AC22",
			challengeDescription:"A、B、AC 层所有升级失效",
			rewardDescription:"字母增益 ^1.25",
			canComplete(){return player.points.gte(1e11)},
			goalDescription:"1e11 字母",
			unlocked(){return ((hasUpgrade("A",26)&&hasMilestone("B",2))||hasMilestone("B",20))&&hasChallenge("A",21)}
		}
	},
	passiveGeneration()
	{
		if(hasUpgrade("AP",16))return 2
		if(hasUpgrade("A",36))return 1.5
		if(hasUpgrade("AP",13))return 1
	},
	tabFormat:{
		"Main Tab":
		{
			content:[
				"main-display",
				"blank",
				["prestige-button",function(){return ""}],
				"blank",
				"blank",
				["display-text",function(){return "你有 "+format(player.points)+" 字母"}],
				"blank",
				"blank",
				"upgrades"
			]
		},
		"Challenges":{
			unlocked(){return hasUpgrade("A",26)||hasMilestone("B",20);},
			content:[
				"blank",
				"blank",
				"challenges"
			]
		}
	}
})
//APMark
addLayer("AP",{
	name:"AlphabetPower",
	symbol:"AP",
	position:-1,
	row:0,
	startData(){return{
		unlocked:true,
		points:new Decimal(0),
		}
	},
	color:"#3800aa",
	baseResource:"字母",
	baseAmount(){return player.points},
	resource:"字母力量",
	exponent:0.7,
	type:"static",
	requires:new Decimal(2000000),
	gainMult()
	{
		let mult=new Decimal(1)
		return mult
	},
	upgrades:{
		11:{
			title:"利益最大化",
			description:"可以最大购买字母力量",
			tooltip:"AP11",
			cost:new Decimal(30),
		},
		12:{
			title:"字母力量加强 ALPHA",
			description:"增强字母力量对字母的增益效果",
			tooltip:"AP12",
			cost:new Decimal(60),
			unlocked(){return hasUpgrade("AP",11)}
		},
		13:{
			title:"极好的",
			description:"每秒获得重置时 100% 的 Alpha",
			tooltip:"AP13",
			cost:new Decimal(100),
			unlocked(){return hasUpgrade("AP",12)}
		},
		14:{
			title:"更强改善 EPSILON",
			description:"增强 A21 并去掉一个软上限",
			tooltip:"AP14",
			cost:new Decimal(120),
			unlocked(){return hasUpgrade("AP",13)}
		},
		15:{
			title:"可回收利用 ALPHA",
			description:"增强 A31",
			tooltip:"AP15",
			cost:new Decimal(200),
			unlocked(){return hasUpgrade("AP",14)&&hasUpgrade("B",11)}
		},
		16:{
			title:"省时省力",
			description:"将 AP13 增强至 200%",
			tooltip:"AP16",
			cost:new Decimal(250),
			unlocked(){return hasUpgrade("AP",15)}
		},
		21:{
			title:"可回收利用 BETA",
			description:"增强 A31",
			tooltip:"AP21",
			cost:new Decimal(300),
			unlocked(){return hasUpgrade("AP",16)}
		},
		22:{
			title:"中枢系统",
			description:"解锁 C 层",
			tooltip:"AP22",
			cost()
			{
				if(player.C.points.gte(1))return new Decimal(0)
				else return new Decimal(450)
			},
			unlocked(){return hasUpgrade("AP",21)}
		},
		23:{
			title:"伽马射线",
			description:"解锁 G 层",
			tooltip:"AP23",
			cost()
			{
				if(player.G.points.gte(1))return new Decimal(0)
				else return new Decimal(1300)
			},
			unlocked(){return hasUpgrade("AP",22)}
		}
	},
	branches:["A"],
	canBuyMax(){return hasUpgrade("AP",11)},
	tabFormat:{
		"Upgrades":
		{
			content:[
				"main-display",
				"blank",
				["prestige-button",function(){return ""}],
				"blank",
				"blank",
				["display-text",
				function()
				{
					if(hasUpgrade("A",44))return "你有 "+player.AP.points+" 字母力量，字母增益 x"+player.AP.points.mul(5).pow(0.99)
					if(hasUpgrade("AP",12))return "你有 "+player.AP.points+" 字母力量，字母增益 x"+player.AP.points.mul(4.5).pow(0.99)
					return "你有 "+player.AP.points+" 字母力量，字母增益 x"+player.AP.points.mul(3).pow(0.99)
				}
				],
				"blank",
				"upgrades"
			]
		},
	},
	layerShown(){return hasUpgrade("A",26)}
})
//BMark
addLayer("B",{
	name:"Beta",
	symbol:"B",
	position:0,
	row:1,
	startData(){return{
		unlocked:true,
		points:new Decimal(0),
		}
	},
	branches:["AP","A"],
	color:"#ffcc00",
	baseResource:"Alpha",
	baseAmount(){return player.A.points},
	resource:"Beta",
	exponent:0.7,
	type:"static",
	requires:new Decimal(1e15),
	gainMult()
	{
		let mult=new Decimal(1)
		return mult
	},
	milestones:{
		2:{
			requirementDescription:"2 Beta",
			effectDescription:"解锁更多 Alpha 挑战",
			done(){return player.B.points.gte(2)}
		},
		5:{
			requirementDescription:"5 Beta",
			effectDescription:"可最大购买 Beta",
			done(){return player.B.points.gte(5)}
		},
		20:{
			requirementDescription:"20 Beta",
			effectDescription:"重置时保留 Alpha 层挑战",
			done(){return player.B.points.gte(20)}
		},
		75:{
			requirementDescription:"75 Beta",
			effectDescription:"Beta 不重置任何东西",
			done(){return player.B.points.gte(75)}
		},
		500:{
			requirementDescription:"500 Beta",
			effectDescription:"自动重置 Beta",
			done(){return player.B.points.gte(500)}
		}
	},
	upgrades:{
		11:{
			title:"I NEED MORE",
			description:"解锁更多 AP 层升级",
			cost:new Decimal(100),
			unlocked(){return hasMilestone("B",75)}
		},
		12:{
			title:"I NEEED MORE",
			description:"解锁更多 Alpha 升级",
			cost:new Decimal(125),
			unlocked(){return hasUpgrade("B",11)}
		}
	},
	autoPrestige(){return hasMilestone("B",500)},
	resetsNothing(){return hasMilestone("B",75)},
	canBuyMax(){return hasMilestone("B",5)},
	layerShown(){return hasUpgrade("A",43)||player.B.points.gte(1)},
	tabFormat:{
		"Milestones":
		{
			content:[
				"main-display",
				"blank",
				["prestige-button",function(){return ""}],
				"blank",
				"blank",
				["display-text",
				function()
				{
					return "你有 "+player.B.points+" Beta，字母增益 x"+format(player.B.points.mul(3).pow(0.99))+"，Alpha 增益 x"+format(player.B.points.mul(2).pow(0.99));
				}
				],
				"blank",
				"milestones"
			]
		},
		"Upgrades":{
			content:[
			"main-display",
			"blank",
			["prestige-button",function(){return ""}],
			"blank",
			"blank",
			["display-text",
			function()
			{
				return "你有 "+player.B.points+" Beta，字母增益 x"+format(player.B.points.mul(3).pow(0.99))+"，Alpha 增益 x"+format(player.B.points.mul(2).pow(0.99));
			}
			],
			"blank",
			"upgrades"]
		}
	}
})
//CMark
addLayer("C",{
	name:"Central",
	symbol:"C",
	position:1,
	row:1,
	startData(){return{
		unlocked:true,
		points:new Decimal(0),
		}
	},
	branches:["AP","A"],
	color:"#848484",
	baseResource:"字母",
	baseAmount(){return player.points},
	resource:"中枢",
	exponent:0.7,
	type:"static",
	requires:new Decimal(1e27),
	gainMult()
	{
		let mult=new Decimal(1)
		return mult
	},
	milestones:{
		2:{
			requirementDescription:"2 中枢",
			effectDescription:"中枢开始对字母增益",
			done(){return player.C.points.gte(2)}
		},
		5:{
			requirementDescription:"5 中枢",
			effectDescription:"可最大购买中枢",
			done(){return player.C.points.gte(5)}
		},
		30:{
			requirementDescription:"30 中枢",
			effectDescription:"增强中枢对字母增益的效果",
			done(){return player.C.points.gte(30)}
		},
		75:{
			requirementDescription:"75 中枢",
			effectDescription:"自动购买 Alpha 升级项",
			done(){return player.C.points.gte(75)}
		},
		125:{
			requirementDescription:"120 中枢",
			effectDescription:"字母增益 ^1.25",
			done(){return player.C.points.gte(125)}
		},
		150:{
			requirementDescription:"150 中枢",
			effectDescription:"中枢不重置任何东西",
			done(){return player.C.points.gte(125)}
		}
	},
	resetsNothing(){return hasMilestone("C",150)},
	canBuyMax(){return hasMilestone("C",5)},
	tabFormat:{
		"Milestones":
		{
			content:[
				"main-display",
				"blank",
				["prestige-button",function(){return ""}],
				"blank",
				"blank",
				["display-text",
				function()
				{
					if(hasMilestone("C",30))return "你有 "+player.C.points+" 中枢，字母增益 x"+format(player.C.points.mul(10).pow(0.97))
					else if(hasMilestone("C",2))return "你有 "+player.C.points+" 中枢，字母增益 x"+format(player.C.points.mul(6).pow(0.97))
				}
				],
				"blank",
				"milestones"
			]
		}
	},
	layerShown(){return hasUpgrade("AP",22)}
})
addLayer("G",{
	name:"Gamma",
	symbol:"G",
	position:0,
	row:2,
	startData(){return{
		unlocked:true,
		points:new Decimal(0),
		}
	},
	branches:["C","B"],
	color:"#8e2db4",
	baseResource:"字母",
	baseAmount(){return player.points},
	resource:"Gamma",
	exponent:0.6,
	type:"normal",
	requires:new Decimal(1e51),
	gainMult()
	{
		let mult=new Decimal(1)
		return mult
	},
	infoboxes:{
		1:{
		body()
		{return "失去一切的目的是为了得到更多，不是吗。<br>所有的字母一瞬间从 Gamma 中逝去，永远的逝去。<br>你尝试挽回它。<br>你失败了。<br>"}}
	},
	upgrades:{
		11:{
			title:"见面礼 I",
			description:"字母增益 ^1.11",
			cost:new Decimal(5)
		},
		12:{
			title:"见面礼 II",
			description:"字母增益 x1.5",
			cost:new Decimal(15)
		},
		13:{
			title:"见面礼 III",
			description:"字母增益 x3",
			cost:new Decimal(30)
		},
	}
})