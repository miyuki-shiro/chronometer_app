'use strict';

const timer = (sequelize, DataTypes) => {
  const Timer = sequelize.define('Timer', {
    time: {
      allowNull: false,
      type: DataTypes.FLOAT
    },
  });

  return Timer;
};

module.exports = timer;