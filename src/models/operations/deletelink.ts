/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteLinkGlobals = {
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    workspaceId?: string | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    projectSlug?: string | undefined;
};

export type DeleteLinkRequest = {
    /**
     * The id of the link to delete. You may use either `linkId` (obtained via `/links/info` endpoint) or `externalId` prefixed with `ext_`.
     */
    linkId: string;
};

/**
 * The deleted link
 */
export type DeleteLinkResponseBody = {
    /**
     * The ID of the link.
     */
    id: string;
};

/** @internal */
export namespace DeleteLinkGlobals$ {
    export const inboundSchema: z.ZodType<DeleteLinkGlobals, z.ZodTypeDef, unknown> = z.object({
        workspaceId: z.string().optional(),
        projectSlug: z.string().optional(),
    });

    export type Outbound = {
        workspaceId?: string | undefined;
        projectSlug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteLinkGlobals> = z.object({
        workspaceId: z.string().optional(),
        projectSlug: z.string().optional(),
    });
}

/** @internal */
export namespace DeleteLinkRequest$ {
    export const inboundSchema: z.ZodType<DeleteLinkRequest, z.ZodTypeDef, unknown> = z.object({
        linkId: z.string(),
    });

    export type Outbound = {
        linkId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteLinkRequest> = z.object({
        linkId: z.string(),
    });
}

/** @internal */
export namespace DeleteLinkResponseBody$ {
    export const inboundSchema: z.ZodType<DeleteLinkResponseBody, z.ZodTypeDef, unknown> = z.object(
        {
            id: z.string(),
        }
    );

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteLinkResponseBody> =
        z.object({
            id: z.string(),
        });
}
