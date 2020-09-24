// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

async function main(projectId, location) {
  // [START aiplatform_quickstart]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  // const projectId = 'my-project';
  // const location = 'us-central1';
  const {DatasetServiceClient} = require('@google-cloud/aiplatform');
  const client = new DatasetServiceClient({
    apiEndpoint: `${location}-aiplatform.googleapis.com`,
  });
  async function listDatasets() {
    const [datasets] = await client.listDatasets({
      parent: client.locationPath(projectId, location),
    });
    for (const dataset of datasets) {
      console.info(dataset);
    }
  }
  listDatasets();
  // [END aiplatform_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
