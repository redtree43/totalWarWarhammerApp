const mongoose = require("mongoose");
const Unit = require("../models/UnitStatModel");
const seed = require("../seed/seed");

function trimmer(data) {
  const myunitobjectarray = [];

  const warmain = "wh_main";
  const wardlc = "wh_dlc";
  const warpro = "wh_pro";
  const warmain2 = "wh2_main";
  const wardlc2 = "wh2_dlc";
  const warpro2 = "wh2_pro";

  for (let i = 0; i < data.length; i++) {
    const myunit = {};
    const armour = data[i].armour;
    const shield = data[i].shield;

    if (data[i].key.includes(warmain) === true) {
      const inserthis = new Unit({
        name: data[i].key.substr(16),
        category: data[i].category,
        accuracy: data[i].accuracy,
        reload: data[i].reload,
        primary_ammo: data[i].primary_ammo,
        secondary_ammo: data[i].secondary_ammo,
        size: data[i].ground_stat_effect_group,
        hitpoints: data[i].bonus_hit_points,
        armour: parseInt(armour.match(/(\d+)$/)[0], 10),
        missileblock: parseInt(shield.split("_")[3]),
        leadership: data[i].morale,
        melee_attack: data[i].melee_attack,
        melee_defence: data[i].melee_defence,
        charge_bonus: data[i].charge_bonus,
        physical_resist: data[i].damage_mod_physical,
        magic_resist: data[i].damage_mod_magic,
        fire_resist: data[i].damage_mod_flames,
        missile_resist: data[i].damage_mod_missiles,
        damage_resist: data[i].damage_mod_all,
        attributes: data[i].attribute_group,
        can_skirmish: data[i].can_skirmish
      });

      inserthis.save(function(err, inserthis) {
        if (err) return console.error(err);
      });
    }
    // myunitobjectarray.push(myunit);
    else if (data[i].key.includes(wardlc) === true) {
      const inserthis = new Unit({
        name: data[i].key.substr(17),
        category: data[i].category,
        accuracy: data[i].accuracy,
        reload: data[i].reload,
        primary_ammo: data[i].primary_ammo,
        secondary_ammo: data[i].secondary_ammo,
        size: data[i].ground_stat_effect_group,
        hitpoints: data[i].bonus_hit_points,
        armour: parseInt(armour.match(/(\d+)$/)[0], 10),
        missileblock: parseInt(shield.split("_")[3]),
        leadership: data[i].morale,
        melee_attack: data[i].melee_attack,
        melee_defence: data[i].melee_defence,
        charge_bonus: data[i].charge_bonus,
        physical_resist: data[i].damage_mod_physical,
        magic_resist: data[i].damage_mod_magic,
        fire_resist: data[i].damage_mod_flames,
        missile_resist: data[i].damage_mod_missiles,
        damage_resist: data[i].damage_mod_all,
        attributes: data[i].attribute_group,
        can_skirmish: data[i].can_skirmish
      });

      inserthis.save(function(err, inserthis) {
        if (err) return console.error(err);
      });
    } else if (data[i].key.includes(warpro) === true) {
      const inserthis = new Unit({
        name: data[i].key.substr(17),
        category: data[i].category,
        accuracy: data[i].accuracy,
        reload: data[i].reload,
        primary_ammo: data[i].primary_ammo,
        secondary_ammo: data[i].secondary_ammo,
        size: data[i].ground_stat_effect_group,
        hitpoints: data[i].bonus_hit_points,
        armour: parseInt(armour.match(/(\d+)$/)[0], 10),
        missileblock: parseInt(shield.split("_")[3]),
        leadership: data[i].morale,
        melee_attack: data[i].melee_attack,
        melee_defence: data[i].melee_defence,
        charge_bonus: data[i].charge_bonus,
        physical_resist: data[i].damage_mod_physical,
        magic_resist: data[i].damage_mod_magic,
        fire_resist: data[i].damage_mod_flames,
        missile_resist: data[i].damage_mod_missiles,
        damage_resist: data[i].damage_mod_all,
        attributes: data[i].attribute_group,
        can_skirmish: data[i].can_skirmish
      });

      inserthis.save(function(err, inserthis) {
        if (err) return console.error(err);
      });
    } else if (data[i].key.includes(warmain2) === true) {
      const inserthis = new Unit({
        name: data[i].key.substr(17),
        category: data[i].category,
        accuracy: data[i].accuracy,
        reload: data[i].reload,
        primary_ammo: data[i].primary_ammo,
        secondary_ammo: data[i].secondary_ammo,
        size: data[i].ground_stat_effect_group,
        hitpoints: data[i].bonus_hit_points,
        armour: parseInt(armour.match(/(\d+)$/)[0], 10),
        missileblock: parseInt(shield.split("_")[3]),
        leadership: data[i].morale,
        melee_attack: data[i].melee_attack,
        melee_defence: data[i].melee_defence,
        charge_bonus: data[i].charge_bonus,
        physical_resist: data[i].damage_mod_physical,
        magic_resist: data[i].damage_mod_magic,
        fire_resist: data[i].damage_mod_flames,
        missile_resist: data[i].damage_mod_missiles,
        damage_resist: data[i].damage_mod_all,
        attributes: data[i].attribute_group,
        can_skirmish: data[i].can_skirmish
      });

      inserthis.save(function(err, inserthis) {
        if (err) return console.error(err);
      });
    } else if (data[i].key.includes(wardlc2) === true) {
      const inserthis = new Unit({
        name: data[i].key.substr(18),
        category: data[i].category,
        accuracy: data[i].accuracy,
        reload: data[i].reload,
        primary_ammo: data[i].primary_ammo,
        secondary_ammo: data[i].secondary_ammo,
        size: data[i].ground_stat_effect_group,
        hitpoints: data[i].bonus_hit_points,
        armour: parseInt(armour.match(/(\d+)$/)[0], 10),
        missileblock: parseInt(shield.split("_")[3]),
        leadership: data[i].morale,
        melee_attack: data[i].melee_attack,
        melee_defence: data[i].melee_defence,
        charge_bonus: data[i].charge_bonus,
        physical_resist: data[i].damage_mod_physical,
        magic_resist: data[i].damage_mod_magic,
        fire_resist: data[i].damage_mod_flames,
        missile_resist: data[i].damage_mod_missiles,
        damage_resist: data[i].damage_mod_all,
        attributes: data[i].attribute_group,
        can_skirmish: data[i].can_skirmish
      });

      inserthis.save(function(err, inserthis) {
        if (err) return console.error(err);
      });
    } else if (data[i].key.includes(warpro2) === true) {
      const inserthis = new Unit({
        name: data[i].key.substr(18),
        category: data[i].category,
        accuracy: data[i].accuracy,
        reload: data[i].reload,
        primary_ammo: data[i].primary_ammo,
        secondary_ammo: data[i].secondary_ammo,
        size: data[i].ground_stat_effect_group,
        hitpoints: data[i].bonus_hit_points,
        armour: parseInt(armour.match(/(\d+)$/)[0], 10),
        missileblock: parseInt(shield.split("_")[3]),
        leadership: data[i].morale,
        melee_attack: data[i].melee_attack,
        melee_defence: data[i].melee_defence,
        charge_bonus: data[i].charge_bonus,
        physical_resist: data[i].damage_mod_physical,
        magic_resist: data[i].damage_mod_magic,
        fire_resist: data[i].damage_mod_flames,
        missile_resist: data[i].damage_mod_missiles,
        damage_resist: data[i].damage_mod_all,
        attributes: data[i].attribute_group,
        can_skirmish: data[i].can_skirmish
      });

      inserthis.save(function(err, inserthis) {
        if (err) return console.error(err);
      });
    }
  }
}
mongoose.connect("mongodb://localhost:27017/warhammer");

const db = mongoose.connection;

db.on("error", console.error.bind(console, " connection error:"));
db.once("open", function() {
  console.log("connected to the Warhammer db!");
});

const check = trimmer(seed);
