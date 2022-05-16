"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("./constants");
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send(`<div>Hi there </div>`);
});
app.listen(constants_1.PORT, () => console.log(`Listening to ${constants_1.PORT}`));
