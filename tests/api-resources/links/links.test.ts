// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Dub from 'dub';
import { Response } from 'node-fetch';

const dub = new Dub({
  token: 'My Token',
  workspaceId: 'dub_workspace_id',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource links', () => {
  test('create: only required params', async () => {
    const responsePromise = dub.links.create({ workspaceId: 'string', url: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await dub.links.create({
      workspaceId: 'string',
      url: 'string',
      android: 'string',
      archived: true,
      comments: 'string',
      description: 'string',
      domain: 'string',
      expiresAt: '2019-12-27T18:11:19.117Z',
      geo: { foo: 'string' },
      image: 'string',
      ios: 'string',
      key: 'string',
      password: 'string',
      prefix: 'string',
      proxy: true,
      publicStats: true,
      rewrite: true,
      tagId: 'string',
      tagIds: 'string',
      title: 'string',
    });
  });

  test('update: only required params', async () => {
    const responsePromise = dub.links.update('string', { workspaceId: 'string', url: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await dub.links.update('string', {
      workspaceId: 'string',
      url: 'string',
      android: 'string',
      archived: true,
      comments: 'string',
      description: 'string',
      domain: 'string',
      expiresAt: '2019-12-27T18:11:19.117Z',
      geo: { foo: 'string' },
      image: 'string',
      ios: 'string',
      key: 'string',
      password: 'string',
      prefix: 'string',
      proxy: true,
      publicStats: true,
      rewrite: true,
      tagId: 'string',
      tagIds: 'string',
      title: 'string',
    });
  });

  test('list: only required params', async () => {
    const responsePromise = dub.links.list({ workspaceId: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await dub.links.list({
      workspaceId: 'string',
      domain: 'string',
      page: 0,
      search: 'string',
      showArchived: true,
      sort: 'createdAt',
      tagId: 'string',
      tagIds: 'string',
      userId: 'string',
      withTags: true,
    });
  });

  test('deleteLink: only required params', async () => {
    const responsePromise = dub.links.deleteLink('string', { workspaceId: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('deleteLink: required and optional params', async () => {
    const response = await dub.links.deleteLink('string', { workspaceId: 'string' });
  });
});
