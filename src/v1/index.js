import applyTemplate from "json-transformer-funcs-primitive";
import fromCollection from "json-transformer-funcs-one-dimension";

import writePath from "json-write-path";
import resolvePath from "json-source-path";

import spec from "./spec.json" with {type: "json"};

const functions = { applyTemplate, fromCollection };

const getSource = (instruction, registry) => {
  if (instruction?.sourcePath === null) {
    // Runs ONLY if value is exactly null
    return null;
  };

  const source = resolvePath(registry, instruction.sourcePath);

  return source;
};

const runSingleInstruction = (instruction, registry, showLog, returnLog) => {
  const localSpec = spec;
  const templateKey = instruction.templateKey;
  let localSpecKey = localSpec[templateKey];
  let result;

  const source = getSource(instruction, registry);
  // console.log("source : ", source);

  if (source === null) {
    result = localSpecKey;
  } else {
    result = functions[instruction.func](source, localSpecKey);
  };

  writePath(registry, instruction.destinationPath, result);
};

const startFunc = (instructions, registry, showLog, returnLog) => {
  instructions.forEach(instruction => {
    runSingleInstruction(instruction, registry, showLog, returnLog);
  });
};

export default startFunc;