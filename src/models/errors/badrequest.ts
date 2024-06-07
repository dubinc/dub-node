/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import { ClosedEnum } from "../../types";
import * as z from "zod";

/**
 * A short code indicating the error code returned.
 */
export const Code = {
    BadRequest: "bad_request",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type Code = ClosedEnum<typeof Code>;

export type ErrorT = {
    /**
     * A short code indicating the error code returned.
     */
    code: Code;
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
 * The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 */
export type BadRequestData = {
    error: ErrorT;
};

/**
 * The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 */
export class BadRequest extends Error {
    error: ErrorT;

    /** The original data that was passed to this error instance. */
    data$: BadRequestData;

    constructor(err: BadRequestData) {
        super("");
        this.data$ = err;

        this.error = err.error;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "BadRequest";
    }
}

/** @internal */
export namespace Code$ {
    export const inboundSchema = z.nativeEnum(Code);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ErrorT$ {
    export const inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = z
        .object({
            code: Code$.inboundSchema,
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ErrorT> = z
        .object({
            code: Code$.outboundSchema,
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
export namespace BadRequest$ {
    export const inboundSchema: z.ZodType<BadRequest, z.ZodTypeDef, unknown> = z
        .object({
            error: z.lazy(() => ErrorT$.inboundSchema),
        })
        .transform((v) => {
            return new BadRequest(v);
        });

    export type Outbound = {
        error: ErrorT$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BadRequest> = z
        .instanceof(BadRequest)
        .transform((v) => v.data$)
        .pipe(
            z.object({
                error: z.lazy(() => ErrorT$.outboundSchema),
            })
        );
}
