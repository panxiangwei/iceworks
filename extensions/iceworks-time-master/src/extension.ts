import * as vscode from 'vscode';
import { registerCommand } from '@iceworks/common-service';
import { createTimerTreeView } from './timerProvider';
import { openFileInEditor } from './utils/common';
import { createInstance as createKpmInstance } from './managers/kpm';

// eslint-disable-next-line
const { name } = require('../package.json');

export async function activate(context: vscode.ExtensionContext) {
  const { subscriptions } = context;

  createKpmInstance();

  createTimerTreeView();

  subscriptions.push(
    registerCommand('iceworks-time-master.openFileInEditor', (file: string) => {
      openFileInEditor(file);
    }),
  );
}

export function deactivate() {
}
