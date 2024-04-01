/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteLinkRequest = {
    /**
     * The id of the link to delete. You can get this via the `getLinkInfo` endpoint.
     */
    linkId: string;
    /**
     * The ID of the workspace the link belongs to.
     */
    workspaceId: string;
};

/** @internal */
export namespace DeleteLinkRequest$ {
    export type Inbound = {
        linkId: string;
        workspaceId: string;
    };

    export const inboundSchema: z.ZodType<DeleteLinkRequest, z.ZodTypeDef, Inbound> = z
        .object({
            linkId: z.string(),
            workspaceId: z.string(),
        })
        .transform((v) => {
            return {
                linkId: v.linkId,
                workspaceId: v.workspaceId,
            };
        });

    export type Outbound = {
        linkId: string;
        workspaceId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteLinkRequest> = z
        .object({
            linkId: z.string(),
            workspaceId: z.string(),
        })
        .transform((v) => {
            return {
                linkId: v.linkId,
                workspaceId: v.workspaceId,
            };
        });
}