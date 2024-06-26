/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type SalesBrowsers = {
    /**
     * The name of the browser
     */
    browser: string;
    /**
     * The number of sales from this browser
     */
    sales: number;
    /**
     * The total amount of sales from this browser
     */
    amount: number;
};

/** @internal */
export namespace SalesBrowsers$ {
    export const inboundSchema: z.ZodType<SalesBrowsers, z.ZodTypeDef, unknown> = z.object({
        browser: z.string(),
        sales: z.number(),
        amount: z.number(),
    });

    export type Outbound = {
        browser: string;
        sales: number;
        amount: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SalesBrowsers> = z.object({
        browser: z.string(),
        sales: z.number(),
        amount: z.number(),
    });
}
