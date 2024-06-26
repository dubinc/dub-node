/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * A short code indicating the error code returned.
 */
export const UnauthorizedCode = {
    Unauthorized: "unauthorized",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type UnauthorizedCode = ClosedEnum<typeof UnauthorizedCode>;

export type UnauthorizedError = {
    /**
     * A short code indicating the error code returned.
     */
    code: UnauthorizedCode;
    /**
     * A human readable explanation of what went wrong.
     */
    message: string;
    /**
     * A link to our documentation with more details about this error code
     */
    docUrl?: string | undefined;
};

/**
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
 */
export type UnauthorizedData = {
    error: UnauthorizedError;
};

/**
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
 */
export class Unauthorized extends Error {
    error: UnauthorizedError;

    /** The original data that was passed to this error instance. */
    data$: UnauthorizedData;

    constructor(err: UnauthorizedData) {
        super("");
        this.data$ = err;

        this.error = err.error;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "Unauthorized";
    }
}

/** @internal */
export namespace UnauthorizedCode$ {
    export const inboundSchema: z.ZodNativeEnum<typeof UnauthorizedCode> =
        z.nativeEnum(UnauthorizedCode);
    export const outboundSchema: z.ZodNativeEnum<typeof UnauthorizedCode> = inboundSchema;
}

/** @internal */
export namespace UnauthorizedError$ {
    export const inboundSchema: z.ZodType<UnauthorizedError, z.ZodTypeDef, unknown> = z
        .object({
            code: UnauthorizedCode$.inboundSchema,
            message: z.string(),
            doc_url: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                doc_url: "docUrl",
            });
        });

    export type Outbound = {
        code: string;
        message: string;
        doc_url?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnauthorizedError> = z
        .object({
            code: UnauthorizedCode$.outboundSchema,
            message: z.string(),
            docUrl: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                docUrl: "doc_url",
            });
        });
}

/** @internal */
export namespace Unauthorized$ {
    export const inboundSchema: z.ZodType<Unauthorized, z.ZodTypeDef, unknown> = z
        .object({
            error: z.lazy(() => UnauthorizedError$.inboundSchema),
        })
        .transform((v) => {
            return new Unauthorized(v);
        });

    export type Outbound = {
        error: UnauthorizedError$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Unauthorized> = z
        .instanceof(Unauthorized)
        .transform((v) => v.data$)
        .pipe(
            z.object({
                error: z.lazy(() => UnauthorizedError$.outboundSchema),
            })
        );
}
