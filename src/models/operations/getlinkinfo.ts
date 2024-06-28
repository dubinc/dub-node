/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type GetLinkInfoGlobals = {
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    workspaceId?: string | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    projectSlug?: string | undefined;
};

export type GetLinkInfoRequest = {
    domain?: string | undefined;
    /**
     * The key of the link to retrieve. E.g. for `d.to/github`, the key is `github`.
     */
    key?: string | undefined;
    /**
     * The unique ID of the short link.
     */
    linkId?: string | undefined;
    /**
     * This is the ID of the link in the your database. Must be prefixed with `ext_` when passed as a query parameter.
     */
    externalId?: string | undefined;
};

/** @internal */
export namespace GetLinkInfoGlobals$ {
    export const inboundSchema: z.ZodType<GetLinkInfoGlobals, z.ZodTypeDef, unknown> = z.object({
        workspaceId: z.string().optional(),
        projectSlug: z.string().optional(),
    });

    export type Outbound = {
        workspaceId?: string | undefined;
        projectSlug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLinkInfoGlobals> = z.object({
        workspaceId: z.string().optional(),
        projectSlug: z.string().optional(),
    });
}

/** @internal */
export namespace GetLinkInfoRequest$ {
    export const inboundSchema: z.ZodType<GetLinkInfoRequest, z.ZodTypeDef, unknown> = z.object({
        domain: z.string().optional(),
        key: z.string().optional(),
        linkId: z.string().optional(),
        externalId: z.string().optional(),
    });

    export type Outbound = {
        domain?: string | undefined;
        key?: string | undefined;
        linkId?: string | undefined;
        externalId?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetLinkInfoRequest> = z.object({
        domain: z.string().optional(),
        key: z.string().optional(),
        linkId: z.string().optional(),
        externalId: z.string().optional(),
    });
}
