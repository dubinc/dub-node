/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The unique IDs of the tags assigned to the short link.
 */
export type BulkCreateLinksTagIds = string | Array<string>;

export type RequestBody = {
    /**
     * The domain of the short link. If not provided, the primary domain for the workspace will be used (or `dub.sh` if the workspace has no domains).
     */
    domain?: string | undefined;
    /**
     * The short link slug. If not provided, a random 7-character slug will be generated.
     */
    key?: string | undefined;
    /**
     * The prefix of the short link slug for randomly-generated keys (e.g. if prefix is `/c/`, generated keys will be in the `/c/:key` format). Will be ignored if `key` is provided.
     */
    prefix?: string | undefined;
    /**
     * The destination URL of the short link.
     */
    url: string;
    /**
     * Whether the short link is archived.
     */
    archived?: boolean | undefined;
    /**
     * The date and time when the short link will expire in ISO-8601 format. Must be in the future.
     */
    expiresAt?: Date | null | undefined;
    /**
     * The password required to access the destination URL of the short link.
     */
    password?: string | null | undefined;
    /**
     * Whether the short link uses Custom Social Media Cards feature.
     */
    proxy?: boolean | undefined;
    /**
     * The title of the short link generated via `api.dub.co/metatags`. Will be used for Custom Social Media Cards if `proxy` is true.
     */
    title?: string | null | undefined;
    /**
     * The description of the short link generated via `api.dub.co/metatags`. Will be used for Custom Social Media Cards if `proxy` is true.
     */
    description?: string | null | undefined;
    /**
     * The image of the short link generated via `api.dub.co/metatags`. Will be used for Custom Social Media Cards if `proxy` is true.
     */
    image?: string | null | undefined;
    /**
     * Whether the short link uses link cloaking.
     */
    rewrite?: boolean | undefined;
    /**
     * The iOS destination URL for the short link for iOS device targeting.
     */
    ios?: string | null | undefined;
    /**
     * The Android destination URL for the short link for Android device targeting.
     */
    android?: string | null | undefined;
    /**
     * Geo targeting information for the short link in JSON format `{[COUNTRY]: https://example.com }`.
     */
    geo?: Record<string, string> | null | undefined;
    /**
     * Whether the short link's stats are publicly accessible.
     */
    publicStats?: boolean | undefined;
    /**
     * [DEPRECATED] (use tagIds instead): The unique ID of the tag assigned to the short link.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    tagId?: string | null | undefined;
    /**
     * The unique IDs of the tags assigned to the short link.
     */
    tagIds?: string | Array<string> | undefined;
    /**
     * The comments for the short link.
     */
    comments?: string | null | undefined;
};

export type BulkCreateLinksRequest = {
    /**
     * The ID of the workspace to create the link for.
     */
    workspaceId?: string | undefined;
    requestBody?: Array<RequestBody> | undefined;
};

/** @internal */
export namespace BulkCreateLinksTagIds$ {
    export type Inbound = string | Array<string>;

    export type Outbound = string | Array<string>;
    export const inboundSchema: z.ZodType<BulkCreateLinksTagIds, z.ZodTypeDef, Inbound> = z.union([
        z.string(),
        z.array(z.string()),
    ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BulkCreateLinksTagIds> = z.union(
        [z.string(), z.array(z.string())]
    );
}

/** @internal */
export namespace RequestBody$ {
    export type Inbound = {
        domain?: string | undefined;
        key?: string | undefined;
        prefix?: string | undefined;
        url: string;
        archived?: boolean | undefined;
        expiresAt?: string | null | undefined;
        password?: string | null | undefined;
        proxy?: boolean | undefined;
        title?: string | null | undefined;
        description?: string | null | undefined;
        image?: string | null | undefined;
        rewrite?: boolean | undefined;
        ios?: string | null | undefined;
        android?: string | null | undefined;
        geo?: Record<string, string> | null | undefined;
        publicStats?: boolean | undefined;
        tagId?: string | null | undefined;
        tagIds?: string | Array<string> | undefined;
        comments?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<RequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            domain: z.string().optional(),
            key: z.string().optional(),
            prefix: z.string().optional(),
            url: z.string(),
            archived: z.boolean().default(false),
            expiresAt: z
                .nullable(
                    z
                        .string()
                        .datetime({ offset: true })
                        .transform((v) => new Date(v))
                )
                .optional(),
            password: z.nullable(z.string()).optional(),
            proxy: z.boolean().default(false),
            title: z.nullable(z.string()).optional(),
            description: z.nullable(z.string()).optional(),
            image: z.nullable(z.string()).optional(),
            rewrite: z.boolean().default(false),
            ios: z.nullable(z.string()).optional(),
            android: z.nullable(z.string()).optional(),
            geo: z.nullable(z.record(z.string())).optional(),
            publicStats: z.boolean().default(false),
            tagId: z.nullable(z.string()).optional(),
            tagIds: z.union([z.string(), z.array(z.string())]).optional(),
            comments: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.domain === undefined ? null : { domain: v.domain }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.prefix === undefined ? null : { prefix: v.prefix }),
                url: v.url,
                archived: v.archived,
                ...(v.expiresAt === undefined ? null : { expiresAt: v.expiresAt }),
                ...(v.password === undefined ? null : { password: v.password }),
                proxy: v.proxy,
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.image === undefined ? null : { image: v.image }),
                rewrite: v.rewrite,
                ...(v.ios === undefined ? null : { ios: v.ios }),
                ...(v.android === undefined ? null : { android: v.android }),
                ...(v.geo === undefined ? null : { geo: v.geo }),
                publicStats: v.publicStats,
                ...(v.tagId === undefined ? null : { tagId: v.tagId }),
                ...(v.tagIds === undefined ? null : { tagIds: v.tagIds }),
                ...(v.comments === undefined ? null : { comments: v.comments }),
            };
        });

    export type Outbound = {
        domain?: string | undefined;
        key?: string | undefined;
        prefix?: string | undefined;
        url: string;
        archived: boolean;
        expiresAt?: string | null | undefined;
        password?: string | null | undefined;
        proxy: boolean;
        title?: string | null | undefined;
        description?: string | null | undefined;
        image?: string | null | undefined;
        rewrite: boolean;
        ios?: string | null | undefined;
        android?: string | null | undefined;
        geo?: Record<string, string> | null | undefined;
        publicStats: boolean;
        tagId?: string | null | undefined;
        tagIds?: string | Array<string> | undefined;
        comments?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestBody> = z
        .object({
            domain: z.string().optional(),
            key: z.string().optional(),
            prefix: z.string().optional(),
            url: z.string(),
            archived: z.boolean().default(false),
            expiresAt: z.nullable(z.date().transform((v) => v.toISOString())).optional(),
            password: z.nullable(z.string()).optional(),
            proxy: z.boolean().default(false),
            title: z.nullable(z.string()).optional(),
            description: z.nullable(z.string()).optional(),
            image: z.nullable(z.string()).optional(),
            rewrite: z.boolean().default(false),
            ios: z.nullable(z.string()).optional(),
            android: z.nullable(z.string()).optional(),
            geo: z.nullable(z.record(z.string())).optional(),
            publicStats: z.boolean().default(false),
            tagId: z.nullable(z.string()).optional(),
            tagIds: z.union([z.string(), z.array(z.string())]).optional(),
            comments: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.domain === undefined ? null : { domain: v.domain }),
                ...(v.key === undefined ? null : { key: v.key }),
                ...(v.prefix === undefined ? null : { prefix: v.prefix }),
                url: v.url,
                archived: v.archived,
                ...(v.expiresAt === undefined ? null : { expiresAt: v.expiresAt }),
                ...(v.password === undefined ? null : { password: v.password }),
                proxy: v.proxy,
                ...(v.title === undefined ? null : { title: v.title }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.image === undefined ? null : { image: v.image }),
                rewrite: v.rewrite,
                ...(v.ios === undefined ? null : { ios: v.ios }),
                ...(v.android === undefined ? null : { android: v.android }),
                ...(v.geo === undefined ? null : { geo: v.geo }),
                publicStats: v.publicStats,
                ...(v.tagId === undefined ? null : { tagId: v.tagId }),
                ...(v.tagIds === undefined ? null : { tagIds: v.tagIds }),
                ...(v.comments === undefined ? null : { comments: v.comments }),
            };
        });
}

/** @internal */
export namespace BulkCreateLinksRequest$ {
    export type Inbound = {
        workspaceId?: string | undefined;
        RequestBody?: Array<RequestBody$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<BulkCreateLinksRequest, z.ZodTypeDef, Inbound> = z
        .object({
            workspaceId: z.string().optional(),
            RequestBody: z.array(z.lazy(() => RequestBody$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.workspaceId === undefined ? null : { workspaceId: v.workspaceId }),
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        workspaceId?: string | undefined;
        RequestBody?: Array<RequestBody$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BulkCreateLinksRequest> = z
        .object({
            workspaceId: z.string().optional(),
            requestBody: z.array(z.lazy(() => RequestBody$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.workspaceId === undefined ? null : { workspaceId: v.workspaceId }),
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}
