/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * The level of error correction to use for the QR code. Defaults to `L` if not provided.
 */
export const Level = {
    L: "L",
    M: "M",
    Q: "Q",
    H: "H",
} as const;
/**
 * The level of error correction to use for the QR code. Defaults to `L` if not provided.
 */
export type Level = ClosedEnum<typeof Level>;

export type GetQRCodeRequest = {
    /**
     * The URL to generate a QR code for.
     */
    url: string;
    /**
     * The size of the QR code in pixels. Defaults to `600` if not provided.
     */
    size?: number | undefined;
    /**
     * The level of error correction to use for the QR code. Defaults to `L` if not provided.
     */
    level?: Level | undefined;
    /**
     * The foreground color of the QR code in hex format. Defaults to `#000000` if not provided.
     */
    fgColor?: string | undefined;
    /**
     * The background color of the QR code in hex format. Defaults to `#ffffff` if not provided.
     */
    bgColor?: string | undefined;
    /**
     * Whether to include a margin around the QR code. Defaults to `false` if not provided.
     */
    includeMargin?: boolean | undefined;
};

/** @internal */
export namespace Level$ {
    export const inboundSchema: z.ZodNativeEnum<typeof Level> = z.nativeEnum(Level);
    export const outboundSchema: z.ZodNativeEnum<typeof Level> = inboundSchema;
}

/** @internal */
export namespace GetQRCodeRequest$ {
    export const inboundSchema: z.ZodType<GetQRCodeRequest, z.ZodTypeDef, unknown> = z.object({
        url: z.string(),
        size: z.number().default(600),
        level: Level$.inboundSchema.default("L"),
        fgColor: z.string().default("#000000"),
        bgColor: z.string().default("#FFFFFF"),
        includeMargin: z.boolean().default(false),
    });

    export type Outbound = {
        url: string;
        size: number;
        level: string;
        fgColor: string;
        bgColor: string;
        includeMargin: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetQRCodeRequest> = z.object({
        url: z.string(),
        size: z.number().default(600),
        level: Level$.outboundSchema.default("L"),
        fgColor: z.string().default("#000000"),
        bgColor: z.string().default("#FFFFFF"),
        includeMargin: z.boolean().default(false),
    });
}
