import React from "react";
import "../index.css";

// Figure out why the component won't render with the props .
function UnitsCard(props) {
  console.log(props);
  return (
    <div className="card">
      <h3>Name: {props.name}</h3>
      <h5>
        Unit Type:
        {props.category}
      </h5>
      <h5>Size: {props.size}</h5>
      <h5>Hitpoints: {props.hitpoints}</h5>
      <h5>Armour: {props.armour}</h5>
      <h5>Physical Resist: {props.physical_resist}</h5>
      <h5>Magic Resist: {props.magic_resist}</h5>
      <h5>Damage Resist: {props.damage_resist}</h5>
      <h5>Fire Resist: {props.fire_resist}</h5>
      <h5>Missile Resist: {props.missile_resist}</h5>
      <h5>Missile Block: {props.missileblock}</h5>
      <h5>Leadership: {props.leadership}</h5>
      <h5>Melee Attack: {props.melee_attack}</h5>
      <h5>Melee Defence: {props.melee_defence}</h5>
      <h5>Charge Bonus: {props.charge_bonus}</h5>
    </div>
  );
}

export default UnitsCard;
