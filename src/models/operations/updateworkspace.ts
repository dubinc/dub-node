/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UpdateWorkspaceRequest = {
    /**
     * The ID or slug of the workspace.
     */
    idOrSlug: string;
};

/** @internal */
export namespace UpdateWorkspaceRequest$ {
    export const inboundSchema: z.ZodType<UpdateWorkspaceRequest, z.ZodTypeDef, unknown> = z.object(
        {
            idOrSlug: z.string(),
        }
    );

    export type Outbound = {
        idOrSlug: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateWorkspaceRequest> =
        z.object({
            idOrSlug: z.string(),
        });
}
