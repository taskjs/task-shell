var Execution = require('execution');
var shell = require('shelljs');

module.exports = Execution.extend({
    // The type of option could be HTML5 input types: file, directory, number, range, select,
    // url, email, tel, color, date, time, month, time, week, datetime(datetime-local),
    // string(text), boolean(checkbox), array, regexp, function and object.
    options: {
        command: {
            label: 'Command',
            type: 'string',
            placeholder: 'cp -R stuff/* out/'
        }
    },
    run: function (inputs, options, logger) {
        if(typeof options === 'string'){
            options = {command: options};
        }
        return this._run(inputs, options, logger);
    },
    execute: function (resolve, reject) {
        var options = this.options;
        var inputs = this.inputs;
        var logger = this.logger;

        var command = options.command;

        var args = command.trim().split(/\s+/);
        var bin = args.shift();

        var results = shell[bin].apply(shell, args);

        resolve(results);
    }
})
