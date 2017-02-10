import React from 'react';
import { Row } from 'reactstrap';
import CustomCard from '../card/Card';

var character = [
    {
        'name' : 'Jab',
        'image' : 'images/marth/jab.gif',
        'description' : "Frames: 27 \n Hit: 4-7 \n IASA: 26 \n Window of the second jab: 3-27 \n Second jab starts: 20"
    },
    {
        'name' : 'Jab 2',
        'image' : 'images/marth/jab2.gif',
        'description' : "Frames: 28 \n Hit: 5-9 \n IASA: 17"
    },
    {
        'name' : 'Forward Tilt',
        'image' : 'images/marth/f-tilt.gif',
        'description' : "Frames: 35 \n Hit: 7-10"
    },
    {
        'name' : 'Up Tilt',
        'image' : 'images/marth/up-tilt.gif',
        'description' : "Frames: 39\nHit: 6-12\nIASA: 32"
    },
    {
        'name' : 'Down Tilt',
        'image' : 'images/marth/d-tilt.gif',
        'description' : "Frames: 49 \nHit: 7-9\nIASA: 20"
    },
    {
        'name' : 'Dash Attack',
        'image' : 'images/marth/dash.gif',
        'description' : "Frames: 49\nHit: 12-15 \nIASA: 40"
    },
    {
        'name' : 'Forward Smash',
        'image' : 'images/marth/f-smash.gif',
        'description' : "Frames: 49\nHit: 10-13 \nCharge Frames: 3\nIASA: 48"
    },
    {
        'name' : 'Up Smash',
        'image' : 'images/marth/up-smash.gif',
        'description' : "Frames: 54\nHit: 13-16\nCharge Frames: 7\nIASA: 46"
    },
    {
        'name' : 'Down Smash',
        'image' : 'images/marth/d-smash.gif',
        'description' : "Frames: 64\n Hit: 5-7, 20-22, 22-24\nCharge Frames: 3\nIASA: 62"
    },
    {
        'name' : 'Neutral Air',
        'image' : 'images/marth/nair.gif',
        'description' : "Frames: 49\n Hit: 6-7, 15-21\n Auto cancel: <5 25>\nLanding Lag: 15\nLcanceled: 7"
    },
    {
        'name' : 'Up Air',
        'image' : 'images/marth/up-air.gif',
        'description' : "Frames: 45\n Hit: 5-8\n Auto cancel: <4 27>\nLanding Lag: 15\nLcanceled: 7"
    },
    {
        'name' : 'Back Air',
        'image' : 'images/marth/bair.gif',
        'description' : "Frames: 39\n Hit: 7-11\n Auto cancel: 32>\nLanding Lag: 24\nLcanceled: 12"
    },
    {
        'name' : 'Down Air',
        'image' : 'images/marth/dair.gif',
        'description' : "Frames: 59\n Hit: 6-9\n Auto cancel: <5 48>\nLanding Lag: 32\nLcanceled: 16"
    },
    {
        'name' : 'Forward Air',
        'image' : 'images/marth/fair.gif',
        'description' : "Frames: 33\n Hit: 4-7\n Auto cancel: 27>\nLanding Lag: 15\nLcanceled: 7"
    },
    {
        'name' : 'Grab',
        'image' : 'images/marth/grab.gif',
        'description' : "Frames: 30\nGrab: 7-8"
    },
    {
        'name' : 'Dash Grab',
        'image' : 'images/marth/dash-grab.gif',
        'description' : "Frames: 40\nGrab: 10-11"
    },
    {
        'name' : 'Down B (Counter)',
        'image' : 'images/marth/down-b.gif',
        'description' : "Frames: 59\nCounter Frames: 5-29\nFrames if activated: 46\nHit: 14-20 (or 1 frame later for real strong moves)\nInvincible 1-16"
    },
    {
        'name' : 'Neutral B (Shield Breaker)',
        'image' : 'images/marth/n-b.gif',
        'description' : "Time to get to charging: 11 frames\nHit (from release of B): 5-10\nMax charge time: 121 frames"
    },
    {
        'name' : 'Sword Dance (1, Side)',
        'image' : 'images/marth/side-b.gif',
        'description' : "Frames 29\nHit: 6-8\nWindow for attack 2: 9-26"
    },
    {
        'name' : 'Sword Dance (2, Neutral/Side/Down)',
        'image' : 'images/marth/side-b2-down.gif',
        'description' : "Frames 40\nHit: 14-16\nWindow for attack 3: 17-33"
    },
    {
        'name' : 'Sword Dance (2, Up)',
        'image' : 'images/marth/side-b2-up.gif',
        'description' : "Frames 40\nHit: 12-15\nWindow for attack 3: 17-32"
    },
    {
        'name' : 'Sword Dance (3, Side/Neutral)',
        'image' : 'images/marth/side-b3.gif',
        'description' : "Frames 46\nHit: 11-14\nWindow for attack 4: 16-37"
    },
    {
        'name' : 'Sword Dance (3, Up)',
        'image' : 'images/marth/side-b3-up.gif',
        'description' : "Frames 46\nHit: 13-17\nWindow for attack 4: 18-38"
    },
    {
        'name' : 'Sword Dance (3, Down)',
        'image' : 'images/marth/side-b3-down.gif',
        'description' : "Frames 46\nHit: 14-18\nWindow for attack 4: 19-35"
    },
    {
        'name' : 'Sword Dance (4, Side/Neutral)',
        'image' : 'images/marth/side-b4.gif',
        'description' : "Frames 50\nHit: 23-26"
    },
    {
        'name' : 'Sword Dance (4, Up)',
        'image' : 'images/marth/side-b4-up.gif',
        'description' : "Frames 50\nHit: 20-25"
    },
    {
        'name' : 'Sword Dance (4, Down)',
        'image' : 'images/marth/side-b4-down.gif',
        'description' : "Frames 60\nHit: 13-15, 19-21, 25-27, 31-33, 37-38"
    },
    {
        'name' : 'Up B (Dolphin Slash)',
        'image' : 'images/marth/up-b.gif',
        'description' : "Frames: 39\nHit: 5-10\nInvulnerable: 5\nLandfallspeciallag: 34"
    },
    {
        'name' : 'Air Dodge',
        'image' : 'images/marth/air-dodge.gif',
        'description' : "Frames: 49\nInvulnerable: 4-29"
    },
    {
        'name' : 'Spot Dodge',
        'image' : 'images/marth/spot-dodge.gif',
        'description' : "Frames: 27\nInvulnerable: 2-18"
    },
    {
        'name' : 'Roll Forward',
        'image' : 'images/marth/roll-forward.gif',
        'description' : "Frames: 35\nInvulnerable: 4-19"
    },
    {
        'name' : 'Roll Back',
        'image' : 'images/marth/roll-back.gif',
        'description' : "Frames: 35\nInvulnerable: 4-23"
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
