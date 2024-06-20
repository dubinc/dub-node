/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * A short code indicating the error code returned.
 */
export const UnprocessableEntityCode = {
    UnprocessableEntity: "unprocessable_entity",
} as const;
/**
 * A short code indicating the error code returned.
 */
export type UnprocessableEntityCode = ClosedEnum<typeof UnprocessableEntityCode>;

export type UnprocessableEntityError = {
    /**
     * A short code indicating the error code returned.
     */
    code: UnprocessableEntityCode;
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
 * The request was well-formed but was unable to be followed due to semantic errors.
 */
export type UnprocessableEntityData = {
    error: UnprocessableEntityError;
};

/**
 * The request was well-formed but was unable to be followed due to semantic errors.
 */
export class UnprocessableEntity extends Error {
    error: UnprocessableEntityError;

    /** The original data that was passed to this error instance. */
    data$: UnprocessableEntityData;

    constructor(err: UnprocessableEntityData) {
        super("");
        this.data$ = err;

        this.error = err.error;

        this.message =
            "message" in err && typeof err.message === "string"
                ? err.message
                : "API error occurred";

        this.name = "UnprocessableEntity";
    }
}

/** @internal */
export namespace UnprocessableEntityCode$ {
    export const inboundSchema: z.ZodNativeEnum<typeof UnprocessableEntityCode> =
        z.nativeEnum(UnprocessableEntityCode);
    export const outboundSchema: z.ZodNativeEnum<typeof UnprocessableEntityCode> = inboundSchema;
}

/** @internal */
export namespace UnprocessableEntityError$ {
    export const inboundSchema: z.ZodType<UnprocessableEntityError, z.ZodTypeDef, unknown> = z
        .object({
            code: UnprocessableEntityCode$.inboundSchema,
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnprocessableEntityError> = z
        .object({
            code: UnprocessableEntityCode$.outboundSchema,
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
export namespace UnprocessableEntity$ {
    export const inboundSchema: z.ZodType<UnprocessableEntity, z.ZodTypeDef, unknown> = z
        .object({
            error: z.lazy(() => UnprocessableEntityError$.inboundSchema),
        })
        .transform((v) => {
            return new UnprocessableEntity(v);
        });

    export type Outbound = {
        error: UnprocessableEntityError$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnprocessableEntity> = z
        .instanceof(UnprocessableEntity)
        .transform((v) => v.data$)
        .pipe(
            z.object({
                error: z.lazy(() => UnprocessableEntityError$.outboundSchema),
            })
        );
}
