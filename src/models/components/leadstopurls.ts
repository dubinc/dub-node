/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type LeadsTopUrls = {
    /**
     * The destination URL
     */
    url: string;
    /**
     * The number of leads from this URL
     */
    leads: number;
};

/** @internal */
export namespace LeadsTopUrls$ {
    export const inboundSchema: z.ZodType<LeadsTopUrls, z.ZodTypeDef, unknown> = z.object({
        url: z.string(),
        leads: z.number(),
    });

    export type Outbound = {
        url: string;
        leads: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LeadsTopUrls> = z.object({
        url: z.string(),
        leads: z.number(),
    });
}
