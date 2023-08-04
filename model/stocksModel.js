const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

const stocksData = sequelize.define('stocks', {
    symbol: {
      type: DataTypes.STRING,
    },
    identifier: {
        type: DataTypes.STRING,
      },
    open: {
        type: DataTypes.INTEGER,
      },    
    dayHigh: {
        type: DataTypes.INTEGER,
      },    
    dayLow: {
        type: DataTypes.INTEGER,
      },
    lastPrice: {
        type: DataTypes.INTEGER,
      },
    previousClose: {
        type: DataTypes.INTEGER,
      },
    change: {
        type: DataTypes.INTEGER,
      },
    pChange: {
        type: DataTypes.INTEGER,
      },
    totalTradedVolume: {
        type: DataTypes.INTEGER,
      },    
    totalTradedValue: {
        type: DataTypes.INTEGER,
      },
    lastUpdateTime: {
      type: DataTypes.STRING,
    },
    yearHigh: {
        type: DataTypes.INTEGER,
      },    
    yearLow: {
        type: DataTypes.INTEGER,
      },
    perChange365d: {
        type: DataTypes.INTEGER,
      },
    perChange30d: {
        type: DataTypes.INTEGER,
      }
  });
  
  module.exports = stocksData;