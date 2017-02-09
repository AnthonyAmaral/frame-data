import React from 'react';
import { Row } from 'reactstrap';
import CustomCard from '../card/Card';

var character = [
    {
        'name' : 'Jab',
        'image' : 'images/shiek/jab.gif',
        'description' : "Frames: 17 \n Hit: 2-3 \n IASA: 16 \n Window of the second jab: 3-25 \n Second jab starts: 10 (or later)"
    },
    {
        'name' : 'Jab 2',
        'image' : 'images/shiek/jab2.gif',
        'description' : "Frames: 18 \n Hit: 3-5 \n IASA: 17 \n Window of the rapid jabs: 2-18 \nRapid jabs start: 10"
    },
    {
        'name' : 'Rapid Jab',
        'image' : 'images/shiek/jab3.gif',
        'description' : "Frames: 55\nHits: 3-4, 7-8, etc.\nJabs start: 10​"
    },
    {
        'name' : 'Forward Tilt',
        'image' : 'images/shiek/f-tilt.gif',
        'description' : "Frames: 29 \n Hit: 5-10\n IASA: 27"
    },
    {
        'name' : 'Up Tilt',
        'image' : 'images/shiek/up-tilt.gif',
        'description' : "Frames: 333\nHit: 5-10\nIASA: 26"
    },
    {
        'name' : 'Down Tilt',
        'image' : 'images/shiek/d-tilt.gif',
        'description' : "Frames: 29 \nHit: 5-8\nIASA: 28"
    },
    {
        'name' : 'Forward Smash',
        'image' : 'images/shiek/f-smash.gif',
        'description' : "Frames: 50\nHit: 12, 27-29 \nCharge Frames: 5\nIASA: 46"
    },
    {
        'name' : 'Up Smash',
        'image' : 'images/shiek/up-smash.gif',
        'description' : "Frames: 47\nHit: 12, 14-16\nHead and forearms invincible: 12-16\nIASA: 40\nCharge Frames: 10"
    },
    {
        'name' : 'Down Smash',
        'image' : 'images/shiek/d-smash.gif',
        'description' : "Frames: 49\n Hit: 5-9, 16-19, 22-24\nLegs invincible: 5\nIASA: 46\nCharge Frames: 2"
    },
    {
        'name' : 'Dash Attack',
        'image' : 'images/shiek/dash.gif',
        'description' : "Frames: 37\nHit: 6-12 \nIASA: 36"
    },
    {
        'name' : 'Neutral Air',
        'image' : 'images/shiek/nair.gif',
        'description' : "Frames: 48\n Hit: 3-30\n IASA: 42\n Auto cancel: <2 31>\nLanding Lag: 16\nLcanceled: 8"
    },
    {
        'name' : 'Up Air',
        'image' : 'images/shiek/up-air.gif',
        'description' : "Frames: 39\n Hit: 5-20\n IASA: 37\n Auto cancel: <4 30>\nLanding Lag: 24\nLcanceled: 12"
    },
    {
        'name' : 'Back Air',
        'image' : 'images/shiek/bair.gif',
        'description' : "Frames: 37\n Hit: 4-19\n Auto cancel: <3 25>\nLanding Lag: 16\nLcanceled: 8"
    },
    {
        'name' : 'Down Air',
        'image' : 'images/shiek/dair.gif',
        'description' : "Frames: 48\n Hit: 15-33\n Auto cancel: <2\nLanding Lag: 20\nLcanceled: 10"
    },
    {
        'name' : 'Forward Air',
        'image' : 'images/shiek/fair.gif',
        'description' : "Frames: 33\n Hit: 5-7\n Auto cancel: <4 11>\nLanding Lag: 16\nLcanceled: 8"
    },
    {
        'name' : 'Grab',
        'image' : 'images/shiek/grab.gif',
        'description' : "Frames: 30\nGrab: 7-8"
    },

    {
        'name' : 'Dash Grab',
        'image' : 'images/shiek/fair.gif',
        'description' : "Frames: 40\nGrab: 8-9"
    },
    {
        'name' : 'Down B',
        'image' : 'images/shiek/down-b.gif',
        'description' : "Frames: 62\nInvulnerable: 27-36\nFirst frame of Zelda: 37"
    },
    {
        'name' : 'Neutral B',
        'image' : 'images/shiek/n-b.gif',
        'description' : "Frames when charged: 40\nNeedles released at 4, 7, 10, 13, 16, 19"
    },
    {
        'name' : 'Neutral B (airborne)',
        'image' : 'images/shiek/n-b-air.gif',
        'description' : "Needles released at 11, 14, 17, 20, 23, 26\nAuto cancels upon landing\nLast frame: 39\nNeedles last 30 frames"
    },
    {
        'name' : 'Side B',
        'image' : 'images/shiek/side-b.gif',
        'description' : "Comes out on 22\nFully extended at 34\nEarliest retraction starts on 44"
    },
    {
        'name' : 'Up B',
        'image' : 'images/shiek/up-b.gif',
        'description' : "Frames: 94\nHit: 36-42\nInvincible: 18-55\nThe frame of choosing direction: 35\nLandlag: 30\nLandfallspeciallag: 4"
    },
    {
        'name' : 'Air Dodge',
        'image' : 'images/shiek/air-dodge.gif',
        'description' : "Frames: 49\nInvulnerable: 4-29"
    },
    {
        'name' : 'Spot Dodge',
        'image' : 'images/shiek/spot-dodge.gif',
        'description' : "Frames: 22\nInvulnerable: 2-15"
    },
    {
        'name' : 'Roll Forward',
        'image' : 'images/shiek/roll-forward.gif',
        'description' : "Frames: 31\nInvulnerable: 4-19"
    },
    {
        'name' : 'Roll Back',
        'image' : 'images/shiek/roll-back.gif',
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
