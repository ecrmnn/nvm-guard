#! /usr/bin/env node

/* eslint-disable no-console */

import compatible from 'compatible-version';
import { readFileSync } from 'fs';
import { join } from 'path';

try {
  const nvmrc = readFileSync(join(process.cwd(), '.nvmrc'), 'utf-8');

  const nvmrcTrimmed = nvmrc.replace(/\r?\n|\r/g, '');

  if (!compatible(nvmrcTrimmed)) {
    console.log('');
    console.log(`\x1b[41mInvalid Node.js version. Script requires ${nvmrcTrimmed}, but found ${process.versions.node}`);
    console.log('');

    process.exit(1);
  }
} catch (error) {
  console.log('');
  console.log('\x1b[41mScript requires specific Node.js version, but a .nvmrc file could not be found.');
  console.log('');

  process.exit(1);
}
