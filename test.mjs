// or ESM/TypeScript import
import Ajv from "./ajv/dist/ajv.js";

const ajv = new Ajv();

console.log('hello world');


const schema = {
  type: "object",
  properties: {
    foo: {type: "integer"},
    bar: {type: "string"},
  },
  required: ["foo"],
  additionalProperties: false,
}

const data = {
  foo: 1,
  bar: "abc",
}
// console.log(data);

const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) {console.log(validate.errors)} else {console.log('done')};