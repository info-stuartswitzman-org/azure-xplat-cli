// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitAuthorizationName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName\",\r\n  \"etag\": \"W/\\\"f0a9fdc4-7fc3-445c-b388-2d579853d07f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"91c636a4-13cc-4db3-b362-6441f82b76d9\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bb5bfb2c-896f-4037-aa24-1cafa2482a1c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '2e2fe354-1f06-4376-b905-608881ecfbf2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T112514Z:2e2fe354-1f06-4376-b905-608881ecfbf2',
  date: 'Wed, 27 Sep 2017 11:25:13 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"expressRouteCircuitAuthorizationName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-authorization/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName/authorizations/expressRouteCircuitAuthorizationName\",\r\n  \"etag\": \"W/\\\"f0a9fdc4-7fc3-445c-b388-2d579853d07f\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"authorizationKey\": \"91c636a4-13cc-4db3-b362-6441f82b76d9\",\r\n    \"authorizationUseStatus\": \"Available\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '512',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bb5bfb2c-896f-4037-aa24-1cafa2482a1c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': '2e2fe354-1f06-4376-b905-608881ecfbf2',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T112514Z:2e2fe354-1f06-4376-b905-608881ecfbf2',
  date: 'Wed, 27 Sep 2017 11:25:13 GMT',
  connection: 'close' });
 return result; }]];
