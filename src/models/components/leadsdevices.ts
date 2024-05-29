/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type LeadsDevices = {
    /**
     * The name of the device
     */
    device: string;
    /**
     * The number of leads from this device
     */
    leads: number;
};

/** @internal */
export namespace LeadsDevices$ {
    export const inboundSchema: z.ZodType<LeadsDevices, z.ZodTypeDef, unknown> = z
        .object({
            device: z.string(),
            leads: z.number(),
        })
        .transform((v) => {
            return {
                device: v.device,
                leads: v.leads,
            };
        });

    export type Outbound = {
        device: string;
        leads: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LeadsDevices> = z
        .object({
            device: z.string(),
            leads: z.number(),
        })
        .transform((v) => {
            return {
                device: v.device,
                leads: v.leads,
            };
        });
}
