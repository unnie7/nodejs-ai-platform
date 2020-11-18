/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

async function main(endpointId, project, location = 'us-central1') {
  // [START aiplatform_delete_endpoint]
  /**
   * TODO(developer): Uncomment these variables before running the sample.\
   * (Not necessary if passing values as arguments)
   */

  // const endpointId = 'YOUR_ENDPOINT_ID';
  // const project = 'YOUR_PROJECT_ID';
  // const location = 'YOUR_PROJECT_LOCATION';

  // Imports the Google Cloud Endpoint Service Client library
  const {EndpointServiceClient} = require('@google-cloud/aiplatform');

  // Specifies the location of the api endpoint
  const clientOptions = {
    apiEndpoint: 'us-central1-aiplatform.googleapis.com',
  };

  // Instantiates a client
  const endpointServiceClient = new EndpointServiceClient(clientOptions);

  async function deleteEndpoint() {
    // Configure the parent resource
    const endpoint = {
      name: `projects/${project}/locations/${location}/endpoints/${endpointId}`,
    };

    // Delete endpoint request
    const [response] = await endpointServiceClient.deleteEndpoint(endpoint);
    console.log(`Long running operation : ${response.name}`);

    // Wait for operation to complete
    await response.promise();
    const result = response.result;

    console.log('Delete endpoint response :');
    console.log(`${result}`);
  }
  await deleteEndpoint();
  // [END aiplatform_delete_endpoint]
}

main(...process.argv.slice(2)).catch(err => {
  console.error(err);
  process.exitCode = 1;
});
