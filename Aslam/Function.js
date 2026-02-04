// Aslam Function Module - Command registration function
const commands = [];

function AslamFunction(options, handler) {
  if (typeof options === 'object' && typeof handler === 'function') {
    commands.push({ options, handler });
    return true;
  }
  return AslamFunction;
}

AslamFunction.commands = commands;

module.exports = AslamFunction;
