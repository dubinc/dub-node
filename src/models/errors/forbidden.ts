/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * A short code indicating the error code returned.
 */
export const ForbiddenCode = {
    Forbidden: "forbidden",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type ForbiddenCode = ClosedEnum<typeof ForbiddenCode>;

export type ForbiddenError = {
    /**
     * A short code indicating the error code returned.
     */
    code: ForbiddenCode;
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
 * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.
 */
export type ForbiddenData = {
    error: ForbiddenError;
};

/**
 * The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the server.
 */
export class Forbidden extends Error {
    error: ForbiddenError;

    /** The original data that was passed to this error instance. */
    data$: ForbiddenData;

    constructor(err: ForbiddenData) {
        super("");
        this.data$ = err;

        this.error = err.error;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "Forbidden";
    }
}

/** @internal */
export namespace ForbiddenCode$ {
    export const inboundSchema: z.ZodNativeEnum<typeof ForbiddenCode> = z.nativeEnum(ForbiddenCode);
    export const outboundSchema: z.ZodNativeEnum<typeof ForbiddenCode> = inboundSchema;
}

/** @internal */
export namespace ForbiddenError$ {
    export const inboundSchema: z.ZodType<ForbiddenError, z.ZodTypeDef, unknown> = z
        .object({
            code: ForbiddenCode$.inboundSchema,
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ForbiddenError> = z
        .object({
            code: ForbiddenCode$.outboundSchema,
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
export namespace Forbidden$ {
    export const inboundSchema: z.ZodType<Forbidden, z.ZodTypeDef, unknown> = z
        .object({
            error: z.lazy(() => ForbiddenError$.inboundSchema),
        })
        .transform((v) => {
            return new Forbidden(v);
        });

    export type Outbound = {
        error: ForbiddenError$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Forbidden> = z
        .instanceof(Forbidden)
        .transform((v) => v.data$)
        .pipe(
            z.object({
                error: z.lazy(() => ForbiddenError$.outboundSchema),
            })
        );
}
