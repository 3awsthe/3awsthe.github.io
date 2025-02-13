let modInfo = {
	name: "字母增量树",
	author: "PriorityStack",
	pointsName: "字母",
	modFiles: ["tree.js","layer.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0.1",
	name: "不急不急",
}

let changelog = `
<h1>修改日志</h1><br>
<h3>v0.0.1</h3><br>
什么都没有<br>
`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)
	let gain=new Decimal(1)
	if(hasUpgrade("A",11))
	{
		if(inChallenge("A",11)||inChallenge("A",12)||inChallenge("A",13))gain=gain.mul(2)
		else if(hasUpgrade("A",41))gain=gain.mul(2500)
		else if(hasUpgrade("A",32))gain=gain.mul(500)
		else if(hasUpgrade("A",22))gain=gain.mul(50)
		else if(hasUpgrade("A",16))gain=gain.mul(15)
		else if(hasUpgrade("A",13))gain=gain.mul(8)
		else if(hasUpgrade("A",12))gain=gain.mul(3)
		else gain=gain.mul(2)
	}
	if(hasUpgrade("A",14))gain=gain.mul(upgradeEffect("A",14))
	if(hasUpgrade("A",21))gain=gain.mul(upgradeEffect("A",21))
	if(hasChallenge("A",11))gain=gain.mul(10)
	if(hasChallenge("A",13))gain=gain.pow(1.25)
	if(player.AP.points.gte(1))
	{
		if(hasUpgrade("A",44))gain=gain.mul(player.AP.points.mul(5).pow(0.99))
		else if(hasUpgrade("AP",12))gain=gain.mul(player.AP.points.mul(4.5).pow(0.99))
		else gain=gain.mul(player.AP.points.mul(3).pow(0.99))
	}
	if(player.B.points.gte(1))gain=gain.mul(player.B.points.mul(3).pow(0.99))
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("eeee308"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}