import React from 'react';
import { Row } from 'reactstrap';
import CustomCard from './../card/Card';
import NotFound from '../notFound/NotFound';
import characterData from '../../data/characters.json';

const Character = (props) => {
    if (!characterData[props.params.character]) {
        return <NotFound />;
    } else {
        return (
          <Row key={props.params.character}>
          {
            characterData[props.params.character].map(function(move, index) {
                  let num = move.name === "Illusion" ? (num = 12) : (num = 6);
                  return (
                    <CustomCard
                      key={index}
                      image={move.image}
                      name={move.name}
                      description={
                        move.description.split("\n").map((i , index) => {
                            return <div key={index}>{i}</div>;
                        })}
                      column={num}
                      />
                  )
              })
            }
          </Row>
        );
    }
};

export default Character;