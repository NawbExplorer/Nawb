exports.is = {
  type(obj, str) {
    return Object.prototype.toString.call(obj) === `[object ${str}]`;
  },
  string(obj) {
    return this.type(obj, 'String');
  },
  object(obj) {
    return this.type(obj, 'Object');
  },
  function(obj) {
    return this.type(obj, 'Function');
  },
  null(obj) {
    return this.type(obj, 'Null');
  },
  undefined(obj) {
    return this.type(obj, 'Undefined');
  },
  number(obj) {
    return this.type(obj, 'Number');
  },
  array(obj) {
    return this.type(obj, 'Array');
  },
};
