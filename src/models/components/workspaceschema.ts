/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types";
import * as z from "zod";

/**
 * The plan of the workspace.
 */
export const Plan = {
    Free: "free",
    Pro: "pro",
    Business: "business",
    BusinessPlus: "business plus",
    BusinessExtra: "business extra",
    BusinessMax: "business max",
    Enterprise: "enterprise",
} as const;
/**
 * The plan of the workspace.
 */
export type Plan = ClosedEnum<typeof Plan>;

/**
 * The role of the authenticated user in the workspace.
 */
export const Role = {
    Owner: "owner",
    Member: "member",
} as const;
/**
 * The role of the authenticated user in the workspace.
 */
export type Role = ClosedEnum<typeof Role>;

export type Users = {
    /**
     * The role of the authenticated user in the workspace.
     */
    role: Role;
};

export type Domains = {
    /**
     * The domain name.
     */
    slug: string;
    /**
     * Whether the domain is the primary domain for the workspace.
     */
    primary?: boolean | undefined;
};

export type WorkspaceSchema = {
    /**
     * The unique ID of the workspace.
     */
    id: string;
    /**
     * The name of the workspace.
     */
    name: string;
    /**
     * The slug of the workspace.
     */
    slug: string;
    /**
     * The logo of the workspace.
     */
    logo?: string | null | undefined;
    /**
     * The usage of the workspace.
     */
    usage: number;
    /**
     * The usage limit of the workspace.
     */
    usageLimit: number;
    /**
     * The links usage of the workspace.
     */
    linksUsage: number;
    /**
     * The links limit of the workspace.
     */
    linksLimit: number;
    /**
     * The domains limit of the workspace.
     */
    domainsLimit: number;
    /**
     * The tags limit of the workspace.
     */
    tagsLimit: number;
    /**
     * The users limit of the workspace.
     */
    usersLimit: number;
    /**
     * The plan of the workspace.
     */
    plan: Plan;
    /**
     * The Stripe ID of the workspace.
     */
    stripeId: string | null;
    /**
     * The date and time when the billing cycle starts for the workspace.
     */
    billingCycleStart: number;
    /**
     * [BETA]: The Stripe Connect ID of the workspace.
     */
    stripeConnectId: string | null;
    /**
     * The date and time when the workspace was created.
     */
    createdAt: string;
    /**
     * The role of the authenticated user in the workspace.
     */
    users: Array<Users>;
    /**
     * The domains of the workspace.
     */
    domains: Array<Domains>;
    /**
     * The invite code of the workspace.
     */
    inviteCode: string | null;
    /**
     * Whether the workspace is enrolled in the beta testing program.
     */
    betaTester?: boolean | undefined;
};

/** @internal */
export namespace Plan$ {
    export const inboundSchema = z.nativeEnum(Plan);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Role$ {
    export const inboundSchema = z.nativeEnum(Role);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace Users$ {
    export const inboundSchema: z.ZodType<Users, z.ZodTypeDef, unknown> = z.object({
        role: Role$.inboundSchema,
    });

    export type Outbound = {
        role: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Users> = z.object({
        role: Role$.outboundSchema,
    });
}

/** @internal */
export namespace Domains$ {
    export const inboundSchema: z.ZodType<Domains, z.ZodTypeDef, unknown> = z.object({
        slug: z.string(),
        primary: z.boolean().default(false),
    });

    export type Outbound = {
        slug: string;
        primary: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Domains> = z.object({
        slug: z.string(),
        primary: z.boolean().default(false),
    });
}

/** @internal */
export namespace WorkspaceSchema$ {
    export const inboundSchema: z.ZodType<WorkspaceSchema, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
        name: z.string(),
        slug: z.string(),
        logo: z.nullable(z.string()).default(null),
        usage: z.number(),
        usageLimit: z.number(),
        linksUsage: z.number(),
        linksLimit: z.number(),
        domainsLimit: z.number(),
        tagsLimit: z.number(),
        usersLimit: z.number(),
        plan: Plan$.inboundSchema,
        stripeId: z.nullable(z.string()),
        billingCycleStart: z.number(),
        stripeConnectId: z.nullable(z.string()),
        createdAt: z.string(),
        users: z.array(z.lazy(() => Users$.inboundSchema)),
        domains: z.array(z.lazy(() => Domains$.inboundSchema)),
        inviteCode: z.nullable(z.string()),
        betaTester: z.boolean().optional(),
    });

    export type Outbound = {
        id: string;
        name: string;
        slug: string;
        logo: string | null;
        usage: number;
        usageLimit: number;
        linksUsage: number;
        linksLimit: number;
        domainsLimit: number;
        tagsLimit: number;
        usersLimit: number;
        plan: string;
        stripeId: string | null;
        billingCycleStart: number;
        stripeConnectId: string | null;
        createdAt: string;
        users: Array<Users$.Outbound>;
        domains: Array<Domains$.Outbound>;
        inviteCode: string | null;
        betaTester?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, WorkspaceSchema> = z.object({
        id: z.string(),
        name: z.string(),
        slug: z.string(),
        logo: z.nullable(z.string()).default(null),
        usage: z.number(),
        usageLimit: z.number(),
        linksUsage: z.number(),
        linksLimit: z.number(),
        domainsLimit: z.number(),
        tagsLimit: z.number(),
        usersLimit: z.number(),
        plan: Plan$.outboundSchema,
        stripeId: z.nullable(z.string()),
        billingCycleStart: z.number(),
        stripeConnectId: z.nullable(z.string()),
        createdAt: z.string(),
        users: z.array(z.lazy(() => Users$.outboundSchema)),
        domains: z.array(z.lazy(() => Domains$.outboundSchema)),
        inviteCode: z.nullable(z.string()),
        betaTester: z.boolean().optional(),
    });
}
