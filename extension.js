const vscode = require('vscode');

function activate(context) {

    let disposable = vscode.commands.registerCommand('open-localhost.open', () => {

        path = vscode.workspace.rootPath.replace('/Users/renanveroneze/Sites/', '').split('/');

        domain = path.shift()

        vscode.env.openExternal("http://" + domain + ".test/" + path.join('/'));
        // vscode.window.showInformationMessage( "http://" +  domain + ".test/" + path.join('/') );

    });

    context.subscriptions.push(disposable);
}

module.exports = { activate }
