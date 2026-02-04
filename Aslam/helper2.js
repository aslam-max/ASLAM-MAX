// Aslam Helper2 Module - Command registration function
const commands = [];

function helper2(options, handler) {
  if (typeof options === 'object' && typeof handler === 'function') {
    commands.push({ options, handler });
    return true;
  }
  return helper2;
}

helper2.commands = commands;

module.exports = helper2;
