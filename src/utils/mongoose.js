import mongoose from 'mongoose';
import bluebird from 'bluebird';
import logger from './logger';
import * as constants from './constants';

mongoose.Promise = bluebird;

const MONGO_URL = 'mongodb://localhost/benchmark';

export default {
  connect() {
    logger.info(constants.MONGO_STARTING);

    const options = {
      useNewUrlParser: true
    };

    // Add mongoose events
    this.addEvents(MONGO_URL);

    mongoose.connect(MONGO_URL, options);
    return mongoose;
  },

  addEvents: () => {

    // When successfully connected
    mongoose.connection.on('connected', () => {
      logger.info(`${constants.MONGO_STARTED} ${MONGO_URL}`);
    });

    // If the connection throws an error
    mongoose.connection.on('error', (err) => {
      logger.error(`${constants.MONGO_ERROR} ${err}`);
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', () => {
      logger.warn(constants.MONGO_DISCONNECT);
    });

    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', () => {
      mongoose.connection.close(() => {
        logger.warn(constants.MONGO_TERMINATION);
        process.exit(0);
      });
    });
  }
};
