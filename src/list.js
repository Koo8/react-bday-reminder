import React from 'react';

function list(props) {
  return (
    <div className='list'>
      {props.thelist.map((p) => {
        const { id, name, age, image } = p;
        return (
          <article>
            <img src={image} alt={name} />
            <div className='rightside'>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default list;
