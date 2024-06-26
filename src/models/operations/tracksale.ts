/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export type TrackSaleGlobals = {
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    workspaceId?: string | undefined;
    /**
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    projectSlug?: string | undefined;
};

/**
 * The payment processor via which the sale was made.
 */
export const PaymentProcessor = {
    Stripe: "stripe",
    Shopify: "shopify",
    Paddle: "paddle",
} as const;
/**
 * The payment processor via which the sale was made.
 */
export type PaymentProcessor = ClosedEnum<typeof PaymentProcessor>;

export type TrackSaleRequestBody = {
    /**
     * This is the unique identifier for the customer in the client's app. This is used to track the customer's journey.
     */
    customerId: string;
    /**
     * The amount of the sale. Should be passed in cents.
     */
    amount: number;
    /**
     * The payment processor via which the sale was made.
     */
    paymentProcessor: PaymentProcessor;
    /**
     * The name of the sale event. It can be used to track different types of event for example 'Purchase', 'Upgrade', 'Payment', etc.
     */
    eventName?: string | undefined;
    /**
     * The invoice ID of the sale.
     */
    invoiceId?: string | null | undefined;
    /**
     * The currency of the sale. Accepts ISO 4217 currency codes.
     */
    currency?: string | undefined;
    /**
     * Additional metadata to be stored with the sale event.
     */
    metadata?: { [k: string]: any } | null | undefined;
};

/**
 * A sale was tracked.
 */
export type TrackSaleResponseBody = {
    eventName: string;
    customerId: string;
    amount: number;
    paymentProcessor: string;
    invoiceId: string | null;
    currency: string;
    metadata: { [k: string]: any } | null;
};

/** @internal */
export namespace TrackSaleGlobals$ {
    export const inboundSchema: z.ZodType<TrackSaleGlobals, z.ZodTypeDef, unknown> = z.object({
        workspaceId: z.string().optional(),
        projectSlug: z.string().optional(),
    });

    export type Outbound = {
        workspaceId?: string | undefined;
        projectSlug?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TrackSaleGlobals> = z.object({
        workspaceId: z.string().optional(),
        projectSlug: z.string().optional(),
    });
}

/** @internal */
export namespace PaymentProcessor$ {
    export const inboundSchema: z.ZodNativeEnum<typeof PaymentProcessor> =
        z.nativeEnum(PaymentProcessor);
    export const outboundSchema: z.ZodNativeEnum<typeof PaymentProcessor> = inboundSchema;
}

/** @internal */
export namespace TrackSaleRequestBody$ {
    export const inboundSchema: z.ZodType<TrackSaleRequestBody, z.ZodTypeDef, unknown> = z.object({
        customerId: z.string(),
        amount: z.number().int(),
        paymentProcessor: PaymentProcessor$.inboundSchema,
        eventName: z.string().default("Purchase"),
        invoiceId: z.nullable(z.string()).default(null),
        currency: z.string().default("usd"),
        metadata: z.nullable(z.record(z.any())).optional(),
    });

    export type Outbound = {
        customerId: string;
        amount: number;
        paymentProcessor: string;
        eventName: string;
        invoiceId: string | null;
        currency: string;
        metadata?: { [k: string]: any } | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TrackSaleRequestBody> = z.object(
        {
            customerId: z.string(),
            amount: z.number().int(),
            paymentProcessor: PaymentProcessor$.outboundSchema,
            eventName: z.string().default("Purchase"),
            invoiceId: z.nullable(z.string()).default(null),
            currency: z.string().default("usd"),
            metadata: z.nullable(z.record(z.any())).optional(),
        }
    );
}

/** @internal */
export namespace TrackSaleResponseBody$ {
    export const inboundSchema: z.ZodType<TrackSaleResponseBody, z.ZodTypeDef, unknown> = z.object({
        eventName: z.string(),
        customerId: z.string(),
        amount: z.number(),
        paymentProcessor: z.string(),
        invoiceId: z.nullable(z.string()),
        currency: z.string(),
        metadata: z.nullable(z.record(z.any())),
    });

    export type Outbound = {
        eventName: string;
        customerId: string;
        amount: number;
        paymentProcessor: string;
        invoiceId: string | null;
        currency: string;
        metadata: { [k: string]: any } | null;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, TrackSaleResponseBody> =
        z.object({
            eventName: z.string(),
            customerId: z.string(),
            amount: z.number(),
            paymentProcessor: z.string(),
            invoiceId: z.nullable(z.string()),
            currency: z.string(),
            metadata: z.nullable(z.record(z.any())),
        });
}
