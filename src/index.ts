// Copyright 2020 Google LLC
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

import * as v1beta1 from './v1beta1';
const DatasetServiceClient = v1beta1.DatasetServiceClient;
const EndpointServiceClient = v1beta1.EndpointServiceClient;
const JobServiceClient = v1beta1.JobServiceClient;
const MigrationServiceClient = v1beta1.MigrationServiceClient;
const ModelServiceClient = v1beta1.ModelServiceClient;
const PipelineServiceClient = v1beta1.PipelineServiceClient;
const PredictionServiceClient = v1beta1.PredictionServiceClient;
const SpecialistPoolServiceClient = v1beta1.SpecialistPoolServiceClient;
export {
  v1beta1,
  DatasetServiceClient,
  EndpointServiceClient,
  JobServiceClient,
  MigrationServiceClient,
  ModelServiceClient,
  PipelineServiceClient,
  PredictionServiceClient,
  SpecialistPoolServiceClient,
};
export default {
  v1beta1,
  DatasetServiceClient,
  EndpointServiceClient,
  JobServiceClient,
  MigrationServiceClient,
  ModelServiceClient,
  PipelineServiceClient,
  PredictionServiceClient,
  SpecialistPoolServiceClient,
};
import * as protos from '../protos/protos';

import * as _helpers from './helpers';

// Export the toValue and fromValue functions for converting
// JS objects to and from protobuf.Value objects.
const toValue = _helpers.toValue;
const fromValue = _helpers.fromValue;
const helpers = {toValue, fromValue};
export {helpers};

const enhancedTypesJson = require('./enhanced-types.json');

// Get the list of enhanced types
const schemaRoot = enhancedTypesJson['schema'];

// Walk the tree of nested namespaces contained within the enhanced-types.json file
function walkNamespaces(jsonNode: any, rootNamespace?: any): void {
  for (let namespaceName in jsonNode) {
    if (jsonNode.hasOwnProperty(namespaceName)) {
      // Get the proto representation of the namespace
      // If namespace is undefined, use base namespace
      if (!rootNamespace) {
        rootNamespace = protos.google.cloud.aiplatform.v1beta1.schema;
      }

      let namespace =
        namespaceName in rootNamespace
          ? rootNamespace[namespaceName]
          : undefined;

      // Get the namespace object from JSON
      let namespaceJsonObject =
        namespaceName in jsonNode ? jsonNode[namespaceName] : undefined;

      // Verify that this is an array node.
      if (
        namespace &&
        namespaceJsonObject &&
        Array.isArray(namespaceJsonObject)
      ) {
        // Assign the methods to this list of types.
        assignMethodsToMessages(namespace, namespaceJsonObject);

        // Check if this is another node.
      } else if (
        namespace &&
        namespaceJsonObject &&
        typeof namespaceJsonObject === 'object'
      ) {
        // Iterate over the next level of namespaces
        walkNamespaces(namespaceJsonObject, namespace);
      }
    }
  }
}

// Assign the toValue() and fromValue() helper methods to the enhanced message objects.
function assignMethodsToMessages(namespace: any, messages: string[]): void {
  for (const message of messages) {
    if (message in namespace) {
      let enhancedMessage = namespace[message];
      if (enhancedMessage) {
        Object.assign(enhancedMessage.prototype, _helpers.addToValue());
        Object.assign(enhancedMessage, _helpers.addFromValue());
      }
    }
  }
}

walkNamespaces(schemaRoot);

export {protos};
