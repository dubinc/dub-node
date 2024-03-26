// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'dub/core';
import { APIResource } from 'dub/resource';
import { isRequestOptions } from 'dub/core';
import { type Response } from 'dub/_shims/index';
import * as QrAPI from 'dub/resources/qr';

export class Qr extends APIResource {
  /**
   * Retrieve a QR code for a link.
   */
  retrieve(query?: QrRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<Response>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<Response>;
  retrieve(
    query: QrRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/qr', { query, ...options, __binaryResponse: true });
  }
}

export interface QrRetrieveParams {
  /**
   * The background color of the QR code in hex format. Defaults to `#ffffff` if not
   * provided.
   */
  bgColor?: string;

  /**
   * The foreground color of the QR code in hex format. Defaults to `#000000` if not
   * provided.
   */
  fgColor?: string;

  /**
   * Whether to include a margin around the QR code. Defaults to `false` if not
   * provided.
   */
  includeMargin?: boolean;

  /**
   * The level of error correction to use for the QR code. Defaults to `L` if not
   * provided.
   */
  level?: 'L' | 'M' | 'Q' | 'H';

  /**
   * The size of the QR code in pixels. Defaults to `600` if not provided.
   */
  size?: number;

  /**
   * The URL to generate a QR code for. Defaults to `https://dub.co` if not provided.
   */
  url?: string;
}

export namespace Qr {
  export import QrRetrieveParams = QrAPI.QrRetrieveParams;
}
