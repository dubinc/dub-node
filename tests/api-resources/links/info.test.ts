// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dub from 'dub';
import { Response } from 'node-fetch';

const dub = new Dub({
  token: 'My Token',
  workspaceId: 'dub_workspace_id',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource info', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = dub.links.info.retrieve({ domain: 'x', key: 'x', workspaceId: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await dub.links.info.retrieve({ domain: 'x', key: 'x', workspaceId: 'string' });
  });
});
