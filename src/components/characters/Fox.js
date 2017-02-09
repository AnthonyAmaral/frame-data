import React from 'react';
import { Row } from 'reactstrap';
import CustomCard from '../card/Card';

var fox = [
    {
        'name' : 'Jab',
        'image' : 'images/fox/fox-jab.gif',
        'description' : "Frames: 18 \n Hit: 2-3 \n IASA: 16 \n Window of the second jab: 3-31 \n Second jab starts: 6 (or later)"
    },
    {
        'name' : 'Jab 2',
        'image' : 'images/fox/fox-jab2.gif',
        'description' : "Frames: 20 \n Hit: 3-4 \n IASA: 19 \n Window of the kick jabs: 1-20 \n Kickjabs start: 6"
    },
    {
        'name' : 'Rapid Jab',
        'image' : 'images/fox/rapid-jab.gif',
        'description' : "Intermediary Animation Frames: 6 \n Hits: 3-4, 10-11, 17-18, 24-25, 31-32 \n Full cycle: 36 frames"
    },
    {
        'name' : 'Forward Tilt',
        'image' : 'images/fox/f-tilt.gif',
        'description' : "Frames: 26 \n Hit: 5-8"
    },
    {
        'name' : 'Forward Tilt Up',
        'image' : 'images/fox/f-tilt-up.gif',
        'description' : "Frames: 26 \n Hit: 5-8"
    },
    {
        'name' : 'Forward Tilt Down',
        'image' : 'images/fox/f-tilt-down.gif',
        'description' : "Frames: 26 \n Hit: 5-8"
    },
    {
        'name' : 'Down Tilt',
        'image' : 'images/fox/d-tilt.gif',
        'description' : "Frames: 26 \nHit: 5-8\nIASA: 28"
    },
    {
        'name' : 'Up Tilt',
        'image' : 'images/fox/u-tilt.gif',
        'description' : "Frames: 24\nHit: 5-11\nIASA: 23"
    },
    {
        'name' : 'Dash Attack',
        'image' : 'images/fox/dash-attack.gif',
        'description' : "Frames: 39\nHit: 4-17 \nIASA: 36"
    },
    {
        'name' : 'Forward Smash',
        'image' : 'images/fox/f-smash.gif',
        'description' : "Frames: 39\nHit: 12-22 \nCharge Frames: 7"
    },
    {
        'name' : 'Up Smash',
        'image' : 'images/fox/up-smash.gif',
        'description' : "Frames: 41\nHit: 7-17\nHead invincible (but not snout): 1-9\nCharge Frames: 2"
    },
    {
        'name' : 'Down Smash',
        'image' : 'images/fox/d-smash.gif',
        'description' : "Frames: 49\n Hit: 6-10\nLegs invincible: 6\nIASA: 46\nCharge Frames: 2"
    },
    {
        'name' : 'Neutral Air',
        'image' : 'images/fox/nair.gif',
        'description' : "Frames: 49\n Hit: 4-31\n IASA: 42\n Auto cancel: <3 37>\nLanding Lag: 15\nLcanceled: 7"
    },
    {
        'name' : 'Up Air',
        'image' : 'images/fox/up-air.gif',
        'description' : "Frames: 39\n Hit: 4-31, 11-14\n IASA: 36\n Auto cancel: <7 26>\nLanding Lag: 18\nLcanceled: 9"
    },
    {
        'name' : 'Back Air',
        'image' : 'images/fox/bair.gif',
        'description' : "Frames: 39\n Hit: 4-19\n IASA: 38\n Auto cancel: <3 24>\nLanding Lag: 20\nLcanceled: 10"
    },
    {
        'name' : 'Down Air',
        'image' : 'images/fox/dair.gif',
        'description' : "Frames: 49\n Hit: 5-6, 8-9, 11-12, 14-15, 17-18, 20-21, 23-24\nAuto cancel: <4 31>\nLanding Lag: 18\nLcanceled: 9"
    },
    {
        'name' : 'Forward Air',
        'image' : 'images/fox/fair.gif',
        'description' : "Frames: 59\n Hit: 6-8, 16-18, 24-26, 33-35, 43-45\n IASA: 53\n Auto cancel: <5 49>\nLanding Lag: 22\nLcanceled: 11"
    },

    {
        'name' : 'Grab',
        'image' : 'images/fox/grab.gif',
        'description' : "Frames: 30\nGrab: 7-8"
    },

    {
        'name' : 'Dash Grab',
        'image' : 'images/fox/fair.gif',
        'description' : "Frames: 40\nGrab: 12-13"
    },
    {
        'name' : 'Shine',
        'image' : 'images/fox/shine.gif',
        'description' : "Frames: 39 (or more)\nHits: 1\nReflects: 4-21 or release+1\nJump cancelable whenever it reflects\nLag upon release: 19\nReflection lag: 19"
    },
    {
        'name' : 'Blaster',
        'image' : 'images/fox/blaster.gif',
        'description' : "Frames(single shot): 36\nShot comes out: 10\nRepeated shots, every 10 frames\nLaser lasts 34 frames\nAuto cancels upon landing"
    },
    {
        'name' : 'Blaster (airborne)',
        'image' : 'images/fox/aerial-blaster.gif',
        'description' : "Aerial Version\nFrames(single shot): 36\nShot comes out: 10\nRepeated shots, every 10 frames\nLaser lasts 34 frames\nAuto cancels upon landing"
    },
    {
        'name' : 'Illusion',
        'image' : 'images/fox/illusion.gif',
        'description' : "Frames: 63\nFox starts moving away: 21\nHit: 22-25\nTime to press B and stop Fox: 20-24\nCan grab edge as early as 29\nLandlag: 20\nLandfallspeciallag: 3"
    },
    {
        'name' : 'Illusion',
        'image' : 'images/fox/aerial-illusion.gif',
        'description' : "Aerial Version\nFrames: 63\nFox starts moving away: 21\nHit: 22-25\nTime to press B and stop Fox: 20-24\nCan grab edge as early as 29\nLandlag: 20\nLandfallspeciallag: 3"
    },
    {
        'name' : 'Firefox',
        'image' : 'images/fox/up-b.gif',
        'description' : "Frames: 92\nHit: 20, 22, 24, 26, 28, 30, 32, 43-72\nWhen to aim: 42\n grab edge during first part as early as 16\nCan grab edge during moving part as early as 73 (Downward angle allows early ledge grab)\nLandlag: 6\nLandfallspeciallag: 3"
    },
    {
        'name' : 'Air Dodge',
        'image' : 'images/fox/air-dodge.gif',
        'description' : "Invulnerable 4-29 out of 49 frames"
    },
    {
        'name' : 'Spot Dodge',
        'image' : 'images/fox/spot-dodge.gif',
        'description' : "Invulnerable 2-15 out of 22 frames"
    },
    {
        'name' : 'Roll Forward',
        'image' : 'images/fox/roll-forward.gif',
        'description' : "Invulnerable 4-19 out of 31"
    },
    {
        'name' : 'Roll Back',
        'image' : 'images/fox/roll-back.gif',
        'description' : "Invulnerable 4-19 out of 31\n15th longest roll - M2K"
    },

];



const Example = (props) => {
  var num;
  return (
    <Row>
      {
        fox.map(function(move) {
          num = move.name === "Illusion" ? (num = 12) : (num = 6);
              return (
                <CustomCard
                  image={move.image}
                  name={move.name}
                  description={
                    move.description.split("\n").map(i => {
                    return <div>{i}</div>;
                    })}
                  column={num}
                  />
              )
          })
        }
      </Row>
  );
};

export default Example;
