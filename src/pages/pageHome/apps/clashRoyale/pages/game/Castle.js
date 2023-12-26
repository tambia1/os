export const Castle = function (type) {
	this.type = type;

	for (const k in Castle.types[type]) {
		this[k] = Castle.types[type][k];
	}

	this.life = this.lifeMax;

	this.lifeStrokeStyle = "#ffffff66";
	this.lifeFillStyle = "#99999966";

	this.weaponRangeFillStyle = "#ffffff33";
	this.animationWeaponRangeAlpha = new spa.Animation();

	this.shoot = null;
	this.isAttacking = false;

	this.setWH(60, 60);
	this.setXY(0, 0);
};

Castle.types = {
	castleRuin: { imageName: "images/castles/castleRuin.webp", image: null, lifeMax: 0, life: 0, weaponSpeed: 0, weaponDamage: 0, weaponRange: 0, shootType: null },
	castle1: {
		imageName: "images/castles/castle1.webp",
		image: null,
		lifeMax: 150,
		life: 0,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 90,
		shootType: "shoot2",
	},
	castle2: {
		imageName: "images/castles/castle2.webp",
		image: null,
		lifeMax: 250,
		life: 0,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 70,
		shootType: "shoot2",
	},
	castle3: {
		imageName: "images/castles/castle3.webp",
		image: null,
		lifeMax: 350,
		life: 0,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 70,
		shootType: "shoot2",
	},
	castle4: {
		imageName: "images/castles/castle4.webp",
		image: null,
		lifeMax: 450,
		life: 0,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 70,
		shootType: "shoot2",
	},
	castle5: {
		imageName: "images/castles/castle5.webp",
		image: null,
		lifeMax: 550,
		life: 0,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 70,
		shootType: "shoot2",
	},
	castle6: {
		imageName: "images/castles/castle6.webp",
		image: null,
		lifeMax: 650,
		life: 0,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 70,
		shootType: "shoot2",
	},
	castle7: {
		imageName: "images/castles/castle7.webp",
		image: null,
		lifeMax: 750,
		life: 0,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 70,
		shootType: "shoot2",
	},
	castle8: {
		imageName: "images/castles/castle8.webp",
		image: null,
		lifeMax: 850,
		life: 0,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 70,
		shootType: "shoot2",
	},
	castle9: {
		imageName: "images/castles/castle9.webp",
		image: null,
		lifeMax: 950,
		life: 0,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 70,
		shootType: "shoot2",
	},
	castle10: {
		imageName: "images/castles/castle10.webp",
		image: null,
		lifeMax: 1050,
		life: 0,
		weaponSpeed: 1000,
		weaponDamage: 10,
		weaponRange: 70,
		shootType: "shoot2",
	},
};

Castle.prototype.x = null;
Castle.prototype.y = null;
Castle.prototype.w = null;
Castle.prototype.h = null;
Castle.prototype.life = null;

Castle.prototype.drawImage = function (ctx) {
	ctx.save();
	ctx.drawImage(Castle.types[this.type].image, this.cx, this.cy, this.w, this.h);
	ctx.restore();
};

Castle.prototype.drawWeaponRange = function (ctx) {
	if (this.life > 0) {
		ctx.save();

		ctx.globalAlpha = this.animationWeaponRangeAlpha.arrayResults[0];
		ctx.fillStyle = this.weaponRangeFillStyle;
		ctx.beginPath();
		ctx.arc(this.cx + this.w / 2, this.cy + this.h / 2, this.weaponRange, 1 * Math.PI * 2, 0 * Math.PI * 2);
		ctx.fill();

		ctx.restore();
	}
};

Castle.prototype.drawLife = function (ctx) {
	if (this.life > 0) {
		ctx.save();

		let lifeWidth = ((this.w - 20) / this.lifeMax) * this.life;

		ctx.beginPath();
		ctx.fillStyle = this.lifeFillStyle;
		ctx.rect(this.cx + 10, this.cy + this.h - 10, lifeWidth, 5);
		ctx.fill();

		ctx.beginPath();
		ctx.strokeStyle = this.lifeStrokeStyle;
		ctx.rect(this.cx + 10, this.cy + this.h - 10, lifeWidth, 5);
		ctx.stroke();

		ctx.restore();
	}
};

Castle.prototype.drawAttack = function (ctx) {
	if (this.shoot != null) {
		this.shoot.draw(ctx);
	}
};

Castle.prototype.setWH = function (w, h) {
	this.w = w;
	this.h = h;
};

Castle.prototype.setXY = function (x, y) {
	this.x = x;
	this.y = y;
};

Castle.prototype.setLifeColor = function (strokeStyle, fillStyle) {
	this.lifeStrokeStyle = strokeStyle;
	this.lifeFillStyle = fillStyle;
};

Castle.prototype.setWeaponRangeColor = function (fillStyle) {
	this.weaponRangeFillStyle = fillStyle;
};

Castle.prototype.isXYInsideWeaponRange = function (x, y) {
	return (x - this.x) * (x - this.x) + (y - this.y) * (y - this.y) <= this.weaponRange * this.weaponRange;
};

Castle.prototype.startAttacking = function (x, y) {
	this.isAttacking = true;

	if (this.shoot == null) {
		this.shoot = new Shoot(this.shootType);
		this.shoot.start(this.x, this.y, x, y, null, null, null);
	}

	this.shoot.setXY(this.x, this.y, x, y);
};

Castle.prototype.stopAttacking = function () {
	this.isAttacking = false;

	if (this.shoot != null) {
		this.shoot.stop();
		this.shoot = null;
	}
};

Castle.prototype.setWeaponRangeOpacity = function (alpha1, alpha2, time) {
	this.weaponRangeAlpha = alpha2;

	this.animationWeaponRangeAlpha.setRoute(time, [[alpha1, alpha2]], spa.Animation.TIMING_EASE_OUT, spa.Animation.DIRECTION_FORWARD, 0, false, 0, false, null, []);
	this.animationWeaponRangeAlpha.resume();
};

Castle.prototype.getWeaponRangeOpacity = function () {
	return this.animationWeaponRangeAlpha.arrayResults[0];
};

Castle.prototype.update = function (timeDif) {
	this.animationWeaponRangeAlpha.calculate();

	this.cx = this.x - this.w / 2;
	this.cy = this.y - this.h / 2;

	if (this.shoot != null) {
		this.shoot.update(timeDif);
	}

	this.weaponRangeAlpha += timeDif / this.weaponRangeAlphaTiming;
	this.weaponRangeAlpha = Math.min(this.weaponRangeAlpha, this.weaponRangeAlphaMax);
};
