const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('demo', () => {
  console.log('demomode');
});

emitter.emit('demo');
