import React from 'react';
import { Row } from 'reactstrap';
import CustomCard from '../card/Card';

var character = [
    {
        'name' : 'Jab',
        'image' : 'images/jigglypuff/jab.gif',
        'description' : "Frames: 17\nIASA: 16\nHit: 5-6\nWindow of the second punch: 3-25\nSecond punch starts: 8"
    },
    {
        'name' : 'Jab 2',
        'image' : 'images/jigglypuff/jab2.gif',
        'description' : "Frames: 20\nIASA: 17\nHit: 6-7"
    },
    {
        'name' : 'Forward Tilt',
        'image' : 'images/jigglypuff/f-tilt.gif',
        'description' : "Frames: 27\nHit: 6-9"
    },
    {
        'name' : 'Forward Tilt (Up)',
        'image' : 'images/jigglypuff/f-tilt-up.gif',
        'description' : "Frames: 27\nHit: 6-9"
    },
    {
        'name' : 'Forward Tilt (Down)',
        'image' : 'images/jigglypuff/f-tilt-down.gif',
        'description' : "Frames: 27\nHit: 6-9"
    },
    {
        'name' : 'Up Tilt',
        'image' : 'images/jigglypuff/up-tilt.gif',
        'description' : "Frames: 23\nHit: 8-14"
    },
    {
        'name' : 'Down Tilt',
        'image' : 'images/jigglypuff/d-tilt.gif',
        'description' : "Frames: 39 \nHit: 10-12\nIASA: 30"
    },
    {
        'name' : 'Dash Attack',
        'image' : 'images/jigglypuff/dash.gif',
        'description' : "Frames: 39\nHit: 4-14 \nIASA: 39"
    },
    {
        'name' : 'Forward Smash',
        'image' : 'images/jigglypuff/f-smash.gif',
        'description' : "Frames: 44\nHit: 12-20 \nCharge Frames: 4"
    },
    {
        'name' : 'Up Smash',
        'image' : 'images/jigglypuff/up-smash.gif',
        'description' : "Frames: 54\nHit: 7-10\nCharge Frames: 5\nIASA: 45\nEarliest hit OoS: 8"
    },
    {
        'name' : 'Down Smash',
        'image' : 'images/jigglypuff/d-smash.gif',
        'description' : "Frames: 54\n Hit: 3-10\nLegs invincible: 9-10\nCharge frame: 5\nIASA: 48"
    },
    {
        'name' : 'Neutral Air',
        'image' : 'images/jigglypuff/nair.gif',
        'description' : "Frames: 49\n Hit: 6-28\n Auto cancel: <5 29>\nLanding Lag: 20\nLcanceled: 10"
    },
    {
        'name' : 'Up Air',
        'image' : 'images/jigglypuff/up-air.gif',
        'description' : "Frames: 33\n Hit: 6-13\nIASA: 30\n Auto cancel: <8 37>\nLanding Lag: 20\nLcanceled: 10\nEarliest hit OoS: 14"
    },
    {
        'name' : 'Back Air',
        'image' : 'images/jigglypuff/bair.gif',
        'description' : "Frames: 39\n Hit: 9-12\nIASA: 31\n Auto cancel: <8 25>\nLanding Lag: 20\nLcanceled: 10\nEarliest hit OoS: 14"
    },
    {
        'name' : 'Down Air',
        'image' : 'images/jigglypuff/dair.gif',
        'description' : "Frames: 49\n Hit: 5-6, 8-9, 11-12, 14-15, 17-18, 20-21, 23-24, 26-27\n Auto cancel: <4 39>\nLanding Lag: 30\nLcanceled: 15\nEarliest hit OoS: 10"
    },
    {
        'name' : 'Forward Air',
        'image' : 'images/jigglypuff/fair.gif',
        'description' : "Frames: 39\n Hit: 7-22\nIASA: 35\n Auto cancel: <6 34>\nLanding Lag: 20\nLcanceled: 10\nEarliest hit OoS: 12"
    },
    {
        'name' : 'Grab',
        'image' : 'images/jigglypuff/grab.gif',
        'description' : "Frames: 30\nGrab: 7-8"
    },
    {
        'name' : 'Dash Grab',
        'image' : 'images/jigglypuff/dash-grab.gif',
        'description' : "Frames: 40\nGrab: 11-12"
    },
    {
        'name' : 'Neutral B (Rollout)',
        'image' : 'images/jigglypuff/n-b.gif',
        'description' : "Charging starts: 16\nHit animation: 1-106 (whenever you hit the ground)\nMaximum charge at 45 frames.\nWhile turning, Jigglypuff takes no damage for 27 frames."
    },
    {
        'name' : 'Down B (Rest)',
        'image' : 'images/jigglypuff/down-b.gif',
        'description' : "Frames: 249\nHit: 1\nInvincible: 1-26\nEarliest Hit OoS: 6"
    },
    {
        'name' : 'Side B (Pound)',
        'image' : 'images/jigglypuff/side-b.gif',
        'description' : "Frames: 45\nHit: 12-27\nWhen to aim: 12\nEarliest FF: 42"
    },
    {
        'name' : 'Up B (Sing)',
        'image' : 'images/jigglypuff/up-b.gif',
        'description' : "Frames: 179\nHit: 28-35, 69-76, 113-125\nHitbox changes size depending on when it's singing.\nCan grab the ledge from any direction."
    },
    {
        'name' : 'Air Dodge',
        'image' : 'images/jigglypuff/air-dodge.gif',
        'description' : "Frames: 49\nInvulnerable: 4-29"
    },
    {
        'name' : 'Spot Dodge',
        'image' : 'images/jigglypuff/spot-dodge.gif',
        'description' : "Frames: 27\nInvulnerable: 2-15"
    },
    {
        'name' : 'Roll Forward',
        'image' : 'images/jigglypuff/roll-forward.gif',
        'description' : "Frames: 34\nInvulnerable: 2-18"
    },
    {
        'name' : 'Roll Back',
        'image' : 'images/jigglypuff/roll-back.gif',
        'description' : "Frames: 34\nInvulnerable: 2-18"
    },

];



const Example = (props) => {
  return (
    <Row>
      {
        character.map(function(move) {
              return (
                <CustomCard
                  image={move.image}
                  name={move.name}
                  description={
                    move.description.split("\n").map(i => {
                    return <div>{i}</div>;
                    })}
                  column="6"
                  />
              )
          })
        }
      </Row>
  );
};

export default Example;
