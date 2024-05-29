/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ClicksTimeseries = {
    /**
     * The starting timestamp of the interval
     */
    start: string;
    /**
     * The number of clicks in the interval
     */
    clicks: number;
};

/** @internal */
export namespace ClicksTimeseries$ {
    export const inboundSchema: z.ZodType<ClicksTimeseries, z.ZodTypeDef, unknown> = z
        .object({
            start: z.string(),
            clicks: z.number(),
        })
        .transform((v) => {
            return {
                start: v.start,
                clicks: v.clicks,
            };
        });

    export type Outbound = {
        start: string;
        clicks: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ClicksTimeseries> = z
        .object({
            start: z.string(),
            clicks: z.number(),
        })
        .transform((v) => {
            return {
                start: v.start,
                clicks: v.clicks,
            };
        });
}
