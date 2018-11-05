import React from "react";
import MyGrid from "./Grid";

const info = [
  {
    title: "To Hit Chance",
    content:
      "Attack and Defense are additive modifiers to hit chance. So +1 attack means +1% hit chance, while +1 defense means -1% chance to be hit. Base hit chance is 40%, min is 10% and max is 90%, so having more than +30 defense than the enemy's current attack is ineffective. Respectively having more than +50 attack compared to enemy defense is ineffective. Melee Defense is reduced by 40% when from attacking a unit from the flank and by 75% when attacking the rear of an entity. A unit can be attacked from the front, flank, and rear simultaneously."
  },
  {
    title: "Armour Damage Reduction",
    content:
      "Minimum damage reduction is always 50% of armour value. To be more precise, any time non armour-piercing damage is dealt the target rolls for armour. This armour roll is a random value between 50% and 100% of the armour stat. The armour roll is then applied as percentage damage reduction. E.g. a unit of Swordsmen with 30 armour can roll between 15 and 30 percentage damage reduction. This damage reduction will then be applied to the non-armour piercing portion of the damage. So if a unit with 15 WS (10 standard, 5 AP) attacked a unit with 50 armour the following calculation occurs: Damage dealt = 5AP + (10 - (25%-50% of armour value)) "
  },
  {
    title: "Charge Bonus",
    content:
      "Charge bonus adds additively to attack and damage if a unit has charged into combat. It is at max on the first second of engagement and is linearly reduced over 15 seconds. The damage increase uses the existing ratio of ap-to-base damage to determine how much of each it should add. E.g. a unit with 12 charge bonus and 25% ap damage, will get +12 melee attack, +3 ap damage, +9 base damage on the first second of the engagement."
  },
  {
    title: "Bonus vs Large/Infantry",
    content:
      "Bonus vs. large/infantry adds additively to attack and damage like charge bonus, but only against a certain entity size. It's a constant bonus. It's damage increase uses the same ap-base ratio system as charge bonus."
  },
  {
    title: "Damage Resistances",
    content:
      "Physical resistance reduces the damage of all attacks (normal or armour-piercing) by a set percentage. It is bypassed completely by magical attacks and magic spells. Magic resistance reduces the damage of all spells/abilities that say they do magical damage, as well as reducting the damage of magical attacks. Fire resistance reduces the damage of fire spells/abilities, as well as the damage from flaming attacks. Ward saves (damage resistance) will reduce the damage from ALL sources by the percentage amount."
  },
  {
    title: "Health Regeneration",
    content:
      "Each unit has a regeneration cap which represents how much health they can regenerate during a battle. This cap cannot be exceeded and any further spells or abilities used to heal that unit will be wasted. With some notable exceptions (invocation of nehek, revivification crystal) health can only be regenerated on models and cannot revive models from the grave."
  },
  {
    title: "Skirmish Mode",
    content:
      "Skirmish mode is a setting that can be used by most ranged units to make them keep distance with their opponents when they get within a certain range. This tool can be very helpful to keep your fast-moving skirmishers from being caught in melee, without requiring as much micromanagement. It's major weakness is it allows your opponent to determine where your unit will go and they can be occupied with weak units chasing them away."
  },
  {
    title: "Guard Mode",
    content:
      "Guard mode is a setting availabel to all units. For ranged units it means that if the target they are firing at moves out of range of their fire, they will not chase. For melee units it means that if they disengage from melee, your units will not chase. For 99% of cases, you should have guard mode active on range units, and inactive on melee units. "
  },
  {
    title: "Fire at will",
    content:
      "If active, your ranged units will automatically choose a target to fire at when they are in range."
  }
];

function Combat(props) {
  return <MyGrid info={info} />;
}

export default Combat;
