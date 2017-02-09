import React from 'react';
import { Row } from 'reactstrap';
import CustomCard from '../card/Card';

var character = [
    {
        'name' : 'Jab',
        'image' : 'images/falco/jab.gif',
        'description' : "Frames: 17 \n Hit: 2-3 \n IASA: 16 \n Window of the second jab: 3-31 \n Second jab starts: 6 (or later)"
    },
    {
        'name' : 'Jab 2',
        'image' : 'images/falco/jab2.gif',
        'description' : "Frames: 20 \n Hit: 3-4 \n IASA: 19 \n Window of the kick jabs: 1-20 \n Kickjabs start: 7"
    },
    {
        'name' : 'Rapid Jab',
        'image' : 'images/falco/jab3.gif',
        'description' : "Hits: 3-4, 10-11, 17-18, 24-25, 31-32 (6 frames between each kick)\nFull cycle: 36 frames​"
    },
    {
        'name' : 'Forward Tilt',
        'image' : 'images/falco/f-tilt.gif',
        'description' : "Frames: 26 \n Hit: 5-9"
    },
    {
        'name' : 'Forward Tilt Up',
        'image' : 'images/falco/f-tilt-up.gif',
        'description' : "Frames: 26 \n Hit: 5-9"
    },
    {
        'name' : 'Forward Tilt Down',
        'image' : 'images/falco/f-tilt-down.gif',
        'description' : "Frames: 26 \n Hit: 5-9"
    },
    {
        'name' : 'Up Tilt',
        'image' : 'images/falco/u-tilt.gif',
        'description' : "Frames: 23\nHit: 5-11\nIASA: 23\nShield Stun: 11\nShield Hit Lag: 5"
    },
    {
        'name' : 'Down Tilt',
        'image' : 'images/falco/d-tilt.gif',
        'description' : "Frames: 29 \nHit: 7-9\nIASA: 28"
    },
    {
        'name' : 'Dash Attack',
        'image' : 'images/falco/dash-attack.gif',
        'description' : "Frames: 39\nHit: 4-17 \nIASA: 36"
    },
    {
        'name' : 'Forward Smash',
        'image' : 'images/falco/f-smash.gif',
        'description' : "Frames: 39\nHit: 12-21 \nCharge Frames: 7"
    },
    {
        'name' : 'Up Smash',
        'image' : 'images/falco/up-smash.gif',
        'description' : "Frames: 43\nHit: 7-15\nHead invincible (but not beak): 1-10\nCharge Frames: 2"
    },
    {
        'name' : 'Down Smash',
        'image' : 'images/falco/d-smash.gif',
        'description' : "Frames: 49\n Hit: 6-10\nLegs invincible: 1-6\nIASA: 46\nCharge Frames: 2"
    },
    {
        'name' : 'Neutral Air',
        'image' : 'images/falco/nair.gif',
        'description' : "Frames: 49\n Hit: 4-31\n IASA: 42\n Auto cancel: <3 37>\nLanding Lag: 15\nLcanceled: 7"
    },
    {
        'name' : 'Up Air',
        'image' : 'images/falco/up-air.gif',
        'description' : "Frames: 39\n Hit: 8-9, 11-14\n IASA: 36\n Auto cancel: <7 26>\nLanding Lag: 18\nLcanceled: 9"
    },
    {
        'name' : 'Back Air',
        'image' : 'images/falco/bair.gif',
        'description' : "Frames: 39\n Hit: 4-19\n IASA: 38\n Auto cancel: <3 23>\nLanding Lag: 20\nLcanceled: 10"
    },
    {
        'name' : 'Down Air',
        'image' : 'images/falco/dair.gif',
        'description' : "Frames: 49\n Hit: 5-24\nAuto cancel: <4 30>\nLanding Lag: 18\nLcanceled: 9"
    },
    {
        'name' : 'Forward Air',
        'image' : 'images/falco/fair.gif',
        'description' : "Frames: 59\n Hit: 6-8, 16-18, 24-26, 33-35, 43-45\n IASA: 53\n Auto cancel: <5 49>\nLanding Lag: 22\nLcanceled: 11"
    },
    {
        'name' : 'Grab',
        'image' : 'images/falco/grab.gif',
        'description' : "Frames: 30\nGrab: 7-8"
    },

    {
        'name' : 'Dash Grab',
        'image' : 'images/falco/fair.gif',
        'description' : "Frames: 40\nGrab: 12-13"
    },
    {
        'name' : 'Shine',
        'image' : 'images/falco/down-b.gif',
        'description' : "Frames: 39 (or more)\nHits: 1\nInvincible: 1\nReflects: 4-21 or release+1\nJump cancelable whenever it reflects\nLag upon release: 19\nReflection lag: 19"
    },
    {
        'name' : 'Blaster',
        'image' : 'images/falco/n-b.gif',
        'description' : "Frames(single shot): 57\nShot comes out: 23\nRepeated shots, every 24 frames"
    },
    {
        'name' : 'Blaster (airborne)',
        'image' : 'images/falco/n-b-air.gif',
        'description' : "Frames(single shot): 42\nShot comes out: 13\nRepeated shots, every 16 frames\nLaser lasts 99 frames\nAuto cancels upon landing"
    },
    {
        'name' : 'Phantasm',
        'image' : 'images/falco/side-b.gif',
        'description' : "Frames: 59\nFalco starts moving away: 17\nHit: 18-21\nTime to press B and stop falco: 17-20\nCan grab edge as early as 25\nLandlag: 20\nLandfallspeciallag: 3"
    },
    {
        'name' : 'Phantasm',
        'image' : 'images/falco/side-b-air.gif',
        'description' : "Aerial Version\nFrames: 59\nFalco starts moving away: 17\nHit: 18-21\nTime to press B and stop falco: 17-20\nCan grab edge as early as 25\nLandlag: 20\nLandfallspeciallag: 3"
    },
    {
        'name' : 'Firebird',
        'image' : 'images/falco/up-b.gif',
        'description' : "Frames: 84\nHit: 43-64\nWhen to aim: 42\n grab edge during first part as early as 16\nLandlag: 6\nLandfallspeciallag: 3"
    },
    {
        'name' : 'Air Dodge',
        'image' : 'images/falco/air-dodge.gif',
        'description' : "Frames: 49\nInvulnerable: 4-29"
    },
    {
        'name' : 'Spot Dodge',
        'image' : 'images/falco/spot-dodge.gif',
        'description' : "Frames: 22\nInvulnerable: 2-15"
    },
    {
        'name' : 'Roll Forward',
        'image' : 'images/falco/roll-forward.gif',
        'description' : "Frames: 31\nInvulnerable: 4-19"
    },
    {
        'name' : 'Roll Back',
        'image' : 'images/falco/roll-back.gif',
        'description' : "Frames: 31\nInvulnerable: 4-19"
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
