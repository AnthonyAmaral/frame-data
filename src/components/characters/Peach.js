import React from 'react';
import { Row } from 'reactstrap';
import CustomCard from '../card/Card';

var character = [
    {
        'name' : 'Jab - Royal Slap',
        'image' : 'images/peach/jab.gif',
        'description' : "Frames: 19\nIASA: 16\nHit: 2-3\nWindow of the second jab: 3-25\nShield Advantage: -10\nShield Advantage with Double Slap: -6"
    },
    {
        'name' : 'Jab 2 - Double Royal Slap',
        'image' : 'images/peach/jab2.gif',
        'description' : "Frames: 20\nIASA: 17\nHit: 3-4\nShield Advantage: -11"
    },
    {
        'name' : 'Forward Tilt - Can-Can Kick',
        'image' : 'images/peach/f-tilt.gif',
        'description' : "Frames: 41\nHit: 6-13\nIASA: 37\nShield Advantage: -23"
    },
    {
        'name' : 'Up Tilt - Crown Bash',
        'image' : 'images/peach/up-tilt.gif',
        'description' : "Frames: 39\nHit: 9-13\nIASA: 37\nHead Invincible: 9-12\nShield Advantage: from -16 to -20"
    },
    {
        'name' : 'Down Tilt - Elegant Sweep',
        'image' : 'images/peach/d-tilt.gif',
        'description' : "Frames: 27\nHit: 12-13\nIASA: 26\nShield Advantage: -7"
    },
    {
        'name' : 'Dash Attack - Lady Push',
        'image' : 'images/peach/dash-attack.gif',
        'description' : "Frames: 37\nHit: 6-20 \nIASA: 36\nShield Advantage (Early): -22\nShield Advantage (Late): -17"
    },
    {
        'name' : 'Forward Smash - Peach Swing (Golf Club)',
        'image' : 'images/peach/f-smash1.gif',
        'description' : "Frames: 47\nHit: 15-18\nCharge frame: 8\nIASA: 40\nShield Advantage (Pan Tip and Golf Tip): -13\n(Tennis, Close Golf, Close Pan): -15/-16"
    },
    {
        'name' : 'Forward Smash - Peach Swing (Frying Pan)',
        'image' : 'images/peach/f-smash2.gif',
        'description' : "Frames: 47\nHit: 15-18\nCharge frame: 8\nIASA: 40\nShield Advantage (Pan Tip and Golf Tip): -13\n(Tennis, Close Golf, Close Pan): -15/-16"
    },
    {
        'name' : 'Forward Smash - Peach Swing (Tennis Racket)',
        'image' : 'images/peach/f-smash3.gif',
        'description' : "Frames: 47\nHit: 15-18\nCharge frame: 8\nIASA: 40\nShield Advantage (Pan Tip and Golf Tip): -13\n(Tennis, Close Golf, Close Pan): -15/-16"
    },
    {
        'name' : 'Up Smash - Pirouette',
        'image' : 'images/peach/up-smash.gif',
        'description' : "Frames: 44\nHit: 13-22\nCharge frame: 10\nHead and arms invulnerable: 13-22\nShield Advantage (Sides): -26\nShield Advantage (Hand): -23\nShield Advantage (Shoulder): -21"    },
    {
        'name' : 'Down Smash - Double-Edged Gown',
        'image' : 'images/peach/d-smash.gif',
        'description' : "Frames: 39\nHit: 5-6, 9-10, 13-14, 17-18, 21-22\nCharge frame: 3\nLegs invincible: 3-24\nShield Advantage: \nHit 1: -26\nHit 2: -22\nHit 3: -18\nHit 4: -14\nHit 5: -10"    },
    {
        'name' : 'Neutral Air - Princess Twirl',
        'image' : 'images/peach/nair.gif',
        'description' : "Frames: 49\nHit: 3-23\nIASA: 42\nAuto Cancel: <2 36>\nLanding Lag: 17\nL Canceled: 8"
    },
    {
        'name' : 'Up Air - Floating High Kick',
        'image' : 'images/peach/up-air.gif',
        'description' : "Frames: 35\nHit: 7-11\nIASA: 34\nAuto Cancel: <6 22>\nLanding Lag: 15\nL Canceled: 7"
    },
    {
        'name' : 'Back Air - Flying Hip',
        'image' : 'images/peach/bair.gif',
        'description' : "Frames: 44\nHit: 6-22\nIASA: 38\nAuto Cancel: <4 23>\nLanding Lag: 15\nL Canceled: 7"
    },
    {
        'name' : 'Down Air - Stiletto Kick',
        'image' : 'images/peach/dair.gif',
        'description' : "Frames: 39\nHit: 12-13, 18-19, 24-25, 30-31\nIASA: 36\nAuto Cancel: <11 36>\nLanding Lag: 15\nL Canceled: 7"
    },
    {
        'name' : 'Forward Air - Crown Smack',
        'image' : 'images/peach/fair.gif',
        'description' : "Frames: 54\nHit: 16-20\nIASA: 51\nAuto Cancel: <15 39>\nLanding Lag: 25\nL Canceled: 12"
    },
    {
        'name' : 'Grab',
        'image' : 'images/peach/grab.gif',
        'description' : "Frames: 30\nGrab: 7-8"
    },
    {
        'name' : 'Dash Grab',
        'image' : 'images/peach/dash-grab.gif',
        'description' : "Frames: 40\nGrab: 7-8"
    },
    {
        'name' : 'Neutral B - Toad',
        'image' : 'images/peach/neutral-b.gif',
        'description' : "Frames: 64\nToad: 10-30\nToad Counter\nTotal: 69\nInvincible: 1-8\nHit: 6-32\n7 Spores, each spore lasts 11 frames"
    },
    {
        'name' : 'Down B - Vegetable',
        'image' : 'images/peach/down-b.gif',
        'description' : "Frames: 29\nVegetable lasts 140 frames in air"
    },
    {
        'name' : 'Turnip Throw - Ground',
        'image' : 'images/peach/turnip-throw.gif',
        'description' : "Frames: 23\nRelease: 10 (forward, back)\nRelease: 11 (up)\nRelease: 9 (down)"
    },
    {
        'name' : 'Side B - Peach Bomber',
        'image' : 'images/peach/side-b.gif',
        'description' : "Windup on ground: 21\nLunging portion: 25 (1-10 do damage)\nLanding Lag: 33\nHit recovery: 28 (including 1st frame of hit)\nShield Advantage (Tilt): -10\nShield Advantage (Smash): -8"
    },
    {
        'name' : 'Side B - Peach Bomber (Aerial)',
        'image' : 'images/peach/side-b-air.gif',
        'description' : "Windup in air: 31\nLunging portion: 25 (1-10 do damage)\nLanding Lag: 33\nAir lag: 28\nHit recovery: 28 (including 1st frame of hit)\nShield Advantage (Tilt): -10\nShield Advantage (Smash): -8"
    },
    {
        'name' : 'Up B - Peach Parasol',
        'image' : 'images/peach/up-b.gif',
        'description' : "Frames: 40\nInvincibility: 3\nHit: 6-9, 10-11, 12-13, 14-15, 16-17, 18-19, 20-21, 22-23, 24-25, 26-27, 28-29\nOpeningTotal: 15\nHit: 10>\nParasol Open Landlag: 30\nParasol Closed Landlag: 4\nEarliest edge grab: 34"
    },
    {
        'name' : 'Air Dodge',
        'image' : 'images/peach/air-dodge.gif',
        'description' : "Frames: 49\nInvulnerable: 4-19\nGlide Toss window: 1-3\nCan input fastfall on frame 20"
    },
    {
        'name' : 'Spot Dodge',
        'image' : 'images/peach/spot-dodge.gif',
        'description' : "Frames: 27\nInvulnerable: 2-18"
    },
    {
        'name' : 'Roll Forward',
        'image' : 'images/peach/roll-forward.gif',
        'description' : "Frames: 31\nInvulnerable: 4-19\nGlide Toss window: 1-5"
    },
    {
        'name' : 'Roll Back',
        'image' : 'images/peach/roll-back.gif',
        'description' : "Frames: 31\nInvulnerable: 4-19\nGlide Toss window: 1-5"
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
