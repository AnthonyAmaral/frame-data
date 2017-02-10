import React from 'react';
import { Row } from 'reactstrap';
import CustomCard from '../card/Card';

var character = [
    {
        'name' : 'Jab',
        'image' : 'images/ice-climbers/jab.gif',
        'description' : "Frames: 29\nIASA: 16\nHit: 4-7\nWindow of the backswing: 3-29\nBackswing starts: 14(or later)"
    },
    {
        'name' : 'Jab 2',
        'image' : 'images/ice-climbers/jab2.gif',
        'description' : "Frames: 29\nIASA: 18\nHit: 5-7"
    },
    {
        'name' : 'Forward Tilt',
        'image' : 'images/ice-climbers/f-tilt.gif',
        'description' : "Frames: 31\nHit: 6-9\nIASA: 28"
    },
    {
        'name' : 'Forward Tilt (Up)',
        'image' : 'images/ice-climbers/f-tilt-up.gif',
        'description' : "Frames: 31\nHit: 6-9\nIASA: 28"
    },
    {
        'name' : 'Forward Tilt (Down)',
        'image' : 'images/ice-climbers/f-tilt-down.gif',
        'description' : "Frames: 31\nHit: 6-9\nIASA: 28"
    },
    {
        'name' : 'Up Tilt',
        'image' : 'images/ice-climbers/up-tilt.gif',
        'description' : "Frames: 49\nHit: 8-9, 11-12, 14-15, 17-18, 20-21, 23-24, 26\nIASA: 42"
    },
    {
        'name' : 'Down Tilt',
        'image' : 'images/ice-climbers/d-tilt.gif',
        'description' : "Frames: 34\nHit: 8-11\nIASA: 29"
    },
    {
        'name' : 'Dash Attack',
        'image' : 'images/ice-climbers/dash.gif',
        'description' : "Frames: 41\nHit: 11-12 \nIASA: 38"
    },
    {
        'name' : 'Forward Smash',
        'image' : 'images/ice-climbers/f-smash.gif',
        'description' : "Frames: 47\nHit: 13-14 \nCharge Frames: 7\nIASA: 47"
    },
    {
        'name' : 'Up Smash',
        'image' : 'images/ice-climbers/up-smash.gif',
        'description' : "Frames: 49\nHit: 14-18 \nCharge Frames: 8\nIASA: 44"    },
    {
        'name' : 'Down Smash',
        'image' : 'images/ice-climbers/d-smash.gif',
        'description' : "Frames: 39\nHit: 6-11 \nCharge Frames: 2\nIASA: 36"    },
    {
        'name' : 'Neutral Air',
        'image' : 'images/ice-climbers/nair.gif',
        'description' : "Frames: 49\n Hit: 6-23\nIASA: 36\n Auto cancel: <5 30>\nLanding Lag: 20\nLcanceled: 10"
    },
    {
        'name' : 'Up Air',
        'image' : 'images/ice-climbers/up-air.gif',
        'description' : "Frames: 39\n Hit: 6-23\nIASA: 30\n Auto cancel: <5 27>\nLanding Lag: 32\nLcanceled: 16"
    },
    {
        'name' : 'Back Air',
        'image' : 'images/ice-climbers/bair.gif',
        'description' : "Frames: 39\n Hit: 8-11\nIASA: 36\n Auto cancel: <7 19>\nLanding Lag: 20\nLcanceled: 10"
    },
    {
        'name' : 'Down Air',
        'image' : 'images/ice-climbers/dair.gif',
        'description' : "Frames: 65\n Hit: 3-52\n Auto cancel: <2 58>\nLanding Lag: 25\nLcanceled: 12"
    },
    {
        'name' : 'Forward Air',
        'image' : 'images/ice-climbers/fair.gif',
        'description' : "Frames: 59\n Hit: 19-22\nIASA: 55\n Auto cancel: <2 55>\nLanding Lag: 20\nLcanceled: 10"
    },
    {
        'name' : 'Grab',
        'image' : 'images/ice-climbers/grab.gif',
        'description' : "Frames: 30\nGrab: 7-8"
    },
    {
        'name' : 'Dash Grab',
        'image' : 'images/ice-climbers/dash-grab.gif',
        'description' : "Frames: 40\nGrab: 7-8"
    },
    {
        'name' : 'Neutral B (Ice Shot)',
        'image' : 'images/ice-climbers/n-b.gif',
        'description' : "Frames: 59\nHammer hit: 15-20\nIce appears: 17\nIce lasts: 61 frames"
    },
    {
        'name' : 'Down B (Blizzard)',
        'image' : 'images/ice-climbers/down-b.gif',
        'description' : "Frames: 79\nHitboxes appear every five frames\nfrom 16 to 56\nEach hitbox lasts 11 frames\nTotal hit window: 16-66"
    },
    {
        'name' : 'Side B (Squall Hammer)',
        'image' : 'images/ice-climbers/side-b.gif',
        'description' : "Frames: 89\nHit: 12, 14, 17, 20, 23, 27, 31, 35, 41, 47, 55\nLandfallspeciallag: 4"
    },
    {
        'name' : 'Side B (With Nana)',
        'image' : 'images/ice-climbers/side-b2.gif',
        'description' : "Frames: 89\nHit: 12, 14, 17, 20, 23, 27, 31, 35, 41, 47, 55\nLandfallspeciallag: 4"
    },
    {
        'name' : 'Up B (Belay)',
        'image' : 'images/ice-climbers/up-b.gif',
        'description' : "Frames: 89\nNana hits: 17-59\nNana invulnerable: 5-59\nNana becomes falling: 60\nOnly Popo total: 42\nlandfallspeciallag: 25"
    },
    {
        'name' : 'Air Dodge',
        'image' : 'images/ice-climbers/air-dodge.gif',
        'description' : "Frames: 48\nInvulnerable: 4-29"
    },
    {
        'name' : 'Spot Dodge',
        'image' : 'images/ice-climbers/spot-dodge.gif',
        'description' : "Frames: 27\nInvulnerable: 2-18"
    },
    {
        'name' : 'Roll Forward',
        'image' : 'images/ice-climbers/roll-forward.gif',
        'description' : "Frames: 31\nInvulnerable: 4-19"
    },
    {
        'name' : 'Roll Back',
        'image' : 'images/ice-climbers/roll-back.gif',
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
