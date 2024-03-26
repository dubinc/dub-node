// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dub from 'dub';

const dub = new Dub({
  token: 'My Token',
  workspaceId: 'dub_workspace_id',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource qr', () => {
  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(dub.qr.retrieve({ path: '/_stainless_unknown_path' })).rejects.toThrow(Dub.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      dub.qr.retrieve(
        {
          bgColor: 'string',
          fgColor: 'string',
          includeMargin: true,
          level: 'L',
          size: 0,
          url: 'https://example.com',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Dub.NotFoundError);
  });
});
