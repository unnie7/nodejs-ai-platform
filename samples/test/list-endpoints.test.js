/**
 * Copyright 2020, Google, LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const path = require('path');
const {assert} = require('chai');
const {describe, it} = require('mocha');

const cp = require('child_process');

const execSync = cmd => cp.execSync(cmd, {encoding: 'utf-8'});

const cwd = path.join(__dirname, '..');
const projectId = process.env.GCLOUD_PROJECT;
const LOCATION = 'us-central1';

describe('AI platform list endpoints', () => {
  it('should list all endpoints in a parent resource', async () => {
    const stdout = execSync(
      `node ./list-endpoints.js ${projectId} ${LOCATION}`,
      {
        cwd,
      }
    );
    assert.match(stdout, /Endpoint/);
  });
});
