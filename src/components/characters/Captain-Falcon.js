import React from 'react';
import { Row } from 'reactstrap';
import CustomCard from '../card/Card';

var character = [
    {
        'name' : 'Jab',
        'image' : 'images/captain-falcon/jab.gif',
        'description' : "Frames: 21 \n Hit: 3-5\n Window of the second jab: 3-25\n Second jab starts: 9"
    },
    {
        'name' : 'Jab 2',
        'image' : 'images/captain-falcon/jab2.gif',
        'description' : "Frames: 20 \n Hit: 5-7 \nWindow of the knee: 2-25\nKnee starts: 8"
    },
    {
        'name' : 'Jab 3 (Knee/Gentleman)',
        'image' : 'images/captain-falcon/jab3.gif',
        'description' : "Frames: 32 \n Hit: 6-12 \n IASA: 23\nRapid Jabs Start: 13"
    },
    {
        'name' : 'Rapid Jab',
        'image' : 'images/captain-falcon/rapid-jab.gif',
        'description' : "Frames: 55 \n Hit: 5-6, 13-14, 21-22, 29-30, 36-37, 45-46\n*image also includes 5 frames of lag after jabs end (total:60)"
    },
    {
        'name' : 'Forward Tilt',
        'image' : 'images/captain-falcon/f-tilt.gif',
        'description' : "Frames: 29 \n Hit: 9-11"
    },
    {
        'name' : 'Forward Tilt (Up)',
        'image' : 'images/captain-falcon/f-tilt-up.gif',
        'description' : "Frames: 29 \n Hit: 9-11"
    },
    {
        'name' : 'Forward Tilt (Down)',
        'image' : 'images/captain-falcon/f-tilt-down.gif',
        'description' : "Frames: 29 \n Hit: 9-11"
    },
    {
        'name' : 'Up Tilt',
        'image' : 'images/captain-falcon/up-tilt.gif',
        'description' : "Frames: 39\nHit: 17-21\nIASA: 38"
    },
    {
        'name' : 'Down Tilt',
        'image' : 'images/captain-falcon/d-tilt.gif',
        'description' : "Frames: 35 \nHit: 10-15\nIASA: 35"
    },
    {
        'name' : 'Dash Attack',
        'image' : 'images/captain-falcon/dash.gif',
        'description' : "Frames: 39\nHit: 7-16 \nIASA: 38"
    },
    {
        'name' : 'Forward Smash',
        'image' : 'images/captain-falcon/f-smash.gif',
        'description' : "Frames: 64\nHit: 18-21 \nCharge Frames: 10\nIASA: 60"
    },
    {
        'name' : 'Up Smash',
        'image' : 'images/captain-falcon/up-smash.gif',
        'description' : "Frames: 54\nHit: 21-22, 27-28\nCharge Frames: 8\nIASA: 40"
    },
    {
        'name' : 'Down Smash',
        'image' : 'images/captain-falcon/d-smash.gif',
        'description' : "Frames: 49\n Hit: 19-22, 29-32\nCharge Frames: 14\nIASA: 45"
    },
    {
        'name' : 'Neutral Air',
        'image' : 'images/captain-falcon/nair.gif',
        'description' : "Frames: 44\n Hit: 7-12, 20-29\n Auto cancel: <3 34>\nLanding Lag: 15\nLcanceled: 7"
    },
    {
        'name' : 'Up Air',
        'image' : 'images/captain-falcon/up-air.gif',
        'description' : "Frames: 33\n Hit: 6-13\nIASA: 30\n Auto cancel: 22>\nLanding Lag: 15\nLcanceled: 7"
    },
    {
        'name' : 'Back Air',
        'image' : 'images/captain-falcon/bair.gif',
        'description' : "Frames: 35\n Hit: 10-17\n Auto cancel: <6 21>\nLanding Lag: 18\nLcanceled: 9"
    },
    {
        'name' : 'Down Air',
        'image' : 'images/captain-falcon/dair.gif',
        'description' : "Frames: 44\n Hit: 16-20\n Auto cancel: <3 36>\nLanding Lag: 24\nLcanceled: 12"
    },
    {
        'name' : 'Forward Air (Knee)',
        'image' : 'images/captain-falcon/fair.gif',
        'description' : "Frames: 39\n Hit: 14-30\n Auto cancel: <6 35>\nLanding Lag: 19\nLcanceled: 9"
    },
    {
        'name' : 'Grab',
        'image' : 'images/captain-falcon/grab.gif',
        'description' : "Frames: 30\nGrab: 7-8"
    },
    {
        'name' : 'Dash Grab',
        'image' : 'images/captain-falcon/dash-grab.gif',
        'description' : "Frames: 40\nGrab: 11-12"
    },
    {
        'name' : 'Down B (Falcon Kick)',
        'image' : 'images/captain-falcon/down-b.gif',
        'description' : "Hit: 14-32\nRecovery time: 29\nWall hit lag: 60"
    },
    {
        'name' : 'Down B (Falcon Kick airborne)',
        'image' : 'images/captain-falcon/down-b-air.gif',
        'description' : "Hit: 15-29\nRecovery time: 28\nNOTE: landing during recovery time causes ground hit\nGround hit lag: 45\nGround hit damaging: 1-2"
    },
    {
        'name' : 'Neutral B (Falcon Punch!)',
        'image' : 'images/captain-falcon/n-b.gif',
        'description' : "Frames: 99\nHit: 52-56"
    },
    {
        'name' : 'Side B (Raptor Boost)',
        'image' : 'images/captain-falcon/side-b.gif',
        'description' : "Total ground (whiffed): 79\n Hit window: ground: 15-34 air: 17-34\nWhen he hits: 4-8\nLag from hitting: ground: 25 air: 45\nLandlag: 20\nlandfallspeciallag: 20"
    },
    {
        'name' : 'Up B (Falcon Dive)',
        'image' : 'images/captain-falcon/up-b.gif',
        'description' : "Frames: 64\nGrab: 13-33\nCan grab edges as soon as: 38\n--When grabbing---\nTotal: 79 Hit: 2-6 Sends away: 20\nlandfallspeciallag: 30"
    },
    {
        'name' : 'Air Dodge',
        'image' : 'images/captain-falcon/air-dodge.gif',
        'description' : "Frames: 49\nInvulnerable: 4-29"
    },
    {
        'name' : 'Spot Dodge',
        'image' : 'images/captain-falcon/spot-dodge.gif',
        'description' : "Frames: 32\nInvulnerable: 3-20"
    },
    {
        'name' : 'Roll Forward',
        'image' : 'images/captain-falcon/roll-forward.gif',
        'description' : "Frames: 31\nInvulnerable: 4-19"
    },
    {
        'name' : 'Roll Back',
        'image' : 'images/captain-falcon/roll-back.gif',
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
