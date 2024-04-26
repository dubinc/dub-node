/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

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
export namespace DeleteLinkRequest$ {
    export type Inbound = {
        linkId: string;
    };

    export const inboundSchema: z.ZodType<DeleteLinkRequest, z.ZodTypeDef, Inbound> = z
        .object({
            linkId: z.string(),
        })
        .transform((v) => {
            return {
                linkId: v.linkId,
            };
        });

    export type Outbound = {
        linkId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteLinkRequest> = z
        .object({
            linkId: z.string(),
        })
        .transform((v) => {
            return {
                linkId: v.linkId,
            };
        });
}

/** @internal */
export namespace DeleteLinkResponseBody$ {
    export type Inbound = {
        id: string;
    };

    export const inboundSchema: z.ZodType<DeleteLinkResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteLinkResponseBody> = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}
