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
  process.env['AZURE_VM_TEST_LOCATION'] = 'westcentralus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"packetCaptureName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName\",\r\n  \"etag\": \"W/\\\"30679091-89a1-4e0f-8fcc-3125eed50b82\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"target\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Compute/virtualMachines/TestVMForCap\",\r\n    \"bytesToCapturePerPacket\": 123456,\r\n    \"totalBytesPerSession\": 1234567,\r\n    \"timeLimitInSeconds\": 17000,\r\n    \"storageLocation\": {\r\n      \"storagePath\": \"\",\r\n      \"filePath\": \"D:\\\\test.cap\"\r\n    },\r\n    \"filters\": [\r\n      {\r\n        \"protocol\": \"TCP\",\r\n        \"localIPAddress\": \"10.0.0.11\",\r\n        \"localPort\": \"8080\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      },\r\n      {\r\n        \"protocol\": \"UDP\",\r\n        \"localIPAddress\": \"\",\r\n        \"localPort\": \"\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1092',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"30679091-89a1-4e0f-8fcc-3125eed50b82"',
  'x-ms-request-id': '29541f97-f8b8-43a3-bf0a-59a72f1d0cc1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '1aeb64ea-b648-4c69-9601-cdd95f5cfb53',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085551Z:1aeb64ea-b648-4c69-9601-cdd95f5cfb53',
  date: 'Mon, 02 Oct 2017 08:55:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName?api-version=2017-10-01')
  .reply(200, "{\r\n  \"name\": \"packetCaptureName\",\r\n  \"id\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Network/networkWatchers/networkWatcherName/packetCaptures/packetCaptureName\",\r\n  \"etag\": \"W/\\\"30679091-89a1-4e0f-8fcc-3125eed50b82\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"target\": \"/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-packet-capture/providers/Microsoft.Compute/virtualMachines/TestVMForCap\",\r\n    \"bytesToCapturePerPacket\": 123456,\r\n    \"totalBytesPerSession\": 1234567,\r\n    \"timeLimitInSeconds\": 17000,\r\n    \"storageLocation\": {\r\n      \"storagePath\": \"\",\r\n      \"filePath\": \"D:\\\\test.cap\"\r\n    },\r\n    \"filters\": [\r\n      {\r\n        \"protocol\": \"TCP\",\r\n        \"localIPAddress\": \"10.0.0.11\",\r\n        \"localPort\": \"8080\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      },\r\n      {\r\n        \"protocol\": \"UDP\",\r\n        \"localIPAddress\": \"\",\r\n        \"localPort\": \"\",\r\n        \"remoteIPAddress\": \"\",\r\n        \"remotePort\": \"\"\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1092',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"30679091-89a1-4e0f-8fcc-3125eed50b82"',
  'x-ms-request-id': '29541f97-f8b8-43a3-bf0a-59a72f1d0cc1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '1aeb64ea-b648-4c69-9601-cdd95f5cfb53',
  'x-ms-routing-request-id': 'WESTEUROPE:20171002T085551Z:1aeb64ea-b648-4c69-9601-cdd95f5cfb53',
  date: 'Mon, 02 Oct 2017 08:55:51 GMT',
  connection: 'close' });
 return result; }]];
