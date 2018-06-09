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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Module dependencies.
 */

var _app = __webpack_require__(1);

var _app2 = _interopRequireDefault(_app);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _http = __webpack_require__(13);

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = __webpack_require__(31)('loris:server');


/**
 * Normalize a port into a number, string, or false.
 */

var normalizePort = function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
};

/**
 * Event listener for HTTP server "error" event.
 */

var onError = function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

/**
 * Event listener for HTTP server "listening" event.
 */

var onListening = function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
};

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || _config2.default.port.server);
_app2.default.set('port', port);

/**
 * Create HTTP server.
 */

var server = _http2.default.createServer(_app2.default);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helmet = __webpack_require__(2);

var _helmet2 = _interopRequireDefault(_helmet);

var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _expressSession = __webpack_require__(5);

var _expressSession2 = _interopRequireDefault(_expressSession);

var _morgan = __webpack_require__(6);

var _morgan2 = _interopRequireDefault(_morgan);

var _httpErrors = __webpack_require__(7);

var _httpErrors2 = _interopRequireDefault(_httpErrors);

var _cookieParser = __webpack_require__(8);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _expressSocket = __webpack_require__(9);

var _expressSocket2 = _interopRequireDefault(_expressSocket);

var _index = __webpack_require__(10);

var _index2 = _interopRequireDefault(_index);

var _users = __webpack_require__(11);

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MongoStore = __webpack_require__(12)(_expressSession2.default);

var app = (0, _express2.default)();
app.use((0, _helmet2.default)());

var server = __webpack_require__(13).Server(app);
var io = __webpack_require__(14)(server); // add socket.io 'websockets'.
server.listen(_config2.default.port.socket); // listen for websockets on port 6660

app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());

//-| session |--------|
var session = (0, _expressSession2.default)({
    secret: _config2.default.security.cookie.secret,
    clear_interval: 3600,
    cookie: { // cookie stuff.
        maxAge: _config2.default.security.cookie.maxAge
    },
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
        url: _config2.default.database.mongodb.use === 'deployment' ? _config2.default.database.mongodb.deployment : _config2.default.database.mongodb.development,
        ttl: 7 * 24 * 60 * 60 // 7 days.
    })
});

app.use(session);

io.use((0, _expressSocket2.default)(session, {
    autoSave: true
}));

app.use('/', _index2.default);
app.use('/users', _users2.default);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, _httpErrors2.default)(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
});

//-| Socket.io Commands |-- -- -- -- -- -- -- -- -- [SEPARATOR] -|
io.on('connection', function (socket) {
    console.log('[*] Websocket connection found!' + '\n');

    var client = __webpack_require__(15);
    client.socketHandler(socket);
    /* socketHandler [events] list.
     *   'client_identity' 'client_register' 'disconnect' 'message' 'error'
     *   'client_ready' 'client_error'
     */

    var user = __webpack_require__(25);
    user.socketHandler(socket);
    /* socketHandler [events] list.
     *   'login'
     *   'logout'
     *   'register'
     *   'get_avatar'
     *   'update_avatar'
     *   'create_lyrics_transcription_request'
     */
});

module.exports = app;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    app: {
        name: 'Loris',
        version: '0.0.1',
        info: 'Open Science Platform'
    },
    port: {
        server: 7777,
        socket: 6666
    },
    security: {
        log: {
            enabled: false,
            fileName: 'loris_log'
        },
        cookie: {
            secret: '63iVzNwvZu3AHwxAjAw2UD9CYyC22vGgbGK86mcAXUXvxWNj3C',
            maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week cookie age.
        }
    },
    gcloud: {
        use: 'deployment',
        deployment: '/home/intralizee/Keys/intralizee.json',
        development: '/Users/intralizee/Development/Keys/intralizee.json'
    },
    database: {
        mysql: {
            use: 'development', // set to 'deployment' or 'development' to switch (development)
            deployment: '/home/intralizee/Keys/loris.json',
            development: '/Users/intralizee/Development/Keys/mysql/loris.json'
        },
        mongodb: {
            use: 'deployment', // set to 'deployment' or 'development' to switch (development)
            deployment: 'mongodb://alizee:gf338yZqLM7Cvsfp4EoX@ds153380.mlab.com:53380/loris',
            development: 'mongodb://127.0.0.1:27017/loris'
        }
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("http-errors");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express-socket.io-session");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send({ express: 'Hello From Express' });
});

router.get('/api/hello', function (req, res) {
    res.send({ express: 'Hello hi From Express' });
});

module.exports = router;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("connect-mongo");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alizée Wickenheiser on 6/8/18.
 * Les contes de fées sont faits pour être défaits...
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.socketHandler = socketHandler;

var _client_model = __webpack_require__(16);

var Client = _interopRequireWildcard(_client_model);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function socketHandler(socket) {

    /**
     * Send client_identity message.
     */
    socket.emit('client_identity', { socketid: socket.id.toString() });

    /**
     * Received client_identity message.
     */
    socket.on('client_identity', function (data) {

        data['socketId'] = socket.id.toString();

        Client.updateSocketID(data, function (auth) {
            if (auth.status === 201) {
                socket.emit('client_ready', {
                    api: 'connect',
                    status: auth.status,
                    socket: {
                        id: socket.id.toString(),
                        uuid: data.uuid
                    }
                });
                socket.join(data.uuid); // each socket can be reached by their uuid as channel.
            } else {
                socket.emit('client_error', {
                    api: 'connect',
                    status: auth.status,
                    socket: {
                        id: socket.id.toString(),
                        uuid: data.uuid
                    }
                });
            }
        });
    });

    /**
     * Received client_register message.
     */
    socket.on('client_register', function (data, fn) {
        if (data === undefined) data = {};

        data['socketId'] = socket.id.toString();

        Client.getUUID(socket, function (uuid) {
            Client.registerSocket(data, function (results) {
                try {
                    fn(results);
                } catch (error) {
                    console.log('client_register error: ' + error);
                }
            });
        });
    });

    /**
     * Received disconnect message.
     */
    socket.on('disconnect', function (data) {
        Client.getUUID(socket, function (uuid) {
            socket.broadcast.emit('message', {
                api: 'disconnect',
                client: uuid
            });
        });
    });

    /**
     * Received message.
     */
    socket.on('message', function (data) {
        if (data === undefined) data = {};else if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') data = JSON.parse(data);

        Client.getUUID(socket, function (uuid) {

            console.log(data.clients);

            var send = {
                sender: uuid,
                type: data.clients === ('all' || '*') ? 'broadcast' : 'message',
                message: data.message == null ? '' : data.message
            };

            console.log(JSON.stringify(send));

            if (data.clients === 'all' || data.clients === '*') // 'broadcast' message to everyone
                socket.broadcast.emit('message', send);else {
                var clients = data.clients;
                if (typeof clients === 'string') clients = [clients];
                clients.forEach(function (client) {
                    Client.getSocketID(client, function (socketId) {
                        console.log('[*] sent message to client with socketId: ', socketId);
                        socket.to(socketId).emit('message', send);
                    });
                    //console.log('broadcasting to client channel: ' + client);
                    //socket.broadcast.to(client).emit('message', send); // 'channel' message to specific clients
                });
            }
        });
    });

    /**
     * Socket error occurred.
     */
    socket.on('error', function (error) {
        console.log('socket error: ' + error);
    });
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alizée Wickenheiser on 6/8/18.
 * Les contes de fées sont faits pour être défaits...
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUUID = getUUID;
exports.getSocketID = getSocketID;
exports.updateSocketID = updateSocketID;
exports.registerSocket = registerSocket;

var _mongodb = __webpack_require__(17);

/**
 * @name getUUID
 * @description Get UUID of socket supplied.
 * @param socket
 * @param cb
 */
function getUUID(socket, cb) {
    _mongodb.Clients.findOne({
        socketID: socket.id.toString()
    }, function (err, client) {
        if (err || client == null) return cb({});
        return cb(client.uuid);
    });
}

/**
 * @name getSocketID
 * @description Get Socket ID by UUID supplied.
 * @param uuid
 * @param cb
 */
function getSocketID(uuid, cb) {
    _mongodb.Clients.findOne({
        uuid: uuid
    }, function (err, client) {
        if (err || client == null) return cb({});
        return cb(client.socketID);
    });
}

/**
 * @name updateSocketID
 * @description Update Socket ID for socket supplied.
 * @param socket
 * @param cb
 */
function updateSocketID(socket, cb) {
    _mongodb.Clients.update({
        uuid: socket.uuid,
        token: socket.token
    }, {
        $set: { socketID: socket.socketID,
            online: true,
            timestamp: new Date().getTime() }
    }, {
        upsert: true
    }, function (err, client) {
        if (err) return cb({ uuid: socket.uuid, status: 401 }); // update error
        return cb({ uuid: socket.uuid, status: 201 }); // SocketID and presence updated for device
    });
}

/**
 * @name registerSocket
 * @description Register Socket by user object supplied.
 * @param data
 * @param cb
 */
function registerSocket(data, cb) {
    var uuid = __webpack_require__(24);
    data.uuid = data.uuid ? data.uuid : uuid.v4();

    /**
     * @name generateToken
     * @description generates random token of length 50
     * @returns {string}
     */
    var generateToken = function generateToken() {
        var rand = function rand() {
            // remove `0.' from '0.au34...` to get 'au34...
            return Math.random().toString(36).substr(2);
        };
        return (rand() + rand() + rand()).toString().substr(0, 50);
    };

    var channel = data.channel ? data.channel : 'main';
    var token = data.token ? data.token : generateToken();

    _mongodb.Clients.findOne({ uuid: data.uuid }, function (err, client) {
        if (client) {
            // exists in collection.
            data.uuid = uuid.v4();
        }
        client = new _mongodb.Clients({
            uuid: data.uuid,
            timestamp: new Date().getTime(),
            token: token,
            channel: channel,
            online: true
        });
        client.save(function (err, client) {
            if (err) {
                // client not registered.
                cb({
                    errors: [{
                        message: 'Client not registered',
                        code: 500
                    }]
                });
            } else {
                // client registered.
                cb(client);
            }
        });
    });
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alizée Wickenheiser on 6/9/18.
 * Les contes de fées sont faits pour être défaits...
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PublicKeys = exports.Forges = exports.Clients = exports.User = exports.Market = undefined;

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _client = __webpack_require__(18);

var _user = __webpack_require__(19);

var _market = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mongoose = __webpack_require__(21),
    paginate = __webpack_require__(22),
    AutoIncrement = __webpack_require__(23)(mongoose);

mongoose.Promise = global.Promise;
mongoose.connect(_config2.default.database.mongodb.use === 'deployment' ? _config2.default.database.mongodb.deployment : _config2.default.database.mongodb.development);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB -> connection error: '));

db.once('open', function (cb) {
    console.log('MongoDB -> open');
    _config2.default.database.mongodb.use === 'deployment' ? console.log('MongoDB -> URI: ' + _config2.default.database.mongodb.deployment) : console.log('MongoDB URL -> ' + _config2.default.database.mongodb.development);
});

// When the mongodb server goes down, mongoose emits a 'disconnected' event
mongoose.connection.on('disconnected', function () {
    console.log('MongoDB -> lost connection');
});
// The driver tries to automatically reconnect by default, so when the
// server starts the driver will reconnect and emit a 'reconnect' event.
mongoose.connection.on('reconnect', function () {
    console.log('MongoDB -> reconnected');
});

// Mongoose will also emit a 'connected' event along with 'reconnect'. These
// events are interchangeable.
mongoose.connection.on('connected', function () {
    console.log('MongoDB -> connected');
});

_market.Schema_Market.plugin(AutoIncrement);
_market.Schema_Market.plugin(paginate);

var Market = exports.Market = mongoose.model('Market', _market.Schema_Market);

var User = exports.User = mongoose.model('User', _user.Schema_User);
var Clients = exports.Clients = mongoose.model('Client', _client.Schema_Client);

var Forges = exports.Forges = mongoose.model('Forge', _client.Schema_Forge);
var PublicKeys = exports.PublicKeys = mongoose.model('PublicKeys', _client.Schema_PublicKeys);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alizée Wickenheiser on 6/9/18.
 * Les contes de fées sont faits pour être défaits...
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});
var Schema_Client = mongoose.Schema({
    socketId: String,
    uuid: String,
    token: String,

    channel: String,
    online: false,

    timestamp: Date
});

var Schema_PublicKeys = mongoose.Schema({
    socket_id: String,
    publicKeyServer: String,
    secretKeyServer: String
});

var Schema_Forge = mongoose.Schema({
    socket_id: String,
    key: String,
    iv: String
});

exports.Schema_Client = Schema_Client;
exports.Schema_PublicKeys = Schema_PublicKeys;
exports.Schema_Forge = Schema_Forge;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alizée Wickenheiser on 6/9/18.
 * Les contes de fées sont faits pour être défaits...
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});
var Schema_User = mongoose.Schema({
    username: String,
    gender: String,
    password: String,
    avatar: String,
    currency: {
        type: String,
        default: '$0.00'
    },
    name: {
        title: String,
        first: String,
        last: String
    },
    location: {
        street: String,
        city: String,
        state: String,
        postal_code: String,
        country: String
    },
    contact: {
        phone: {
            cell: String,
            home: String
        },
        email: String
    },
    info: {
        birthday: String,
        ip: {
            login: {
                now: String,
                previous: String,
                history: {
                    type: Array,
                    default: []
                }
            }
        },
        date: {
            registration: {
                type: Date,
                default: Date.now
            },
            login: {
                now: Date,
                previous: Date,
                history: {
                    type: Array,
                    default: []
                }
            }
        }
    }
});

exports.Schema_User = Schema_User;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alizée Wickenheiser on 6/9/18.
 * Les contes de fées sont faits pour être défaits...
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});
var Schema_Market = mongoose.Schema({
    _id: Number,
    id: String,
    name: String,
    album: String,
    artist: String,
    language: {
        song: {
            name: String,
            native: String,
            code: String
        },
        transcribe: {
            name: String,
            native: String,
            code: String
        }
    },
    album_art: String,
    username: String,
    lyrics_id: String,
    likes: String,
    bounty: {
        total: String,
        details: Array
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { _id: false });

exports.Schema_Market = Schema_Market;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("mongoose-paginate");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("mongoose-sequence");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alizée Wickenheiser on 6/9/18.
 * Les contes de fées sont faits pour être défaits...
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = login;
exports.register = register;
exports.logout = logout;
exports.authorize = authorize;
exports.isLogin = isLogin;
exports.socketHandler = socketHandler;

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _user_model = __webpack_require__(26);

var User = _interopRequireWildcard(_user_model);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//-| login |------------------------------|
function login(req, res, next) {
    if (req.session.user) return res.redirect('/home');

    var user = {
        username: req.body.username,
        password: req.body.password,
        ip: __webpack_require__(30).getClientIp(req)
    };

    User.authenticate(user, function (err, dbUser) {
        if (err) return next(err);
        if (dbUser) {
            // details correct - login user.
            req.session.user = {
                id: dbUser.id,
                username: dbUser.username
            };
            res.redirect('/home');
        } else {
            // incorrect details
            res.redirect('/login');
        }
    });
}

//-| register |------------------------------|
function register(req, res, next) {
    if (req.session.user) return res.redirect('/home');

    var user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        gender: req.body.gender,
        ip: __webpack_require__(30).getClientIp(req)
    };

    User.register(user, function (err, status) {
        if (err) return next(err);
        if (status == 'email already exists error') res.redirect('/register');else if (status === 'user already exists error') res.redirect('/register');else {
            // Create account.
            User.create(user, function (err, dbUser) {
                if (err) {
                    console.log('register create error: ' + err);
                    return next(err);
                } else {
                    User.authenticate(user, function (err, dbUser) {
                        if (err) {
                            console.log('user.authenticate error: ' + err);
                            return next(err);
                        } else if (user) {
                            req.session.user = {
                                id: dbUser.id,
                                username: dbUser.username
                            };
                            res.redirect('/home');
                        } else {
                            res.redirect('/login');
                        }
                    });
                }
            });
        }
    });
}

//-| logout |------------------------------|
function logout(req, res, next) {
    delete req.session.user;
    res.redirect('/home');
}

//-| authorize address to only registered users |--|
function authorize(req, res, next) {
    if (req.session.user) next();else res.redirect('/login');
}

function isLogin(req, res, next) {
    if (req.session.user) res.redirect('/home');else next();
}

//-| socket handler |------------------|
function socketHandler(socket) {

    socket.on('login', function (data) {

        var user = {
            username: data.username,
            password: data.password,
            ip: socket.request.connection.remoteAddress
        };

        User.authenticate(user, function (err, dbUser) {
            if (err) {
                // handle error.
                console.log('socket.login error: ' + err);
                socket.emit('failure', {
                    api: 'login',
                    status: 'service offline',
                    socketid: socket.id.toString(),
                    session: socket.handshake.session
                });
            }
            if (dbUser) {
                // credentials correct - login user.
                console.log('user data ' + JSON.stringify(dbUser));
                socket.handshake.session.user = {
                    id: dbUser.id,
                    username: dbUser.username
                };
                console.log('session data ' + JSON.stringify(socket.handshake.session.user));
                socket.handshake.session.save();
                socket.emit('success', {
                    api: 'login',
                    status: 'online',
                    details: {
                        currency: dbUser.currency
                    },
                    socketid: socket.id.toString(),
                    session: socket.handshake.session
                });
            } else {
                // credentials incorrect - login failed.
                socket.emit('failure', {
                    api: 'login',
                    status: 'incorrect details',
                    socketid: socket.id.toString(),
                    session: socket.handshake.session
                });
            }
        });
    });

    socket.on('logout', function () {
        if (socket.handshake.session.user != null) {
            if (socket.handshake.session.user) {
                delete socket.handshake.session.user;
                socket.handshake.session.save();
            }
            socket.emit('success', {
                api: 'logout',
                status: 'user session removed',
                socketid: socket.id.toString(),
                session: socket.handshake.session
            });
        }
    });

    socket.on('register', function (data) {
        console.log('on register has just ran');
        var user = {
            username: data.username,
            password: data.password,
            email: data.email,
            gender: data.gender,
            ip: socket.request.connection.remoteAddress
        };
        User.register(user, function (err, status) {
            if (err) {
                console.log('socket.register error: ' + err);
                socket.emit('failure', {
                    api: 'register',
                    status: 'service offline',
                    socketid: socket.id.toString(),
                    session: socket.handshake.session
                });
            } else if (status === 'email already exists error') {
                socket.emit('failure', {
                    api: 'register',
                    status: 'email exists',
                    socketid: socket.id.toString(),
                    session: socket.handshake.session
                });
            } else if (status === 'user already exists error') {
                socket.emit('failure', {
                    api: 'register',
                    status: 'username exists',
                    socketid: socket.id.toString(),
                    session: socket.handshake.session
                });
            } else {
                // Create account.
                User.create(user, function (err, user) {
                    if (err) {
                        console.log('socket.create error: ' + err);
                        socket.emit('failure', {
                            api: 'register',
                            status: 'service offline',
                            socketid: socket.id.toString(),
                            session: socket.handshake.session
                        });
                    } else {
                        User.authenticate(user, function (err, dbUser) {
                            if (err) {
                                // handle error.
                                console.log('socket.login error: ' + err);
                                socket.emit('failure', {
                                    api: 'login',
                                    status: 'service offline',
                                    socketid: socket.id.toString(),
                                    session: socket.handshake.session
                                });
                            }
                            if (dbUser) {
                                // credentials correct - login user.
                                socket.handshake.session.user = {
                                    id: dbUser.id,
                                    username: dbUser.username
                                };
                                socket.handshake.session.save();
                                socket.emit('success', {
                                    api: 'login',
                                    status: 'online',
                                    details: {
                                        currency: dbUser.currency
                                    },
                                    socketid: socket.id.toString(),
                                    session: socket.handshake.session
                                });
                            }
                        });
                    }
                });
            }
        });
    });

    socket.on('get_avatar', function (data) {
        User.getUsersAvatars(data.usernames, function (err, result) {
            if (err) {
                console.log('get_avatar err ' + err);
                socket.emit('failure', {
                    api: 'avatar',
                    status: 'fetched avatars failed',
                    avatars: result,
                    socketid: socket.id.toString(),
                    session: socket.handshake.session
                });
            } else {
                socket.emit('success', {
                    api: 'avatar',
                    status: 'avatars fetched',
                    avatars: result,
                    socketid: socket.id.toString(),
                    session: socket.handshake.session
                });
            }
        });
    });

    socket.on('update_avatar', function (data) {
        if (socket.handshake.session.user != null) {
            if (socket.handshake.session.user.username === data.username) {
                User.updateUserAvatar(data, function (err, result) {
                    if (err) {
                        console.log('update_avatar error: ' + err);
                        socket.emit('failure', {
                            api: 'avatar',
                            status: 'failed to update avatar',
                            socketid: socket.id.toString(),
                            session: socket.handshake.session
                        });
                    } else {
                        socket.emit('success', {
                            api: 'avatar',
                            status: 'updated avatar',
                            socketid: socket.id.toString(),
                            session: socket.handshake.session
                        });
                    }
                });
            }
        }
    });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by Alizée Wickenheiser on 6/9/18.
 * Les contes de fées sont faits pour être défaits...
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.create = create;
exports.remove = remove;
exports.register = register;
exports.authenticate = authenticate;
exports.get = get;
exports.all = all;
exports.getUsersAvatars = getUsersAvatars;
exports.updateUserAvatar = updateUserAvatar;

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mongodb = __webpack_require__(17);

var _bcryptjs = __webpack_require__(27);

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _fs = __webpack_require__(28);

var _fs2 = _interopRequireDefault(_fs);

var _storage = __webpack_require__(29);

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gcs = (0, _storage2.default)({
    projectId: 'intralizee',
    keyFilename: _config2.default.gcloud.use === 'deployment' ? _config2.default.gcloud.deployment : _config2.default.gcloud.development
}),
    bucket_avatars = gcs.bucket('loris-user-avatars');

function create(user, cb) {
    var dbUser = new _mongodb.User({
        username: user.username,
        password: hash(user.password),
        gender: user.gender,
        currency: '$0.00',
        contact: {
            email: user.email
        }
    });
    dbUser.save(function (err) {
        if (err) cb(err);else cb(null, dbUser);
    });
}

function remove(id, cb) {
    _mongodb.User.remove({ _id: id }, function (err) {
        cb(err);
    });
}

function register(user, cb) {
    if (user.username && user.email && user.password) {
        _mongodb.User.findOne({ 'contact.email': user.email }, function (err, dbUser) {
            if (err) return cb(err);
            if (dbUser) cb(null, 'email already exists error');else _mongodb.User.findOne({ username: user.username }, function (err, dbUser) {
                if (err) return cb(err);
                if (dbUser) cb(null, 'user already exists error');else cb();
            });
        });
    } else {
        cb('error');
    }
}

function authenticate(user, cb) {
    _mongodb.User.findOne({ username: user.username }, '-gender -avatar -name -location -contact -__v', function (err, dbUser) {
        if (err) cb(err);else if (dbUser && _bcryptjs2.default.compareSync(user.password, dbUser.password)) {
            storeLoginInformation(dbUser, user.ip);
            cb(null, dbUser);
        } else cb(null);
    });
}

//-| get user by id |----------------------|
function get(id, cb) {
    _mongodb.User.findOne({ _id: id }, function (err, user) {
        if (err) cb(err);else cb(user);
    });
}

//-| get all users |-------------------|
function all(cb) {
    _mongodb.User.find({}, function (err, users) {
        if (err) cb(err);else cb(users);
    });
}

//-| hash data 'a string' |----------------|
var hash = function hash(data) {
    return _bcryptjs2.default.hashSync(data, 8);
};

//-| store user IP Address and time of login.
var storeLoginInformation = function storeLoginInformation(user, ip) {
    if (user.info.ip.login.now != null) user.info.ip.previous = user.info.ip.now;
    if (user.info.date.login.now != null) user.info.date.login.previous = user.info.date.login.now;
    user.info.date.login.now = Date.now();
    user.info.date.login.history.push({
        date: Date.now()
    });
    user.info.ip.login.now = ip;
    user.info.ip.login.history.push({
        ip: ip
    });
    user.save();
};

function getUsersAvatars(users, cb) {
    var search = [];
    for (var i in users) {
        search.push({ username: users[i] });
    } // Search for {username: example1}, {username: example2}, ...
    _mongodb.User.find({
        '$or': search
    }, '-gender -password -name -location -contact -info -__v -_id', function (err, result) {
        if (err) cb(err);
        console.log('result is ' + result);
        cb(null, result);
    });
}

function updateUserAvatar(data, cb) {
    _mongodb.User.findOne({ username: data.username }, function (err, user) {
        if (err) cb(err);
        if (user) {
            //user.avatar = data.avatar;
            _fs2.default.writeFile('./lib/user/avatars_tmp/' + user.username, data.avatar, { flag: 'w' }, function (err) {
                if (err) console.log('writing file err: ' + err);else {
                    console.log('file written');

                    bucket_avatars.upload('./lib/user/avatars_tmp/' + user.username, function (err, file) {
                        if (err) console.log('upload avatar err: ' + err);else {
                            console.log('its now in my bucket');
                            user.avatar = 'https://storage.googleapis.com/lyrics-user-avatars/' + user.username;
                            _fs2.default.unlink('./lib/user/avatars_tmp/' + user.username, function (err) {
                                if (err) console.log('delete avatar err: ' + err);
                            });
                            user.save(function (err) {
                                if (err) cb(err);
                                cb(null, 'success');
                            });
                        }
                    });
                }
            });
        }
    });
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@google-cloud/storage");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("request-ip");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ })
/******/ ]);