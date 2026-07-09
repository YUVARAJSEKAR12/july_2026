module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: [
      "hooks/hook.ts",
      "step-definitions/**/*.ts"],
    path:["features/**/*.feature"], 
    format: ["progress"],
    timeout: 60000
  }
};