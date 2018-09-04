// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  detectorServiceHost: '167.99.171.84',
  detectorServicePort: 8001,
  detectorApiBasePath: '/api/v1',
  useDetectorApi: true,
  tfServingHost: 'http://detector-model-serving',
  tfServingPort: 8501,
  tfServingBasePath: '/v1/models',
  modelName: 'dog_breed',
  signature_name: 'serving_default',
  corsAnywhereHost: 'localhost',
  corsAnywherePort: 9501
};
