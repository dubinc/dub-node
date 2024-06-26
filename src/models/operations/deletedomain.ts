/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type DeleteDomainGlobals = {
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    workspaceId?: string | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    projectSlug?: string | undefined;
};

export type DeleteDomainRequest = {
    /**
     * The domain name.
     */
    slug: string;
};

/**
 * The domain was deleted.
 */
export type DeleteDomainResponseBody = {
    /**
     * The domain name.
     */
    slug: string;
};

/** @internal */
export namespace DeleteDomainGlobals$ {
    export const inboundSchema: z.ZodType<DeleteDomainGlobals, z.ZodTypeDef, unknown> = z.object({
        workspaceId: z.string().optional(),
        projectSlug: z.string().optional(),
    });

    export type Outbound = {
        workspaceId?: string | undefined;
        projectSlug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteDomainGlobals> = z.object({
        workspaceId: z.string().optional(),
        projectSlug: z.string().optional(),
    });
}

/** @internal */
export namespace DeleteDomainRequest$ {
    export const inboundSchema: z.ZodType<DeleteDomainRequest, z.ZodTypeDef, unknown> = z.object({
        slug: z.string(),
    });

    export type Outbound = {
        slug: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteDomainRequest> = z.object({
        slug: z.string(),
    });
}

/** @internal */
export namespace DeleteDomainResponseBody$ {
    export const inboundSchema: z.ZodType<DeleteDomainResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            slug: z.string(),
        });

    export type Outbound = {
        slug: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DeleteDomainResponseBody> =
        z.object({
            slug: z.string(),
        });
}
