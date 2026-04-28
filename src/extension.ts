import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Hello World extension is now active!');

  // Command 1: Show Information Message
  let helloWorldDisposable = vscode.commands.registerCommand('hello-world.helloWorld', () => {
    vscode.window.showInformationMessage('Hello from Hello World Extension! 🎉');
  });

  // Command 2: Show Current Date
  let showDateDisposable = vscode.commands.registerCommand('hello-world.showDate', () => {
    const now = new Date().toLocaleString();
    vscode.window.showInformationMessage(`Current date and time: ${now}`);
  });

  context.subscriptions.push(helloWorldDisposable);
  context.subscriptions.push(showDateDisposable);
}

export function deactivate() {
  console.log('Hello World extension is now deactivated');
}
