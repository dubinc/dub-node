// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'dub/core';
import { APIResource } from 'dub/resource';
import * as InfoAPI from 'dub/resources/links/info';

export class Info extends APIResource {
  /**
   * Retrieve the info for a link from their domain and key.
   */
  retrieve(params: InfoRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<InfoRetrieveResponse> {
    const { workspaceId = this._client.workspaceId, ...query } = params;
    return this._client.get('/links/info', { query: { workspaceId, ...query }, ...options });
  }
}

export interface InfoRetrieveResponse {
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
  tags: Array<InfoRetrieveResponse.Tag> | null;

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

export namespace InfoRetrieveResponse {
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

export interface InfoRetrieveParams {
  /**
   * The domain of the link to retrieve. E.g. for `d.to/github`, the domain is
   * `d.to`.
   */
  domain: string;

  /**
   * The key of the link to retrieve. E.g. for `d.to/github`, the key is `github`.
   */
  key: string;

  /**
   * The ID of the workspace the link belongs to.
   */
  workspaceId?: string;
}

export namespace Info {
  export import InfoRetrieveResponse = InfoAPI.InfoRetrieveResponse;
  export import InfoRetrieveParams = InfoAPI.InfoRetrieveParams;
}
