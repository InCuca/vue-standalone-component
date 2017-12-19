const {spawn} = require('child_process');

const commands = [
  {cmd: 'rm', args: ['-r', 'test-cmp'], ignoreErrors: true},
  {cmd: './node_modules/.bin/vue', args: ['init', '.', 'test-cmp'], yes: true},
  {cmd: 'npm', args: ['install'], cwd: 'test-cmp'},
  {cmd: 'npm', args: ['run', 'lint'], cwd: 'test-cmp'},
  {cmd: 'npm', args: ['run', 'build'], cwd: 'test-cmp'},
  {cmd: 'npm', args: ['run', 'build:doc'], cwd: 'test-cmp'},
  {cmd: 'npm', args: ['run', 'test'], cwd: 'test-cmp'},
  {cmd: 'npm', args: ['run', 'test:cov'], cwd: 'test-cmp'}
];

function executeCommand(command, index) {
  return new Promise((resolve, reject) => {
    let cp = spawn(command.cmd, command.args, {cwd: command.cwd});
    process.on('exit', cp.kill);

    cp.stdout.setEncoding('utf-8');
    cp.stdin.setEncoding('utf-8');

    // Ignore pipe errors
    cp.stdin.on('error', () => {});
    cp.stdout.on('error',() => {});

    // cp.stdout.pipe(process.stdout);
    cp.stderr.pipe(process.stderr);

    let rejected = false;
    if(command.yes) {
      cp.stdout.on('data', function() {
        if (!rejected) cp.stdin.write("\n");
      });
    }
    cp.once('error', code => {
      if (!rejected) {
        reject(code);
        rejected = true;
      }
    });

    cp.once('exit', code => {
      if (code) {
        reject(code);
        rejected = true;
      } else {
        console.log(
          '=> process',
          (index+1),
          'of',
          commands.length,
          'exit with status',
          code
        );
        resolve(code);
      }
    });
  });
}

commands.reduce((prev, next, index) => {
  return prev.then(() => {
    return executeCommand(next, index)
      .catch(code => {
        console.log('child process exit with', code);
        if (!next.ignoreErrors) process.exit(code);
      });
  });
}, Promise.resolve());
