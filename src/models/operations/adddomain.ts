/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

/**
 * The type of redirect to use for this domain.
 */
export const Type = {
    Redirect: "redirect",
    Rewrite: "rewrite",
} as const;
/**
 * The type of redirect to use for this domain.
 */
export type Type = ClosedEnum<typeof Type>;

export type AddDomainRequestBody = {
    /**
     * Name of the domain.
     */
    slug: string;
    /**
     * The type of redirect to use for this domain.
     */
    type?: Type | undefined;
    /**
     * The page your users will get redirected to when they visit your domain.
     */
    target?: string | null | undefined;
    /**
     * Redirect users to a specific URL when any link under this domain has expired.
     */
    expiredUrl?: string | null | undefined;
    /**
     * Whether to archive this domain. `false` will unarchive a previously archived domain.
     */
    archived?: boolean | undefined;
    /**
     * Provide context to your teammates in the link creation modal by showing them an example of a link to be shortened.
     */
    placeholder?: string | null | undefined;
};

/** @internal */
export namespace Type$ {
    export const inboundSchema = z.nativeEnum(Type);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace AddDomainRequestBody$ {
    export const inboundSchema: z.ZodType<AddDomainRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            slug: z.string(),
            type: Type$.inboundSchema.default("redirect"),
            target: z.nullable(z.string()).optional(),
            expiredUrl: z.nullable(z.string()).optional(),
            archived: z.boolean().default(false),
            placeholder: z.nullable(z.string().default("https://dub.co/help/article/what-is-dub")),
        })
        .transform((v) => {
            return {
                slug: v.slug,
                type: v.type,
                ...(v.target === undefined ? null : { target: v.target }),
                ...(v.expiredUrl === undefined ? null : { expiredUrl: v.expiredUrl }),
                archived: v.archived,
                placeholder: v.placeholder,
            };
        });

    export type Outbound = {
        slug: string;
        type: string;
        target?: string | null | undefined;
        expiredUrl?: string | null | undefined;
        archived: boolean;
        placeholder: string | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddDomainRequestBody> = z
        .object({
            slug: z.string(),
            type: Type$.outboundSchema.default("redirect"),
            target: z.nullable(z.string()).optional(),
            expiredUrl: z.nullable(z.string()).optional(),
            archived: z.boolean().default(false),
            placeholder: z.nullable(z.string().default("https://dub.co/help/article/what-is-dub")),
        })
        .transform((v) => {
            return {
                slug: v.slug,
                type: v.type,
                ...(v.target === undefined ? null : { target: v.target }),
                ...(v.expiredUrl === undefined ? null : { expiredUrl: v.expiredUrl }),
                archived: v.archived,
                placeholder: v.placeholder,
            };
        });
}
