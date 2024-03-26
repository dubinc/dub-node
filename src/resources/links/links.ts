// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'dub/core';
import { APIResource } from 'dub/resource';
import * as LinksAPI from 'dub/resources/links/links';
import * as BulkAPI from 'dub/resources/links/bulk';
import * as InfoAPI from 'dub/resources/links/info';

export class Links extends APIResource {
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);

  /**
   * Create a new link for the authenticated workspace.
   */
  create(params: LinkCreateParams, options?: Core.RequestOptions): Core.APIPromise<LinkCreateResponse> {
    const { workspaceId = this._client.workspaceId, ...body } = params;
    return this._client.post('/links', { query: { workspaceId }, body, ...options });
  }

  /**
   * Edit a link for the authenticated workspace.
   */
  update(
    linkId: string,
    params: LinkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkUpdateResponse> {
    const { workspaceId = this._client.workspaceId, ...body } = params;
    return this._client.put(`/links/${linkId}`, { query: { workspaceId }, body, ...options });
  }

  /**
   * Retrieve a list of links for the authenticated workspace. The list will be
   * paginated and the provided query parameters allow filtering the returned links.
   */
  list(params: LinkListParams, options?: Core.RequestOptions): Core.APIPromise<LinkListResponse> {
    const { workspaceId = this._client.workspaceId, ...query } = params;
    return this._client.get('/links', { query: { workspaceId, ...query }, ...options });
  }

  /**
   * Delete a link for the authenticated workspace.
   */
  deleteLink(
    linkId: string,
    params: LinkDeleteLinkParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LinkDeleteLinkResponse> {
    const { workspaceId = this._client.workspaceId } = params;
    return this._client.delete(`/links/${linkId}`, { query: { workspaceId }, ...options });
  }
}

export interface LinkCreateResponse {
  /**
   * The unique ID of the short link.
   */
  id: string;

  /**
   * The Android destination URL for the short link for Android device targeting.
   */
  android: string | null;

  /**
   * Whether the short link is archived.
   */
  archived: boolean;

  /**
   * The number of clicks on the short link.
   */
  clicks: number;

  /**
   * The comments for the short link.
   */
  comments: string | null;

  /**
   * The date and time when the short link was created.
   */
  createdAt: string;

  /**
   * The description of the short link generated via `api.dub.co/metatags`. Will be
   * used for Custom Social Media Cards if `proxy` is true.
   */
  description: string | null;

  /**
   * The domain of the short link. If not provided, the primary domain for the
   * workspace will be used (or `dub.sh` if the workspace has no domains).
   */
  domain: string;

  /**
   * The date and time when the short link will expire in ISO-8601 format. Must be in
   * the future.
   */
  expiresAt: string | null;

  /**
   * Geo targeting information for the short link in JSON format
   * `{[COUNTRY]: https://example.com }`. Learn more: https://d.to/geo
   */
  geo: Record<string, string> | null;

  /**
   * The image of the short link generated via `api.dub.co/metatags`. Will be used
   * for Custom Social Media Cards if `proxy` is true.
   */
  image: string | null;

  /**
   * The iOS destination URL for the short link for iOS device targeting.
   */
  ios: string | null;

  /**
   * The short link slug. If not provided, a random 7-character slug will be
   * generated.
   */
  key: string;

  /**
   * The date and time when the short link was last clicked.
   */
  lastClicked: string | null;

  /**
   * The password required to access the destination URL of the short link.
   */
  password: string | null;

  /**
   * @deprecated: [DEPRECATED] (use workspaceId instead): The project ID of the short
   * link.
   */
  projectId: string;

  /**
   * Whether the short link uses Custom Social Media Cards feature.
   */
  proxy: boolean;

  /**
   * Whether the short link's stats are publicly accessible.
   */
  publicStats: boolean;

  /**
   * The full URL of the QR code for the short link (e.g.
   * `https://api.dub.co/qr?url=https://dub.sh/try`).
   */
  qrCode: string;

  /**
   * Whether the short link uses link cloaking.
   */
  rewrite: boolean;

  /**
   * The full URL of the short link, including the https protocol (e.g.
   * `https://dub.sh/try`).
   */
  shortLink: string;

  /**
   * @deprecated: [DEPRECATED] (use `tags` instead): The unique ID of the tag
   * assigned to the short link.
   */
  tagId: string | null;

  /**
   * The tags assigned to the short link.
   */
  tags: Array<LinkCreateResponse.Tag> | null;

  /**
   * The title of the short link generated via `api.dub.co/metatags`. Will be used
   * for Custom Social Media Cards if `proxy` is true.
   */
  title: string | null;

  /**
   * The date and time when the short link was last updated.
   */
  updatedAt: string;

  /**
   * The destination URL of the short link.
   */
  url: string;

  /**
   * The user ID of the creator of the short link.
   */
  userId: string;

  /**
   * The UTM campaign of the short link.
   */
  utm_campaign: string | null;

  /**
   * The UTM content of the short link.
   */
  utm_content: string | null;

  /**
   * The UTM medium of the short link.
   */
  utm_medium: string | null;

  /**
   * The UTM source of the short link.
   */
  utm_source: string | null;

  /**
   * The UTM term of the short link.
   */
  utm_term: string | null;

  /**
   * The workspace ID of the short link.
   */
  workspaceId: string;
}

export namespace LinkCreateResponse {
  export interface Tag {
    /**
     * The unique ID of the tag.
     */
    id: string;

    /**
     * The color of the tag.
     */
    color: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'brown';

    /**
     * The name of the tag.
     */
    name: string;
  }
}

export interface LinkUpdateResponse {
  /**
   * The unique ID of the short link.
   */
  id: string;

  /**
   * The Android destination URL for the short link for Android device targeting.
   */
  android: string | null;

  /**
   * Whether the short link is archived.
   */
  archived: boolean;

  /**
   * The number of clicks on the short link.
   */
  clicks: number;

  /**
   * The comments for the short link.
   */
  comments: string | null;

  /**
   * The date and time when the short link was created.
   */
  createdAt: string;

  /**
   * The description of the short link generated via `api.dub.co/metatags`. Will be
   * used for Custom Social Media Cards if `proxy` is true.
   */
  description: string | null;

  /**
   * The domain of the short link. If not provided, the primary domain for the
   * workspace will be used (or `dub.sh` if the workspace has no domains).
   */
  domain: string;

  /**
   * The date and time when the short link will expire in ISO-8601 format. Must be in
   * the future.
   */
  expiresAt: string | null;

  /**
   * Geo targeting information for the short link in JSON format
   * `{[COUNTRY]: https://example.com }`. Learn more: https://d.to/geo
   */
  geo: Record<string, string> | null;

  /**
   * The image of the short link generated via `api.dub.co/metatags`. Will be used
   * for Custom Social Media Cards if `proxy` is true.
   */
  image: string | null;

  /**
   * The iOS destination URL for the short link for iOS device targeting.
   */
  ios: string | null;

  /**
   * The short link slug. If not provided, a random 7-character slug will be
   * generated.
   */
  key: string;

  /**
   * The date and time when the short link was last clicked.
   */
  lastClicked: string | null;

  /**
   * The password required to access the destination URL of the short link.
   */
  password: string | null;

  /**
   * @deprecated: [DEPRECATED] (use workspaceId instead): The project ID of the short
   * link.
   */
  projectId: string;

  /**
   * Whether the short link uses Custom Social Media Cards feature.
   */
  proxy: boolean;

  /**
   * Whether the short link's stats are publicly accessible.
   */
  publicStats: boolean;

  /**
   * The full URL of the QR code for the short link (e.g.
   * `https://api.dub.co/qr?url=https://dub.sh/try`).
   */
  qrCode: string;

  /**
   * Whether the short link uses link cloaking.
   */
  rewrite: boolean;

  /**
   * The full URL of the short link, including the https protocol (e.g.
   * `https://dub.sh/try`).
   */
  shortLink: string;

  /**
   * @deprecated: [DEPRECATED] (use `tags` instead): The unique ID of the tag
   * assigned to the short link.
   */
  tagId: string | null;

  /**
   * The tags assigned to the short link.
   */
  tags: Array<LinkUpdateResponse.Tag> | null;

  /**
   * The title of the short link generated via `api.dub.co/metatags`. Will be used
   * for Custom Social Media Cards if `proxy` is true.
   */
  title: string | null;

  /**
   * The date and time when the short link was last updated.
   */
  updatedAt: string;

  /**
   * The destination URL of the short link.
   */
  url: string;

  /**
   * The user ID of the creator of the short link.
   */
  userId: string;

  /**
   * The UTM campaign of the short link.
   */
  utm_campaign: string | null;

  /**
   * The UTM content of the short link.
   */
  utm_content: string | null;

  /**
   * The UTM medium of the short link.
   */
  utm_medium: string | null;

  /**
   * The UTM source of the short link.
   */
  utm_source: string | null;

  /**
   * The UTM term of the short link.
   */
  utm_term: string | null;

  /**
   * The workspace ID of the short link.
   */
  workspaceId: string;
}

export namespace LinkUpdateResponse {
  export interface Tag {
    /**
     * The unique ID of the tag.
     */
    id: string;

    /**
     * The color of the tag.
     */
    color: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'brown';

    /**
     * The name of the tag.
     */
    name: string;
  }
}

export type LinkListResponse = Array<LinkListResponse.LinkListResponseItem>;

export namespace LinkListResponse {
  export interface LinkListResponseItem {
    /**
     * The unique ID of the short link.
     */
    id: string;

    /**
     * The Android destination URL for the short link for Android device targeting.
     */
    android: string | null;

    /**
     * Whether the short link is archived.
     */
    archived: boolean;

    /**
     * The number of clicks on the short link.
     */
    clicks: number;

    /**
     * The comments for the short link.
     */
    comments: string | null;

    /**
     * The date and time when the short link was created.
     */
    createdAt: string;

    /**
     * The description of the short link generated via `api.dub.co/metatags`. Will be
     * used for Custom Social Media Cards if `proxy` is true.
     */
    description: string | null;

    /**
     * The domain of the short link. If not provided, the primary domain for the
     * workspace will be used (or `dub.sh` if the workspace has no domains).
     */
    domain: string;

    /**
     * The date and time when the short link will expire in ISO-8601 format. Must be in
     * the future.
     */
    expiresAt: string | null;

    /**
     * Geo targeting information for the short link in JSON format
     * `{[COUNTRY]: https://example.com }`. Learn more: https://d.to/geo
     */
    geo: Record<string, string> | null;

    /**
     * The image of the short link generated via `api.dub.co/metatags`. Will be used
     * for Custom Social Media Cards if `proxy` is true.
     */
    image: string | null;

    /**
     * The iOS destination URL for the short link for iOS device targeting.
     */
    ios: string | null;

    /**
     * The short link slug. If not provided, a random 7-character slug will be
     * generated.
     */
    key: string;

    /**
     * The date and time when the short link was last clicked.
     */
    lastClicked: string | null;

    /**
     * The password required to access the destination URL of the short link.
     */
    password: string | null;

    /**
     * @deprecated: [DEPRECATED] (use workspaceId instead): The project ID of the short
     * link.
     */
    projectId: string;

    /**
     * Whether the short link uses Custom Social Media Cards feature.
     */
    proxy: boolean;

    /**
     * Whether the short link's stats are publicly accessible.
     */
    publicStats: boolean;

    /**
     * The full URL of the QR code for the short link (e.g.
     * `https://api.dub.co/qr?url=https://dub.sh/try`).
     */
    qrCode: string;

    /**
     * Whether the short link uses link cloaking.
     */
    rewrite: boolean;

    /**
     * The full URL of the short link, including the https protocol (e.g.
     * `https://dub.sh/try`).
     */
    shortLink: string;

    /**
     * @deprecated: [DEPRECATED] (use `tags` instead): The unique ID of the tag
     * assigned to the short link.
     */
    tagId: string | null;

    /**
     * The tags assigned to the short link.
     */
    tags: Array<LinkListResponseItem.Tag> | null;

    /**
     * The title of the short link generated via `api.dub.co/metatags`. Will be used
     * for Custom Social Media Cards if `proxy` is true.
     */
    title: string | null;

    /**
     * The date and time when the short link was last updated.
     */
    updatedAt: string;

    /**
     * The destination URL of the short link.
     */
    url: string;

    /**
     * The user ID of the creator of the short link.
     */
    userId: string;

    /**
     * The UTM campaign of the short link.
     */
    utm_campaign: string | null;

    /**
     * The UTM content of the short link.
     */
    utm_content: string | null;

    /**
     * The UTM medium of the short link.
     */
    utm_medium: string | null;

    /**
     * The UTM source of the short link.
     */
    utm_source: string | null;

    /**
     * The UTM term of the short link.
     */
    utm_term: string | null;

    /**
     * The workspace ID of the short link.
     */
    workspaceId: string;
  }

  export namespace LinkListResponseItem {
    export interface Tag {
      /**
       * The unique ID of the tag.
       */
      id: string;

      /**
       * The color of the tag.
       */
      color: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'brown';

      /**
       * The name of the tag.
       */
      name: string;
    }
  }
}

export interface LinkDeleteLinkResponse {
  /**
   * The unique ID of the short link.
   */
  id: string;

  /**
   * The Android destination URL for the short link for Android device targeting.
   */
  android: string | null;

  /**
   * Whether the short link is archived.
   */
  archived: boolean;

  /**
   * The number of clicks on the short link.
   */
  clicks: number;

  /**
   * The comments for the short link.
   */
  comments: string | null;

  /**
   * The date and time when the short link was created.
   */
  createdAt: string;

  /**
   * The description of the short link generated via `api.dub.co/metatags`. Will be
   * used for Custom Social Media Cards if `proxy` is true.
   */
  description: string | null;

  /**
   * The domain of the short link. If not provided, the primary domain for the
   * workspace will be used (or `dub.sh` if the workspace has no domains).
   */
  domain: string;

  /**
   * The date and time when the short link will expire in ISO-8601 format. Must be in
   * the future.
   */
  expiresAt: string | null;

  /**
   * Geo targeting information for the short link in JSON format
   * `{[COUNTRY]: https://example.com }`. Learn more: https://d.to/geo
   */
  geo: Record<string, string> | null;

  /**
   * The image of the short link generated via `api.dub.co/metatags`. Will be used
   * for Custom Social Media Cards if `proxy` is true.
   */
  image: string | null;

  /**
   * The iOS destination URL for the short link for iOS device targeting.
   */
  ios: string | null;

  /**
   * The short link slug. If not provided, a random 7-character slug will be
   * generated.
   */
  key: string;

  /**
   * The date and time when the short link was last clicked.
   */
  lastClicked: string | null;

  /**
   * The password required to access the destination URL of the short link.
   */
  password: string | null;

  /**
   * @deprecated: [DEPRECATED] (use workspaceId instead): The project ID of the short
   * link.
   */
  projectId: string;

  /**
   * Whether the short link uses Custom Social Media Cards feature.
   */
  proxy: boolean;

  /**
   * Whether the short link's stats are publicly accessible.
   */
  publicStats: boolean;

  /**
   * The full URL of the QR code for the short link (e.g.
   * `https://api.dub.co/qr?url=https://dub.sh/try`).
   */
  qrCode: string;

  /**
   * Whether the short link uses link cloaking.
   */
  rewrite: boolean;

  /**
   * The full URL of the short link, including the https protocol (e.g.
   * `https://dub.sh/try`).
   */
  shortLink: string;

  /**
   * @deprecated: [DEPRECATED] (use `tags` instead): The unique ID of the tag
   * assigned to the short link.
   */
  tagId: string | null;

  /**
   * The tags assigned to the short link.
   */
  tags: Array<LinkDeleteLinkResponse.Tag> | null;

  /**
   * The title of the short link generated via `api.dub.co/metatags`. Will be used
   * for Custom Social Media Cards if `proxy` is true.
   */
  title: string | null;

  /**
   * The date and time when the short link was last updated.
   */
  updatedAt: string;

  /**
   * The destination URL of the short link.
   */
  url: string;

  /**
   * The user ID of the creator of the short link.
   */
  userId: string;

  /**
   * The UTM campaign of the short link.
   */
  utm_campaign: string | null;

  /**
   * The UTM content of the short link.
   */
  utm_content: string | null;

  /**
   * The UTM medium of the short link.
   */
  utm_medium: string | null;

  /**
   * The UTM source of the short link.
   */
  utm_source: string | null;

  /**
   * The UTM term of the short link.
   */
  utm_term: string | null;

  /**
   * The workspace ID of the short link.
   */
  workspaceId: string;
}

export namespace LinkDeleteLinkResponse {
  export interface Tag {
    /**
     * The unique ID of the tag.
     */
    id: string;

    /**
     * The color of the tag.
     */
    color: 'red' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'brown';

    /**
     * The name of the tag.
     */
    name: string;
  }
}

export interface LinkCreateParams {
  /**
   * Query param: The ID of the workspace to create the link for.
   */
  workspaceId?: string;

  /**
   * Body param: The destination URL of the short link.
   */
  url: string;

  /**
   * Body param: The Android destination URL for the short link for Android device
   * targeting.
   */
  android?: string | null;

  /**
   * Body param: Whether the short link is archived.
   */
  archived?: boolean;

  /**
   * Body param: The comments for the short link.
   */
  comments?: string | null;

  /**
   * Body param: The description of the short link generated via
   * `api.dub.co/metatags`. Will be used for Custom Social Media Cards if `proxy` is
   * true.
   */
  description?: string | null;

  /**
   * Body param: The domain of the short link. If not provided, the primary domain
   * for the workspace will be used (or `dub.sh` if the workspace has no domains).
   */
  domain?: string;

  /**
   * Body param: The date and time when the short link will expire in ISO-8601
   * format. Must be in the future.
   */
  expiresAt?: string | null;

  /**
   * Body param: Geo targeting information for the short link in JSON format
   * `{[COUNTRY]: https://example.com }`.
   */
  geo?: Record<string, string> | null;

  /**
   * Body param: The image of the short link generated via `api.dub.co/metatags`.
   * Will be used for Custom Social Media Cards if `proxy` is true.
   */
  image?: string | null;

  /**
   * Body param: The iOS destination URL for the short link for iOS device targeting.
   */
  ios?: string | null;

  /**
   * Body param: The short link slug. If not provided, a random 7-character slug will
   * be generated.
   */
  key?: string;

  /**
   * Body param: The password required to access the destination URL of the short
   * link.
   */
  password?: string | null;

  /**
   * Body param: The prefix of the short link slug for randomly-generated keys (e.g.
   * if prefix is `/c/`, generated keys will be in the `/c/:key` format). Will be
   * ignored if `key` is provided.
   */
  prefix?: string;

  /**
   * Body param: Whether the short link uses Custom Social Media Cards feature.
   */
  proxy?: boolean;

  /**
   * Body param: Whether the short link's stats are publicly accessible.
   */
  publicStats?: boolean;

  /**
   * Body param: Whether the short link uses link cloaking.
   */
  rewrite?: boolean;

  /**
   * Body param: [DEPRECATED] (use tagIds instead): The unique ID of the tag assigned
   * to the short link.
   */
  tagId?: string | null;

  /**
   * Body param: The unique IDs of the tags assigned to the short link.
   */
  tagIds?: string | Array<string>;

  /**
   * Body param: The title of the short link generated via `api.dub.co/metatags`.
   * Will be used for Custom Social Media Cards if `proxy` is true.
   */
  title?: string | null;
}

export interface LinkUpdateParams {
  /**
   * Query param: The ID of the workspace the link belongs to.
   */
  workspaceId?: string;

  /**
   * Body param: The destination URL of the short link.
   */
  url: string;

  /**
   * Body param: The Android destination URL for the short link for Android device
   * targeting.
   */
  android?: string | null;

  /**
   * Body param: Whether the short link is archived.
   */
  archived?: boolean;

  /**
   * Body param: The comments for the short link.
   */
  comments?: string | null;

  /**
   * Body param: The description of the short link generated via
   * `api.dub.co/metatags`. Will be used for Custom Social Media Cards if `proxy` is
   * true.
   */
  description?: string | null;

  /**
   * Body param: The domain of the short link. If not provided, the primary domain
   * for the workspace will be used (or `dub.sh` if the workspace has no domains).
   */
  domain?: string;

  /**
   * Body param: The date and time when the short link will expire in ISO-8601
   * format. Must be in the future.
   */
  expiresAt?: string | null;

  /**
   * Body param: Geo targeting information for the short link in JSON format
   * `{[COUNTRY]: https://example.com }`.
   */
  geo?: Record<string, string> | null;

  /**
   * Body param: The image of the short link generated via `api.dub.co/metatags`.
   * Will be used for Custom Social Media Cards if `proxy` is true.
   */
  image?: string | null;

  /**
   * Body param: The iOS destination URL for the short link for iOS device targeting.
   */
  ios?: string | null;

  /**
   * Body param: The short link slug. If not provided, a random 7-character slug will
   * be generated.
   */
  key?: string;

  /**
   * Body param: The password required to access the destination URL of the short
   * link.
   */
  password?: string | null;

  /**
   * Body param: The prefix of the short link slug for randomly-generated keys (e.g.
   * if prefix is `/c/`, generated keys will be in the `/c/:key` format). Will be
   * ignored if `key` is provided.
   */
  prefix?: string;

  /**
   * Body param: Whether the short link uses Custom Social Media Cards feature.
   */
  proxy?: boolean;

  /**
   * Body param: Whether the short link's stats are publicly accessible.
   */
  publicStats?: boolean;

  /**
   * Body param: Whether the short link uses link cloaking.
   */
  rewrite?: boolean;

  /**
   * Body param: [DEPRECATED] (use tagIds instead): The unique ID of the tag assigned
   * to the short link.
   */
  tagId?: string | null;

  /**
   * Body param: The unique IDs of the tags assigned to the short link.
   */
  tagIds?: string | Array<string>;

  /**
   * Body param: The title of the short link generated via `api.dub.co/metatags`.
   * Will be used for Custom Social Media Cards if `proxy` is true.
   */
  title?: string | null;
}

export interface LinkListParams {
  /**
   * The ID of the workspace the link belongs to.
   */
  workspaceId?: string;

  /**
   * The domain to filter the links by. E.g. `ac.me`. If not provided, all links for
   * the workspace will be returned.
   */
  domain?: string;

  /**
   * The page number for pagination (each page contains 100 links).
   */
  page?: number;

  /**
   * The search term to filter the links by. The search term will be matched against
   * the short link slug and the destination url.
   */
  search?: string;

  /**
   * Whether to include archived links in the response. Defaults to `false` if not
   * provided.
   */
  showArchived?: boolean;

  /**
   * The field to sort the links by. The default is `createdAt`, and sort order is
   * always descending.
   */
  sort?: 'createdAt' | 'clicks' | 'lastClicked';

  /**
   * [DEPRECATED] (use tagIds instead): The tag ID to filter the links by.
   */
  tagId?: string;

  /**
   * The tag IDs to filter the links by.
   */
  tagIds?: string | Array<string>;

  /**
   * The user ID to filter the links by.
   */
  userId?: string;

  /**
   * Whether to include tags in the response. Defaults to `false` if not provided.
   */
  withTags?: boolean;
}

export interface LinkDeleteLinkParams {
  /**
   * The ID of the workspace the link belongs to.
   */
  workspaceId?: string;
}

export namespace Links {
  export import LinkCreateResponse = LinksAPI.LinkCreateResponse;
  export import LinkUpdateResponse = LinksAPI.LinkUpdateResponse;
  export import LinkListResponse = LinksAPI.LinkListResponse;
  export import LinkDeleteLinkResponse = LinksAPI.LinkDeleteLinkResponse;
  export import LinkCreateParams = LinksAPI.LinkCreateParams;
  export import LinkUpdateParams = LinksAPI.LinkUpdateParams;
  export import LinkListParams = LinksAPI.LinkListParams;
  export import LinkDeleteLinkParams = LinksAPI.LinkDeleteLinkParams;
  export import Info = InfoAPI.Info;
  export import InfoRetrieveResponse = InfoAPI.InfoRetrieveResponse;
  export import InfoRetrieveParams = InfoAPI.InfoRetrieveParams;
  export import Bulk = BulkAPI.Bulk;
  export import BulkCreateResponse = BulkAPI.BulkCreateResponse;
  export import BulkCreateParams = BulkAPI.BulkCreateParams;
}
