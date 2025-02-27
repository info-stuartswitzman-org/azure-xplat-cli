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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-bf8a-58b35b59d301\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-04.ppe.azure-dns.com.\",\"ns2-04.ppe.azure-dns.net.\",\"ns3-04.ppe.azure-dns.org.\",\"ns4-04.ppe.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '513',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-bf8a-58b35b59d301',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b3d73667-08c3-4e3c-8024-879a715cea5a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'b98e5eaf-c940-4502-bf10-34d9093a1043',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T130734Z:b98e5eaf-c940-4502-bf10-34d9093a1043',
  date: 'Thu, 09 Nov 2017 13:07:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000002-0000-0000-bf8a-58b35b59d301\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-04.ppe.azure-dns.com.\",\"ns2-04.ppe.azure-dns.net.\",\"ns3-04.ppe.azure-dns.org.\",\"ns4-04.ppe.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '513',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000002-0000-0000-bf8a-58b35b59d301',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'b3d73667-08c3-4e3c-8024-879a715cea5a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'b98e5eaf-c940-4502-bf10-34d9093a1043',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T130734Z:b98e5eaf-c940-4502-bf10-34d9093a1043',
  date: 'Thu, 09 Nov 2017 13:07:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000003-0000-0000-bf8a-58b35b59d301\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-04.ppe.azure-dns.com.\",\"ns2-04.ppe.azure-dns.net.\",\"ns3-04.ppe.azure-dns.org.\",\"ns4-04.ppe.azure-dns.info.\"],\"numberOfRecordSets\":2,\"zoneType\":\"Public\"}}", { 'cache-control': 'private',
  'content-length': '546',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000003-0000-0000-bf8a-58b35b59d301',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '3a9b7e6d-8bb4-40fc-a2a9-d5649649468c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '1a179249-9cef-4656-8a9f-e2e1a34a3498',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T130740Z:1a179249-9cef-4656-8a9f-e2e1a34a3498',
  date: 'Thu, 09 Nov 2017 13:07:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01', '*')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\",\"name\":\"exampledns.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000003-0000-0000-bf8a-58b35b59d301\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-04.ppe.azure-dns.com.\",\"ns2-04.ppe.azure-dns.net.\",\"ns3-04.ppe.azure-dns.org.\",\"ns4-04.ppe.azure-dns.info.\"],\"numberOfRecordSets\":2,\"zoneType\":\"Public\"}}", { 'cache-control': 'private',
  'content-length': '546',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000003-0000-0000-bf8a-58b35b59d301',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '3a9b7e6d-8bb4-40fc-a2a9-d5649649468c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '1a179249-9cef-4656-8a9f-e2e1a34a3498',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T130740Z:1a179249-9cef-4656-8a9f-e2e1a34a3498',
  date: 'Thu, 09 Nov 2017 13:07:39 GMT',
  connection: 'close' });
 return result; }]];