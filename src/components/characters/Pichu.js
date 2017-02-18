import React from 'react';
import { Row } from 'reactstrap';
import CustomCard from '../card/Card';

var character = [
    {
        'name' : 'Jab - Head Butt',
        'image' : 'images/pikachu/jab.gif',
        'description' : "Frames: 21\nHit: 2-3\nConsecutive head butts start as early as frame 5"
    },
    {
        'name' : 'Forward Tilt',
        'image' : 'images/pikachu/f-tilt.gif',
        'description' : "Frames: 29\nHit: 5-14"
    },
    {
        'name' : 'Forward Tilt (Up)',
        'image' : 'images/pikachu/f-tilt-up.gif',
        'description' : "Frames: 29\nHit: 5-14"
    },
    {
        'name' : 'Forward Tilt (Down)',
        'image' : 'images/pikachu/f-tilt-down.gif',
        'description' : "Frames: 29\nHit: 5-14"
    },
    {
        'name' : 'Up Tilt',
        'image' : 'images/pikachu/up-tilt.gif',
        'description' : "Frames: 23\nHit: 7-14"
    },
    {
        'name' : 'Down Tilt',
        'image' : 'images/pikachu/d-tilt.gif',
        'description' : "Frames: 21\nHit: 7-9\nIASA: 19"
    },
    {
        'name' : 'Dash Attack',
        'image' : 'images/pikachu/dash.gif',
        'description' : "Frames: 49\nHit: 5-16"
    },
    {
        'name' : 'Forward Smash',
        'image' : 'images/pikachu/f-smash.gif',
        'description' : "Frames: 49\nHit: 16-23 \nCharge Frames: 14"
    },
    {
        'name' : 'Up Smash',
        'image' : 'images/pikachu/up-smash.gif',
        'description' : "Frames: 49\nHit: 8-17\nCharge Frames: 5\nIASA: 41"    },
    {
        'name' : 'Down Smash',
        'image' : 'images/pikachu/d-smash.gif',
        'description' : "Frames: 54\nHit: 7-8, 10-11, 13-14, 16-17, 19-20, 22-23, 25\nCharge Frames: 5\nIASA: 51"    },
    {
        'name' : 'Neutral Air',
        'image' : 'images/pikachu/nair.gif',
        'description' : "Frames: 39\n Hit: 3-28\nAuto cancel: <2 35>\nLanding Lag: 15\nLcanceled: 7"
    },
    {
        'name' : 'Up Air',
        'image' : 'images/pikachu/up-air.gif',
        'description' : "Frames: 27\n Hit: 3-8\nAuto cancel: <2 18>\nLanding Lag: 26\nLcanceled: 13"
    },
    {
        'name' : 'Back Air',
        'image' : 'images/pikachu/bair.gif',
        'description' : "Frames: 59\n Hit: 4-37\n Auto cancel: <3 50>\nLanding hit: 1\nLanding Lag: 30\nLcanceled: 15"
    },
    {
        'name' : 'Down Air',
        'image' : 'images/pikachu/dair.gif',
        'description' : "Frames: 57\n Hit: 14-26\n Auto cancel: 39>\nLanding hit: 2\nLanding Lag: 40\nLcanceled: 20"
    },
    {
        'name' : 'Forward Air',
        'image' : 'images/pikachu/fair.gif',
        'description' : "Frames: 39\n Hit: 10-12, 14-16, 18-20, 22-24\n Auto cancel: <9 34>\nLanding Lag: 20\nLcanceled: 10"
    },
    {
        'name' : 'Grab',
        'image' : 'images/pikachu/grab.gif',
        'description' : "Frames: 30\nGrab: 7-8"
    },
    {
        'name' : 'Dash Grab',
        'image' : 'images/pikachu/dash-grab.gif',
        'description' : "Frames: 40\nGrab: 11-12"
    },
    {
        'name' : 'Neutral B - Thunder Jolt',
        'image' : 'images/pikachu/n-b.gif',
        'description' : "Frames: 57\nBolt comes out: 18\nProjectile lasts: 99 frames\nFastfall anytime"
    },
    {
        'name' : 'Neutral B - Thunder Jolt (Aerial)',
        'image' : 'images/pikachu/n-b-air.gif',
        'description' : "Frames: 57\nBolt comes out: 18\nProjectile lasts: 99 frames\nFastfall anytime"
    },
    {
        'name' : 'Down B - Thunder',
        'image' : 'images/pikachu/down-b.gif',
        'description' : "Frames: 78\nHitboxes appear: 20, 28, 36, 44\nHitboxes disappear (total whiff): 80, 88, 96, 104"
    },
    {
        'name' : 'Down B - Thunder (When Hit)',
        'image' : 'images/pikachu/down-b2.gif',
        'description' : "Frames:  69\nHit: 1-9\nWhen does Pikachu get hit?\nStanding still: 40\nFalling: 51"
    },
    {
        'name' : 'Side B - Skull Bash',
        'image' : 'images/pikachu/side-b.gif',
        'description' : "Maximum charge time: 90 frames"
    },
    {
        'name' : 'Up B - Quick Attack',
        'image' : 'images/pikachu/up-b.gif',
        'description' : "Total (1 jump): 68\nTotal (2 jump): 81\nTime to aim 1st jump: 13\nTime to aim 2nd jump: 26\nHit: 13-18, 27-31\nLandlag: 24\nLandfallspeciallag: 4"
    },
    {
        'name' : 'Air Dodge',
        'image' : 'images/pikachu/air-dodge.gif',
        'description' : "Frames: 49\nInvulnerable: 4-29"
    },
    {
        'name' : 'Spot Dodge',
        'image' : 'images/pikachu/spot-dodge.gif',
        'description' : "Frames: 22\nInvulnerable: 2-15"
    },
    {
        'name' : 'Roll Forward',
        'image' : 'images/pikachu/roll-forward.gif',
        'description' : "Frames: 31\nInvulnerable: 4-19"
    },
    {
        'name' : 'Roll Back',
        'image' : 'images/pikachu/roll-back.gif',
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
