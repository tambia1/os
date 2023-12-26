export const Unit = function (type) {
	this.type = type;

	for (const k in Unit.types[type]) {
		this[k] = Unit.types[type][k];
	}

	this.life = this.lifeMax;

	this.loading = 0;

	this.lifeStrokeStyle = "#ffffff66";
	this.lifeFillStyle = "#99999966";

	this.weaponRangeFillStyle = "#ffffff33";

	this.shoot = null;
	this.isAttacking = false;

	this.animationAlpha = new spa.Animation();
	this.animationScale = new spa.Animation();

	(this.state = null), (this.sprite = 0);

	this.setWH(55, 55);
	this.setXY(0, 0);

	this.setOpacity(1, 1, 0);
	this.setScale(1, 1, 0);

	this.setState("idle");
};

Unit.types = {
	paladin: {
		imageName: "images/units/paladin.png",
		image: null,
		elixirNeeded: 2,
		lifeMax: 100,
		life: 0,
		moveSpeed: 3500,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 50,
		shootType: null,
		spriteSize: 128,
		spriteCols: 16,
		spriteRows: 8,
		spriteTime: 200,
		idle: [64, 64],
		idleDown: [0, 5],
		idleUp: [6, 11],
		walkDown: [16, 21],
		walkUp: [22, 27],
		attackDown: [32, 37],
		attackUp: [38, 43],
	},

	goblin: {
		imageName: "images/units/goblin.png",
		image: null,
		elixirNeeded: 2,
		lifeMax: 100,
		life: 0,
		moveSpeed: 3000,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 50,
		shootType: null,
		spriteSize: 128,
		spriteCols: 16,
		spriteRows: 8,
		spriteTime: 100,
		idle: [64, 64],
		idleDown: [0, 5],
		idleUp: [6, 11],
		walkDown: [16, 21],
		walkUp: [22, 27],
		attackDown: [32, 38],
		attackUp: [39, 45],
	},

	wolf: {
		imageName: "images/units/wolf.png",
		image: null,
		elixirNeeded: 1,
		lifeMax: 100,
		life: 0,
		moveSpeed: 2000,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 50,
		shootType: null,
		spriteSize: 128,
		spriteCols: 16,
		spriteRows: 8,
		spriteTime: 100,
		idle: [64, 64],
		idleDown: [0, 5],
		idleUp: [6, 11],
		walkDown: [16, 21],
		walkUp: [22, 27],
		attackDown: [32, 37],
		attackUp: [38, 43],
	},

	golem: {
		imageName: "images/units/golem.png",
		image: null,
		elixirNeeded: 3,
		lifeMax: 100,
		life: 0,
		moveSpeed: 3000,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 50,
		shootType: "shoot2",
		spriteSize: 128,
		spriteCols: 16,
		spriteRows: 8,
		spriteTime: 100,
		idle: [64, 64],
		idleDown: [0, 5],
		idleUp: [6, 11],
		walkDown: [16, 23],
		walkUp: [24, 31],
		attackDown: [32, 37],
		attackUp: [38, 43],
	},

	orc: {
		imageName: "images/units/orc.png",
		image: null,
		elixirNeeded: 4,
		lifeMax: 100,
		life: 0,
		moveSpeed: 3000,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 50,
		shootType: null,
		spriteSize: 128,
		spriteCols: 16,
		spriteRows: 8,
		spriteTime: 100,
		idle: [64, 64],
		idleDown: [0, 5],
		idleUp: [6, 11],
		walkDown: [16, 23],
		walkUp: [24, 31],
		attackDown: [32, 39],
		attackUp: [40, 47],
	},

	sorcerer: {
		imageName: "images/units/sorcerer.png",
		image: null,
		elixirNeeded: 4,
		lifeMax: 100,
		life: 0,
		moveSpeed: 2000,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 50,
		shootType: null,
		spriteSize: 128,
		spriteCols: 16,
		spriteRows: 8,
		spriteTime: 100,
		idle: [64, 64],
		idleDown: [0, 5],
		idleUp: [6, 11],
		walkDown: [16, 21],
		walkUp: [22, 27],
		attackDown: [32, 37],
		attackUp: [38, 43],
	},

	ninja: {
		imageName: "images/units/ninja.png",
		image: null,
		elixirNeeded: 2,
		lifeMax: 100,
		life: 0,
		moveSpeed: 2000,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 50,
		shootType: null,
		spriteSize: 128,
		spriteCols: 16,
		spriteRows: 8,
		spriteTime: 100,
		idle: [64, 64],
		idleDown: [0, 5],
		idleUp: [6, 11],
		walkDown: [16, 21],
		walkUp: [22, 27],
		attackDown: [32, 37],
		attackUp: [38, 43],
	},

	snake: {
		imageName: "images/units/snake.png",
		image: null,
		elixirNeeded: 2,
		lifeMax: 100,
		life: 0,
		moveSpeed: 2000,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 50,
		shootType: null,
		spriteSize: 128,
		spriteCols: 16,
		spriteRows: 8,
		spriteTime: 100,
		idle: [64, 64],
		idleDown: [0, 5],
		idleUp: [6, 11],
		walkDown: [16, 21],
		walkUp: [22, 27],
		attackDown: [32, 36],
		attackUp: [38, 42],
	},

	skull: {
		imageName: "images/units/skull.png",
		image: null,
		elixirNeeded: 2,
		lifeMax: 100,
		life: 0,
		moveSpeed: 2000,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 50,
		shootType: null,
		spriteSize: 128,
		spriteCols: 16,
		spriteRows: 8,
		spriteTime: 100,
		idle: [64, 64],
		idleDown: [0, 7],
		idleUp: [8, 15],
		walkDown: [16, 23],
		walkUp: [24, 31],
		attackDown: [32, 38],
		attackUp: [39, 45],
	},

	amazon: {
		imageName: "images/units/amazon.png",
		image: null,
		elixirNeeded: 2,
		lifeMax: 100,
		life: 0,
		moveSpeed: 2000,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 50,
		shootType: null,
		spriteSize: 128,
		spriteCols: 16,
		spriteRows: 8,
		spriteTime: 100,
		idle: [48, 48],
		idleDown: [0, 5],
		idleUp: [6, 11],
		walkDown: [16, 21],
		walkUp: [22, 27],
		attackDown: [32, 39],
		attackUp: [40, 47],
	},

	knight: {
		imageName: "images/units/knight.png",
		image: null,
		elixirNeeded: 2,
		lifeMax: 100,
		life: 0,
		moveSpeed: 2500,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 50,
		shootType: null,
		spriteSize: 128,
		spriteCols: 16,
		spriteRows: 8,
		spriteTime: 100,
		idle: [64, 64],
		idleDown: [0, 1],
		idleUp: [16, 17],
		walkDown: [0, 11],
		walkUp: [16, 27],
		attackDown: [32, 45],
		attackUp: [48, 61],
	},

	giant: {
		imageName: "images/units/giant.png",
		image: null,
		elixirNeeded: 2,
		lifeMax: 200,
		life: 0,
		moveSpeed: 4000,
		weaponSpeed: 1000,
		weaponDamage: 20,
		weaponRange: 50,
		shootType: null,
		spriteSize: 128,
		spriteCols: 16,
		spriteRows: 8,
		spriteTime: 100,
		idle: [64, 64],
		idleDown: [0, 1],
		idleUp: [16, 17],
		walkDown: [0, 15],
		walkUp: [16, 31],
		attackDown: [32, 40],
		attackUp: [48, 56],
	},

	musketeer: {
		imageName: "images/units/musketeer.png",
		image: null,
		elixirNeeded: 3,
		lifeMax: 100,
		life: 0,
		moveSpeed: 3000,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 70,
		shootType: "shoot1",
		spriteSize: 128,
		spriteCols: 16,
		spriteRows: 8,
		spriteTime: 100,
		idle: [64, 64],
		idleDown: [0, 1],
		idleUp: [16, 17],
		walkDown: [0, 11],
		walkUp: [16, 27],
		attackDown: [32, 41],
		attackUp: [48, 57],
	},

	hogRider: {
		imageName: "images/units/hogRider.png",
		image: null,
		elixirNeeded: 3,
		lifeMax: 100,
		life: 0,
		moveSpeed: 2000,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 50,
		shootType: null,
		spriteSize: 128,
		spriteCols: 16,
		spriteRows: 8,
		spriteTime: 100,
		idle: [64, 64],
		idleDown: [0, 1],
		idleUp: [16, 17],
		walkDown: [0, 7],
		walkUp: [16, 23],
		attackDown: [32, 41],
		attackUp: [48, 57],
	},

	tank: {
		imageName: "images/units/tank.png",
		image: null,
		elixirNeeded: 3,
		lifeMax: 100,
		life: 0,
		moveSpeed: 2000,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 50,
		shootType: "shoot2",
		spriteSize: 128,
		spriteCols: 16,
		spriteRows: 8,
		spriteTime: 100,
		idle: [64, 64],
		idleDown: [0, 0],
		idleUp: [16, 16],
		walkDown: [32, 32],
		walkUp: [48, 48],
		attackDown: [32, 32],
		attackUp: [48, 48],
	},
};

Unit.prototype.x = null;
Unit.prototype.y = null;
Unit.prototype.w = null;
Unit.prototype.h = null;

Unit.prototype.drawImage = function (ctx) {
	ctx.save();

	ctx.globalAlpha = this.animationAlpha.arrayResults[0];

	let sprite = Unit.types[this.type][this.state][0] + this.sprite;

	if (Unit.types[this.type].images) {
		ctx.drawImage(Unit.types[this.type].images[parseInt(sprite)], this.cx - 5, this.cy - 5, this.ww + 10, this.hh + 10);
	} else {
		let col = parseInt(sprite % this.spriteCols);
		let row = parseInt(sprite / this.spriteCols);

		ctx.drawImage(Unit.types[this.type].image, col * this.spriteSize + 2, row * this.spriteSize + 2, this.spriteSize - 4, this.spriteSize - 4, this.cx - 5, this.cy - 5, this.ww + 10, this.hh + 10);
	}

	// ctx.font = 'bold 15px Helvetica';
	// ctx.fillStyle = '#000000';
	// ctx.fillText(parseInt(this.sprite), this.cx, this.cy);

	ctx.restore();
};

Unit.prototype.drawLife = function (ctx) {
	ctx.save();

	let lifeWidth = ((this.ww - 40) / this.lifeMax) * this.life;

	ctx.beginPath();
	ctx.fillStyle = this.lifeFillStyle;
	ctx.rect(this.cx + 20, this.cy + this.h - 10, lifeWidth, 5);
	ctx.fill();

	ctx.beginPath();
	ctx.strokeStyle = this.lifeStrokeStyle;
	ctx.rect(this.cx + 20, this.cy + this.h - 10, lifeWidth, 5);
	ctx.stroke();

	ctx.restore();
};

Unit.prototype.drawWeaponRange = function (ctx) {
	ctx.save();

	ctx.fillStyle = "#00000033";
	ctx.beginPath();
	ctx.moveTo(this.cx + this.ww / 2, this.cy + this.h / 2);
	ctx.arc(this.cx + this.ww / 2, this.cy + this.h / 2, this.weaponRange, 1 * Math.PI * 2, 0 * Math.PI * 2);
	ctx.fill();

	ctx.restore();
};

Unit.prototype.drawLoading = function (ctx) {
	if (this.loading < 1) {
		ctx.save();

		ctx.fillStyle = "#ffffff88";
		ctx.beginPath();
		ctx.moveTo(this.cx + this.ww / 2, this.cy + this.hh / 2);
		ctx.arc(this.cx + this.ww / 2, this.cy + this.hh / 2, this.ww / 2, this.loading * Math.PI * 2, 0 * Math.PI * 2);
		ctx.fill();

		ctx.restore();
	}
};

Unit.prototype.drawAttack = function (ctx) {
	if (this.shoot != null) {
		this.shoot.draw(ctx);
	}
};

Unit.prototype.setWH = function (w, h) {
	this.w = w;
	this.h = h;
};

Unit.prototype.setXY = function (x, y) {
	this.x = x;
	this.y = y;
};

Unit.prototype.setOpacity = function (alpha1, alpha2, time) {
	this.alpha = alpha2;

	this.animationAlpha.setRoute(time, [[alpha1, alpha2]], spa.Animation.TIMING_EASE_OUT, spa.Animation.DIRECTION_FORWARD, 0, false, 0, false, null, []);
	this.animationAlpha.resume();
};

Unit.prototype.getOpacity = function () {
	return this.animationAlpha.arrayResults[0];
};

Unit.prototype.setScale = function (scale1, scale2, time) {
	this.scale = scale2;

	let animationTiming = scale2 > scale1 ? spa.Animation.TIMING_BOUNCE : spa.Animation.TIMING_EASE_OUT;

	this.animationScale.setRoute(time, [[scale1, scale2]], animationTiming, spa.Animation.DIRECTION_FORWARD, 0, false, 0, false, null, []);
	this.animationScale.resume();
};

Unit.prototype.getScale = function () {
	return this.animationScale.arrayResults[0];
};

Unit.prototype.setLoading = function (loading) {
	this.loading = loading;
};

Unit.prototype.setLifeColor = function (strokeStyle, fillStyle) {
	this.lifeStrokeStyle = strokeStyle;
	this.lifeFillStyle = fillStyle;
};

Unit.prototype.setWeaponRangeColor = function (fillStyle) {
	this.weaponRangeFillStyle = fillStyle;
};

Unit.prototype.isXYInsideUnit = function (x, y) {
	return x >= this.x - this.ww / 2 && y >= this.y - this.hh / 2 && x <= this.x + this.ww / 2 && y <= this.y + this.hh / 2;
};

Unit.prototype.isXYInsideWeaponRange = function (x, y) {
	return (x - this.x) * (x - this.x) + (y - this.y) * (y - this.y) <= this.weaponRange * this.weaponRange;
};

Unit.prototype.startAttacking = function (x, y) {
	this.isAttacking = true;

	if (this.shoot == null) {
		this.shoot = new Shoot(this.shootType);
		this.shoot.start(this.x, this.y, x, y, null, null, null);
	}

	this.shoot.setXY(this.x, this.y, x, y);
};

Unit.prototype.stopAttacking = function () {
	this.isAttacking = false;

	if (this.shoot != null) {
		this.shoot.stop();
		this.shoot = null;
	}
};

Unit.prototype.setState = function (state) {
	this.state = state;
	this.sprite = 0;
};

Unit.prototype.update = function (timeDif) {
	this.animationAlpha.calculate();
	this.animationScale.calculate();

	this.ww = this.w * this.animationScale.arrayResults[0];
	this.hh = this.h * this.animationScale.arrayResults[0];

	this.cx = this.x - this.ww / 2;
	this.cy = this.y - this.hh / 2;

	if (this.shoot != null) {
		this.shoot.update(timeDif);
	}

	let spriteMax = Unit.types[this.type][this.state][1] - Unit.types[this.type][this.state][0] + 1;
	this.sprite = Math.min(this.sprite + timeDif / this.spriteTime, spriteMax) % spriteMax;
};
