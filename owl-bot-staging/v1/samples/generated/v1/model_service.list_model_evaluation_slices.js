// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(parent) {
  // [START aiplatform_v1_generated_ModelService_ListModelEvaluationSlices_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the ModelEvaluation to list the ModelEvaluationSlices
   *  from. Format:
   *  `projects/{project}/locations/{location}/models/{model}/evaluations/{evaluation}`
   */
  // const parent = 'abc123'
  /**
   *  The standard list filter.
   *    * `slice.dimension` - for =.
   */
  // const filter = 'abc123'
  /**
   *  The standard list page size.
   */
  // const pageSize = 1234
  /**
   *  The standard list page token.
   *  Typically obtained via
   *  ListModelEvaluationSlicesResponse.next_page_token google.cloud.aiplatform.v1.ListModelEvaluationSlicesResponse.next_page_token  of the previous
   *  ModelService.ListModelEvaluationSlices google.cloud.aiplatform.v1.ModelService.ListModelEvaluationSlices  call.
   */
  // const pageToken = 'abc123'
  /**
   *  Mask specifying which fields to read.
   */
  // const readMask = {}

  // Imports the Aiplatform library
  const {ModelServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new ModelServiceClient();

  async function callListModelEvaluationSlices() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await aiplatformClient.listModelEvaluationSlicesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListModelEvaluationSlices();
  // [END aiplatform_v1_generated_ModelService_ListModelEvaluationSlices_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
