const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("./log.json");
const db = low(adapter);

module.exports = class Monitor  {
  count() {
    db.update("RequestCount", n => n + 1).write();
  }
}