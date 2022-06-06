"use strict";
exports.__esModule = true;
exports.User = void 0;
var Role;
(function (Role) {
    Role[Role["Admin"] = 1] = "Admin";
    Role[Role["User"] = 2] = "User";
})(Role || (Role = {}));
var User = /** @class */ (function () {
    function User(name, email, role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    Object.defineProperty(User.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getEmail", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setEmail", {
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getRole", {
        get: function () {
            return this.role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "setRole", {
        set: function (role) {
            this.role = role;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "getInfo", {
        get: function () {
            if (this.role === 1) {
                return "".concat(this.name, " is an admin");
            }
            else {
                return "".concat(this.name, " is a user");
            }
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.User = User;
