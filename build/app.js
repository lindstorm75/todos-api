"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Todo_1 = require("./models/Todo");
var app = express_1.default();
var PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get("/", function (req, res) {
    res.send("Hello world!");
});
app.get("/todos", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                Todo_1.connectDB();
                return [4 /*yield*/, Todo_1.TodoModel.find({})];
            case 1:
                data = _a.sent();
                result = data.map(function (data) {
                    var newObj = {};
                    newObj.id = data.id;
                    newObj.username = data.username;
                    newObj.title = data.title;
                    newObj.completed = data.completed;
                    return newObj;
                });
                res.status(200).json(result);
                return [2 /*return*/];
        }
    });
}); });
app.get("/todos/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                Todo_1.connectDB();
                id = +req.params.id;
                return [4 /*yield*/, Todo_1.TodoModel.findOne({ id: id })];
            case 1:
                result = _a.sent();
                res.status(200).json(result || {});
                return [2 /*return*/];
        }
    });
}); });
app.post("/todos/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var username, title, last, id, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                username = req.body.username, title = req.body.title;
                if (req.body._id)
                    delete req.body._id;
                if (req.body.id)
                    delete req.body.id;
                if (!(!username || !title)) return [3 /*break*/, 1];
                res.status(400).json({ message: "Bad request." });
                return [3 /*break*/, 4];
            case 1:
                Todo_1.connectDB();
                return [4 /*yield*/, Todo_1.TodoModel.find().sort({ id: -1 }).limit(1)];
            case 2:
                last = (_a.sent())[0];
                id = last === undefined ? 1 : Number(last.id) + 1;
                data = {
                    id: id, username: username, title: title,
                    completed: false
                };
                return [4 /*yield*/, Todo_1.TodoModel.create(data)];
            case 3:
                _a.sent();
                res.status(200).json(data);
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
app.put("/todos/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, todo, key, newObj, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = +req.params.id;
                if (req.body._id)
                    delete req.body._id;
                if (req.body.id)
                    delete req.body.id;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Todo_1.TodoModel.findOneAndUpdate({ id: id }, req.body)];
            case 2:
                todo = _b.sent();
                for (key in req.body)
                    todo[key] = req.body[key];
                newObj = {};
                newObj.id = todo.id;
                newObj.username = todo.username;
                newObj.title = todo.title;
                newObj.completed = todo.completed;
                res.status(200).json(newObj);
                return [3 /*break*/, 4];
            case 3:
                _a = _b.sent();
                res.status(404).json({ message: "Not found." });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.delete("/todos/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = +req.params.id;
                return [4 /*yield*/, Todo_1.TodoModel.deleteOne({ id: id })];
            case 1:
                _a.sent();
                res.status(200).json({ message: "Successfully deleted." });
                return [2 /*return*/];
        }
    });
}); });
app.listen(PORT, function () { return console.log("Server's up and running at port: " + PORT); });
