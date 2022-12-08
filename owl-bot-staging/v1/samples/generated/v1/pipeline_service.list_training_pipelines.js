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
  // [START aiplatform_v1_generated_PipelineService_ListTrainingPipelines_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Location to list the TrainingPipelines from.
   *  Format: `projects/{project}/locations/{location}`
   */
  // const parent = 'abc123'
  /**
   *  The standard list filter.
   *  Supported fields:
   *    * `display_name` supports `=`, `!=` comparisons, and `:` wildcard.
   *    * `state` supports `=`, `!=` comparisons.
   *    * `training_task_definition` `=`, `!=` comparisons, and `:` wildcard.
   *    * `create_time` supports `=`, `!=`,`<`, `<=`,`>`, `>=` comparisons.
   *      `create_time` must be in RFC 3339 format.
   *    * `labels` supports general map functions that is:
   *      `labels.key=value` - key:value equality
   *      `labels.key:* - key existence
   *  Some examples of using the filter are:
   *    * `state="PIPELINE_STATE_SUCCEEDED" AND display_name:"my_pipeline_*"`
   *    * `state!="PIPELINE_STATE_FAILED" OR display_name="my_pipeline"`
   *    * `NOT display_name="my_pipeline"`
   *    * `create_time>"2021-05-18T00:00:00Z"`
   *    * `training_task_definition:"*automl_text_classification*"`
   */
  // const filter = 'abc123'
  /**
   *  The standard list page size.
   */
  // const pageSize = 1234
  /**
   *  The standard list page token.
   *  Typically obtained via
   *  ListTrainingPipelinesResponse.next_page_token google.cloud.aiplatform.v1.ListTrainingPipelinesResponse.next_page_token  of the previous
   *  PipelineService.ListTrainingPipelines google.cloud.aiplatform.v1.PipelineService.ListTrainingPipelines  call.
   */
  // const pageToken = 'abc123'
  /**
   *  Mask specifying which fields to read.
   */
  // const readMask = {}

  // Imports the Aiplatform library
  const {PipelineServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new PipelineServiceClient();

  async function callListTrainingPipelines() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await aiplatformClient.listTrainingPipelinesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListTrainingPipelines();
  // [END aiplatform_v1_generated_PipelineService_ListTrainingPipelines_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
