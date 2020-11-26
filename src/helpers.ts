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
import {googleProtobufValueFromObject, googleProtobufValueToObject} from './value-converter';

interface ToValueFunction {
  toValue(): object | undefined;
}

interface FromValueFunction {
  new (): FromValueFunction;
  fromValue(value: object): object | undefined; // TODO: Input needs to be Value; output needs to be Message
}

export function addToValue() {
  const methods: ToValueFunction = ({} as unknown) as ToValueFunction;

  methods.toValue = function () {
    return toValue(this);
  };

  return methods;
}

export function addFromValue() {
  const methods: FromValueFunction = ({} as object) as FromValueFunction;

  methods.fromValue = function (value: object): object | undefined {
    let obj: any = new this();
    let message = fromValue(value);
    if (message !== undefined) {
      Object.assign(obj, message);
      return obj;
    }
    return undefined;
  };
  return methods;
}

export function toValue(obj: any): object | undefined {
  if (obj === undefined) {
    return undefined;
  }

  var value = googleProtobufValueFromObject(obj, function (val: any) {
    return val;
  });
  if (typeof value !== 'undefined') {
    return value;
  }
  return undefined;
}

export function fromValue(value: any): object | null | undefined {
  if (!value) {
    return undefined;
  }

  if (!('structValue' in value) || !('fields' in value.structValue)) {
    throw new Error(
      'ERROR: fromValue() was provided a malformed protobuf object'
    );
  }

  return googleProtobufValueToObject(value);
}
