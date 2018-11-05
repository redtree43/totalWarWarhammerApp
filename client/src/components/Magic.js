import React from "react";
import MyGrid from "./Grid";

const info = [
  {
    title: "The Power Metre",
    content:
      "In the bottom right hand corner of the battle screen, the Winds of Magic power metre shows with a number between 0 and 30. This is the Power Meter. This indicates the current amount of Winds of Magic available to player's magic users to cast spells. If the player has selected a spellcaster unit then the caster's available spells (up to 6) will be arranged around the Power Meter. If the caster has access to more than one lore of magic, then a small bar will appear above the Winds of Magic Panel with buttons to switch between the lores. Each spell has a cost in Winds of Magic such as 4 for a relatively weak spell or 16 for a very powerful one."
  },
  {
    title: "The Reserve Bar",
    content:
      "The small blue bar to the right of the Power Meter is the Reserve Ba. It indicates how much magic is left to refill the main Power metre, as well as how fast the Power Metre will recharge. A full Reserve Bar means that the Power Metre will recharge quickly and that there is lots of Magic left if the player can wait. Every time a player uses one of their spellcasters to cast a spell, the Reserve Bar will go down permanently. When the Reserve Bar reaches 0, the Power metre will no longer recharge. Certain abilities & passives can be used to increase the amount of magic in the reserve bar."
  },
  {
    title: "Overcasting a spell",
    content:
      "Some spells can be overcast. Overcasting a spell will increase it's effects in some way (more damage, added area of effect. add duration, increased buff/debuff etc) and will cost more winds of magic from the power meter. To Overcast a spell, after selecting the spell you will cast, select the same icon again."
  },
  {
    title: "Miscasting",
    content:
      "When overcasting a spell there is a chance you will miscast. Miscasting will cause damage to your spellcaster but the spell will still be cast with the overcasted effects."
  },
  {
    title: "Increasing your Winds of Magic",
    content:
      "There are various active and passive abilities and items that can increase your rate of WoM power recharge (making you able to cast spells more quickly) & your WoM recharge meter(allowing you to cast more spells overall). Some examples of these are Arcane Conduit, Power Stone, Sword of Unholy Power etc. Using these to increase the magic available to you is an important tool in maximising the value you get out of your spellcaster in battle."
  }
];
function Magic(props) {
  return <MyGrid info={info} />;
}

export default Magic;
