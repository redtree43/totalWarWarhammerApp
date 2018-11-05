var Unit = require("../models/UnitStatModel");

exports.index = function(req, res) {
  res.send("Home Page");
};

// Display list of all units.
exports.unit_list = function(req, res) {
  Unit.find({}, function(err, result) {
    if (err) throw err;
    res.send(result);
  });

  // for (let i = 0; i > myBigUnit.length; i++) {
  //   const newObject = {
  //     name: myBigUnit[i].name,
  //     category: myBigUnit[i].category,
  //     accuracy: myBigUnit[i].accuracy,
  //     reload: myBigUnit[i].reload,
  //     primary_ammo: myBigUnit[i].primary_ammo,
  //     secondary_ammo: myBigUnit[i].secondary_ammo,
  //     size: myBigUnit[i].size,
  //     hitpoints: myBigUnit[i].hitpoints,
  //     armour: myBigUnit[i].armour,
  //     missileblock: myBigUnit[i].missleblock,
  //     leadership: myBigUnit[i].leadership,
  //     melee_attack: myBigUnit[i].melee_attack,
  //     melee_defence: myBigUnit[i].melee_defence,
  //     charge_bonus: myBigUnit[i].charge_bonus,
  //     physical_resist: myBigUnit[i].physical_resist,
  //     magic_resist: myBigUnit[i].magic_resist,
  //     fire_resist: myBigUnit[i].fire_resist,
  //     missile_resist: myBigUnit[i].missile_resist,
  //     damage_resist: myBigUnit[i].damage_resist,
  //     attributes: myBigUnit[i].attributes,
  //     can_skirmish: myBigUnit[i].can_skirmish
  //   };
  // }
};

// Display detail page for a specific unit.
exports.unit_detail = function(req, res) {
  res.send("NOT IMPLEMENTED: unit detail: " + req.params.id);
};
