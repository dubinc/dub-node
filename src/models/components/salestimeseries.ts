/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type SalesTimeseries = {
    /**
     * The starting timestamp of the interval
     */
    start: string;
    /**
     * The number of sales in the interval
     */
    sales: number;
    /**
     * The total amount of sales in the interval
     */
    amount: number;
};

/** @internal */
export namespace SalesTimeseries$ {
    export const inboundSchema: z.ZodType<SalesTimeseries, z.ZodTypeDef, unknown> = z
        .object({
            start: z.string(),
            sales: z.number(),
            amount: z.number(),
        })
        .transform((v) => {
            return {
                start: v.start,
                sales: v.sales,
                amount: v.amount,
            };
        });

    export type Outbound = {
        start: string;
        sales: number;
        amount: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SalesTimeseries> = z
        .object({
            start: z.string(),
            sales: z.number(),
            amount: z.number(),
        })
        .transform((v) => {
            return {
                start: v.start,
                sales: v.sales,
                amount: v.amount,
            };
        });
}