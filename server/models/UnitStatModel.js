const mongoose = require("mongoose");

const unitSchema = new mongoose.Schema({
  name: String,
  category: String,
  accuracy: Number,
  reload: Number,
  primary_ammo: Number,
  secondary_ammo: Number,
  size: String,
  hitpoints: Number,
  armour: Number,
  missileblock: String,
  leadership: Number,
  melee_attack: Number,
  melee_defence: Number,
  charge_bonus: Number,
  physical_resist: Number,
  magic_resist: Number,
  fire_resist: Number,
  missile_resist: Number,
  damage_resist: Number,
  attributes: String,
  can_skirmish: String
});

const Unit = mongoose.model("unit", unitSchema);

module.exports = Unit;
