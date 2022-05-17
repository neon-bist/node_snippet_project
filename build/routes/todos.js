"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send("Route 1 GET");
});
router.route("/form").get((req, res) => {
    res.send(`
    <form method="post">
      username:<input name="username">
      <br>
      degignation:<input name="designation" >
      <button type="submit" >Submit</button>
    </form>
  `);
})
    .post((req, res) => {
    const { username, designation } = req.body;
    res.send(`<div>Username:${username}</div><div>Designation:${designation}</div>`);
});
router.get('/todos', (req, res) => {
    res.json([
        { id: 1, title: "Press the power button" },
        { id: 2, title: "Enter password" },
        { id: 3, title: "Click on start" },
        { id: 4, title: "Click on user profile button" },
        { id: 5, title: "Click on Shutdown" },
    ]);
});
exports.default = router;
