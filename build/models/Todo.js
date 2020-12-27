"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModel = exports.connectDB = void 0;
var mongoose_1 = __importStar(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var URI = process.env.URI;
mongoose_1.default.set('useFindAndModify', true);
function connectDB() {
    mongoose_1.default.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
}
exports.connectDB = connectDB;
var TodoSchema = new mongoose_1.Schema({
    id: Number,
    username: String,
    title: String,
    completed: Boolean,
}, {
    versionKey: false
});
exports.TodoModel = mongoose_1.default.model("Todo", TodoSchema);
