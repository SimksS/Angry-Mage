/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/Base_Platform.png":
/*!***********************************!*\
  !*** ./src/img/Base_Platform.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d1f925f84354152f78fd1a290f882263.png");

/***/ }),

/***/ "./src/img/Big_Platform.png":
/*!**********************************!*\
  !*** ./src/img/Big_Platform.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "607562107f6864ec554a9b2f8405373f.png");

/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ec2374e44f470ac3c4f813d0ad3c0227.png");

/***/ }),

/***/ "./src/img/mageStanding.png":
/*!**********************************!*\
  !*** ./src/img/mageStanding.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4c45b50f8156a94c2f7b72cffaba9578.png");

/***/ }),

/***/ "./src/img/minor_platform.png":
/*!************************************!*\
  !*** ./src/img/minor_platform.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e4f322baa9bc9ef1c9fffcd60b916076.png");

/***/ }),

/***/ "./src/img/standLeft.png":
/*!*******************************!*\
  !*** ./src/img/standLeft.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0474951e23af3617db90d5d433a89574.png");

/***/ }),

/***/ "./src/img/walkingLeft.png":
/*!*********************************!*\
  !*** ./src/img/walkingLeft.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "09a8882272ec98db650042e1ff8a12b5.png");

/***/ }),

/***/ "./src/img/walkingRight.png":
/*!**********************************!*\
  !*** ./src/img/walkingRight.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "123ac1a38749246e907b36ed481e1ed8.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/minor_platform.png */ "./src/img/minor_platform.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_Big_Platform_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/Big_Platform.png */ "./src/img/Big_Platform.png");
/* harmony import */ var _img_Base_Platform_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/Base_Platform.png */ "./src/img/Base_Platform.png");
/* harmony import */ var _img_mageStanding_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/mageStanding.png */ "./src/img/mageStanding.png");
/* harmony import */ var _img_standLeft_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/standLeft.png */ "./src/img/standLeft.png");
/* harmony import */ var _img_walkingRight_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/walkingRight.png */ "./src/img/walkingRight.png");
/* harmony import */ var _img_walkingLeft_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/walkingLeft.png */ "./src/img/walkingLeft.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// ------------------- VARIAVEIS GLOBAIS ---------------------------------------------------------------------------------------------------------








var canvas = document.querySelector("canvas");
var c = canvas.getContext('2d'); //para renderização 2d ou 3d, por exemplo.Referencia do tipo de desenho associado ao canvas
canvas.width = 1024;
canvas.height = 576;
var gravity = 0.5;

// --------------------------------------------- PLAYER CONSTRUTOR ---------------------------------------------------------------------------------
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.speed = 1;
    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.jump = 0;
    this.width = 120;
    this.height = 150;
    this.image = createImage(_img_mageStanding_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: createImage(_img_mageStanding_png__WEBPACK_IMPORTED_MODULE_4__["default"]),
        left: createImage(_img_standLeft_png__WEBPACK_IMPORTED_MODULE_5__["default"]),
        cropRight: -65,
        frames: 75,
        width: 438,
        height: 576
      },
      run: {
        right: createImage(_img_walkingRight_png__WEBPACK_IMPORTED_MODULE_6__["default"]),
        left: createImage(_img_walkingLeft_png__WEBPACK_IMPORTED_MODULE_7__["default"]),
        cropRight: -10,
        frames: 70,
        width: 438,
        height: 523
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.cropY = this.sprites.stand.cropRight;
    this.maxFrames = this.sprites.stand.frames;
    this.cutHeight = this.sprites.stand.height;
    this.cutWidth = this.sprites.stand.width;
  }
  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.currentSprite, this.cutWidth * this.frames, this.cropY, this.cutWidth, this.cutHeight, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.frames++;
      if (this.frames > this.maxFrames) this.frames = 0;
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y < canvas.height) {
        this.velocity.y += gravity;
      }
    }
  }]);
  return Player;
}(); // ----------------------------------------- CONSTRUTOR PLATAFORMAS -----------------------------------------------------------------------------------
var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
      y = _ref.y,
      image = _ref.image;
    _classCallCheck(this, Platform);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return Platform;
}(); // -------------------------------------------------------- DESENHAR PLATAFORMAS --------------------------------------------------------------
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

// ------------------------------------------------ CONSTRUTOR CENARIO ---------------------------------------------------------------------
var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
      y = _ref2.y,
      image = _ref2.image;
    _classCallCheck(this, GenericObject);
    this.position = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }
  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);
  return GenericObject;
}(); // -------------------------------------------- VARIAVEIS GLOBAIS ---------------------------------------------------------------------------------
var genericObjects = [new GenericObject({
  x: 0,
  y: 0,
  image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};

// --------------------------------------- COORDENADAS CARTESIANAS DAS PLATAFORMAS -----------------------------------------------------------------
var bases = [new Platform({
  x: -3,
  y: 540,
  image: createImage(_img_Big_Platform_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new Platform({
  x: 1500,
  y: 450,
  image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: 1900,
  y: 420,
  image: createImage(_img_Base_Platform_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new Platform({
  x: 3000,
  y: 300,
  image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: 3800,
  y: 450,
  image: createImage(_img_Base_Platform_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new Platform({
  x: 5000,
  y: 500,
  image: createImage(_img_Big_Platform_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new Platform({
  x: 6500,
  y: 450,
  image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: 7000,
  y: 400,
  image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: 7500,
  y: 350,
  image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: 8000,
  y: 300,
  image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: 8700,
  y: 480,
  image: createImage(_img_Base_Platform_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new Platform({
  x: 10000,
  y: 430,
  image: createImage(_img_Big_Platform_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new Platform({
  x: 11550,
  y: 320,
  image: createImage(_img_Base_Platform_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new Platform({
  x: 12800,
  y: 250,
  image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: 13300,
  y: 250,
  image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: 13800,
  y: 250,
  image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: 14500,
  y: 250,
  image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: 15000,
  y: 120,
  image: createImage(_img_Base_Platform_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new Platform({
  x: 16000,
  y: 300,
  image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: 16900,
  y: 250,
  image: createImage(_img_Base_Platform_png__WEBPACK_IMPORTED_MODULE_3__["default"])
}), new Platform({
  x: 18100,
  y: 365,
  image: createImage(_img_Big_Platform_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new Platform({
  x: 20000,
  y: 520,
  image: createImage(_img_Big_Platform_png__WEBPACK_IMPORTED_MODULE_2__["default"])
})];
var person = new Player();
var scrollOffset = 0;

// ---------------------------------------------------------- RESPAWN PERSONAGEM --------------------------------------------------------------------
function init() {
  genericObjects = [new GenericObject({
    x: 0,
    y: 0,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  bases = [new Platform({
    x: -3,
    y: 540,
    image: createImage(_img_Big_Platform_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new Platform({
    x: 1500,
    y: 450,
    image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 1900,
    y: 420,
    image: createImage(_img_Base_Platform_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: 3000,
    y: 300,
    image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 3800,
    y: 450,
    image: createImage(_img_Base_Platform_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: 5000,
    y: 500,
    image: createImage(_img_Big_Platform_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new Platform({
    x: 6500,
    y: 450,
    image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 7000,
    y: 400,
    image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 7500,
    y: 350,
    image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 8000,
    y: 300,
    image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 8700,
    y: 480,
    image: createImage(_img_Base_Platform_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: 10000,
    y: 430,
    image: createImage(_img_Big_Platform_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new Platform({
    x: 11550,
    y: 320,
    image: createImage(_img_Base_Platform_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: 12800,
    y: 250,
    image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 13300,
    y: 250,
    image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 13800,
    y: 250,
    image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 14500,
    y: 250,
    image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 15000,
    y: 120,
    image: createImage(_img_Base_Platform_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: 16000,
    y: 300,
    image: createImage(_img_minor_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
  }), new Platform({
    x: 16900,
    y: 250,
    image: createImage(_img_Base_Platform_png__WEBPACK_IMPORTED_MODULE_3__["default"])
  }), new Platform({
    x: 18100,
    y: 365,
    image: createImage(_img_Big_Platform_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new Platform({
    x: 20000,
    y: 520,
    image: createImage(_img_Big_Platform_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  })];
  person = new Player();
  scrollOffset = 0;
}
animate();

// ------------------------------------------ UPDATE MOVIMENTAÇÃO E COMPARATIVOS -----------------------------------------------------------------------

function animate() {
  genericObjects.forEach(function (GenericObject) {
    GenericObject.draw();
  });
  bases.forEach(function (base) {
    base.draw();
  });
  person.update();
  requestAnimationFrame(animate); //faz com que função tenha uma atualização constante, sem depender de que o navegador atualize.Geralmente a taxa é de 60fps  
  if (keys.right.pressed && person.position.x < 450 && scrollOffset < 10150) {
    person.velocity.x = person.speed * 0.30;
  } else if (keys.left.pressed && person.position.x > 100) {
    person.velocity.x = -person.speed;
  } else {
    person.velocity.x = 0;
  }
  if (keys.right.pressed && scrollOffset < 10150) {
    scrollOffset += 5;
    bases.forEach(function (base) {
      base.position.x -= 10;
    });
  } else if (keys.left.pressed && scrollOffset > 0) {
    scrollOffset -= 5;
    bases.forEach(function (base) {
      base.position.x += 10;
    });
  }

  //Detectar colisão com a base
  bases.forEach(function (base) {
    if (person.position.y + person.height <= base.position.y && person.position.y + person.height + person.velocity.y >= base.position.y && person.position.x + person.width >= base.position.x && person.position.x <= base.position.x + base.width) {
      person.velocity.y = 0;
      person.jump = 0;
    }
  });
  if (person.position.y > canvas.height) {
    init();
  }
}

// ---------------------------------------------------------- MOVIMENTOS ---------------------------------------------------------------------------------------------

addEventListener("keydown", function (_ref3) {
  var keyCode = _ref3.keyCode;
  //O "keyCode é referente ao código da tecla pressionada que acionou o eventListener." 
  switch (keyCode) {
    case 65:
    case 37:
      keys.left.pressed = true;
      person.currentSprite = person.sprites.run.left;
      person.cropY = person.sprites.run.cropRight;
      person.maxFrames = person.sprites.run.frames;
      person.cutHeight = person.sprites.run.height;
      person.cutWidth = person.sprites.run.width;
      break;
    case 68:
    case 39:
      keys.right.pressed = true;
      person.currentSprite = person.sprites.run.right;
      person.cropY = person.sprites.run.cropRight;
      person.maxFrames = person.sprites.run.frames;
      person.cutHeight = person.sprites.run.height;
      person.cutWidth = person.sprites.run.width;
      break;
  }
});
addEventListener("keyup", function (_ref4) {
  var keyCode = _ref4.keyCode;
  // O "keyCode é referente ao código da tecla pressionada que acionou o eventListener." 
  switch (keyCode) {
    case 87:
    case 38:
    case 32:
      if (person.jump < 2) {
        person.velocity.y -= 13;
        person.jump += 1;
      }
      break;
    case 65:
    case 37:
      keys.left.pressed = false;
      person.currentSprite = person.sprites.stand.left;
      person.cropY = person.sprites.stand.cropRight;
      person.maxFrames = person.sprites.stand.frames;
      person.cutHeight = person.sprites.stand.height;
      person.cutWidth = person.sprites.stand.width;
      break;
    case 83:
    case 40:
      person.velocity.y += 10;
      break;
    case 68:
    case 39:
      keys.right.pressed = false;
      person.currentSprite = person.sprites.stand.right;
      person.cropY = person.sprites.stand.cropRight;
      person.maxFrames = person.sprites.stand.frames;
      person.cutHeight = person.sprites.stand.height;
      person.cutWidth = person.sprites.stand.width;
      break;
  }
});
// --------------------------------------------------------------------------------------------------------------------------------------------------------

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map