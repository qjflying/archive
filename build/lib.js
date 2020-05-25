const path = require('path');
const shell = require('shelljs');

const rootpath = path.join(__dirname, '../');

shell.rm('-rf', path.join(rootpath, './lib'));
shell.mkdir('-p', path.join(rootpath, './lib'));

shell.cat(
    path.join(rootpath, './dist/css/chunk*.css'),
    path.join(rootpath, './dist/css/app.*.css')
).to(
    path.join(rootpath, './lib/archive.css')
);

shell.cat(
    path.join(rootpath, './dist/js/chunk*.js'),
    path.join(rootpath, './dist/js/app.*.js')
).to(
    path.join(rootpath, './lib/archive.js')
);

shell.cp(
    '-R',
    path.join(rootpath, './dist/plugins/'),
    path.join(rootpath, './lib')
);

shell.cat(path.join(rootpath, './build/html.tpl')).to(
    path.join(rootpath, './lib/demo.html')
);

shell.rm('-rf', path.join(rootpath, './dist'));

shell.echo('build success');
