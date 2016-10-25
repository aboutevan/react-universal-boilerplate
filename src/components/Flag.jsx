import React from 'react';

const data = {
  cu: {
    name: 'Cuba',
    icon: 'flag-cu.png',
  },
  fr: {
    name: 'France',
    icon: 'flag-fr.png',
  },
  jp: {
    name: 'Japan',
    icon: 'flag-jp.png',
  },
  nl: {
    name: 'Netherlands',
    icon: 'flag-nl.png',
  },
  uz: {
    name: 'Uzbekistan',
    icon: 'flag-uz.png',
  },
};

const Flag = ({ code, showName }) => {
  const name = data[code].name;
  const icon = data[code].icon;
  return (
    <span className="flag">
      <img alt={name} src={`/img/${icon}`} title={name} className="icon" />
      {showName && <span className="name">{name}</span>}
    </span>
  );
};

Flag.propTypes = {
  code: React.PropTypes.string,
  showName: React.PropTypes.string,
};

export default Flag;
