/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type SetPrimaryDomainGlobals = {
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    workspaceId?: string | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    projectSlug?: string | undefined;
};

export type SetPrimaryDomainRequest = {
    /**
     * The domain name.
     */
    slug: string;
};

/** @internal */
export namespace SetPrimaryDomainGlobals$ {
    export const inboundSchema: z.ZodType<SetPrimaryDomainGlobals, z.ZodTypeDef, unknown> =
        z.object({
            workspaceId: z.string().optional(),
            projectSlug: z.string().optional(),
        });

    export type Outbound = {
        workspaceId?: string | undefined;
        projectSlug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SetPrimaryDomainGlobals> =
        z.object({
            workspaceId: z.string().optional(),
            projectSlug: z.string().optional(),
        });
}

/** @internal */
export namespace SetPrimaryDomainRequest$ {
    export const inboundSchema: z.ZodType<SetPrimaryDomainRequest, z.ZodTypeDef, unknown> =
        z.object({
            slug: z.string(),
        });

    export type Outbound = {
        slug: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SetPrimaryDomainRequest> =
        z.object({
            slug: z.string(),
        });
}
