// Messages
export const REST_STARTED = 'Magic happens on port:';

export const MONGO_STARTING = 'Mongodb connection starting';
export const MONGO_STARTED = 'Mongodb connection was stablished with MongoDB';
export const MONGO_ERROR = 'Mongodb default connection error:';
export const MONGO_DISCONNECT = 'Server was disconnected from mongo';
export const MONGO_TERMINATION = 'Mongodb default connection disconnected through app termination';

export const NOT_FOUND_MESSAGE = {
  message: 'Sorry, this endpoint doesnt exist',
  status: 404
};

export const UNFORMATTED_JSON = {
  message: 'This JSON is unformatted, please review the params.',
  status: 400
};
