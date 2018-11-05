const json2csv = require("json2csv").Parser;

exports.get = function(req, res) {
  const fields = ["accuracy", "armour"];

  const csv = new json2csv({ data: "", fields: fields });

  //   res.set("Content-Disposition", "attachment;filename=units.csv");
  //   res.set("Content-Type", "application/octet-stream");

  res.send(csv);
};
