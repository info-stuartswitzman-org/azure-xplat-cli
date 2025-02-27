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
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/SRV/set-srv?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set3499\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"e8a9aa58-2ba6-4848-a1e1-9aa2c0c7fd5a\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-srv.exampledns.com.\",\"TTL\":3600,\"SRVRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: 'e8a9aa58-2ba6-4848-a1e1-9aa2c0c7fd5a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '41b0a24b-17ba-4b7c-ab34-4fcaf6f23354',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '9b57ba9a-d5c8-49fa-a59d-e2bbfb869a37',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131229Z:9b57ba9a-d5c8-49fa-a59d-e2bbfb869a37',
  date: 'Thu, 09 Nov 2017 13:12:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/SRV/set-srv?api-version=2017-09-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/947d47b4-7883-4bb9-9d85-c5e8e2f572ce\\/resourceGroups\\/xplat-test-dns-zone-record-set3499\\/providers\\/Microsoft.Network\\/dnszones\\/exampledns.com\\/SRV\\/set-srv\",\"name\":\"set-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"e8a9aa58-2ba6-4848-a1e1-9aa2c0c7fd5a\",\"properties\":{\"metadata\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"fqdn\":\"set-srv.exampledns.com.\",\"TTL\":3600,\"SRVRecords\":[]}}", { 'cache-control': 'private',
  'content-length': '403',
  'content-type': 'application/json; charset=utf-8',
  etag: 'e8a9aa58-2ba6-4848-a1e1-9aa2c0c7fd5a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '41b0a24b-17ba-4b7c-ab34-4fcaf6f23354',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '9b57ba9a-d5c8-49fa-a59d-e2bbfb869a37',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131229Z:9b57ba9a-d5c8-49fa-a59d-e2bbfb869a37',
  date: 'Thu, 09 Nov 2017 13:12:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/SRV/set-srv?api-version=2017-09-01')
  .reply(200, "", { 'cache-control': 'private',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '0595db9f-9903-408a-bfbc-f5e208864aa6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '95745f4e-c475-4356-af3c-ff28a330e3d2',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131230Z:95745f4e-c475-4356-af3c-ff28a330e3d2',
  date: 'Thu, 09 Nov 2017 13:12:30 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/SRV/set-srv?api-version=2017-09-01')
  .reply(200, "", { 'cache-control': 'private',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '0595db9f-9903-408a-bfbc-f5e208864aa6',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '95745f4e-c475-4356-af3c-ff28a330e3d2',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131230Z:95745f4e-c475-4356-af3c-ff28a330e3d2',
  date: 'Thu, 09 Nov 2017 13:12:30 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/SRV/set-srv?api-version=2017-09-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-srv' does not exist in resource group 'xplat-test-dns-zone-record-set3499' of subscription '947d47b4-7883-4bb9-9d85-c5e8e2f572ce'.\"}", { 'cache-control': 'private',
  'content-length': '187',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '555b3d78-9dc9-4d4b-83e4-4976342ae328',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'effd7548-89d2-411e-b699-45f8c1804e86',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131237Z:effd7548-89d2-411e-b699-45f8c1804e86',
  date: 'Thu, 09 Nov 2017 13:12:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone-record-set3499/providers/Microsoft.Network/dnsZones/exampledns.com/SRV/set-srv?api-version=2017-09-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The resource record 'set-srv' does not exist in resource group 'xplat-test-dns-zone-record-set3499' of subscription '947d47b4-7883-4bb9-9d85-c5e8e2f572ce'.\"}", { 'cache-control': 'private',
  'content-length': '187',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '555b3d78-9dc9-4d4b-83e4-4976342ae328',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'effd7548-89d2-411e-b699-45f8c1804e86',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T131237Z:effd7548-89d2-411e-b699-45f8c1804e86',
  date: 'Thu, 09 Nov 2017 13:12:37 GMT',
  connection: 'close' });
 return result; }]];