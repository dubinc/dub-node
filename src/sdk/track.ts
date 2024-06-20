/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";

export class Track extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * Track a lead
     *
     * @remarks
     * Track a lead for a short link.
     */
    async lead(
        request?: operations.TrackLeadRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.TrackLeadResponseBody> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.TrackLeadRequestBody$.outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/track/lead")();

        const query$ = encodeFormQuery$({
            projectSlug: this.options$.projectSlug,
            workspaceId: this.options$.workspaceId,
        });

        let security$;
        if (typeof this.options$.token === "function") {
            security$ = { token: await this.options$.token() };
        } else if (this.options$.token) {
            security$ = { token: this.options$.token };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "trackLead",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: [
                "400",
                "401",
                "403",
                "404",
                "409",
                "410",
                "422",
                "429",
                "4XX",
                "500",
                "5XX",
            ],
        };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.TrackLeadResponseBody>()
            .json(200, operations.TrackLeadResponseBody$)
            .json(400, errors.BadRequest$, { err: true })
            .json(401, errors.Unauthorized$, { err: true })
            .json(403, errors.Forbidden$, { err: true })
            .json(404, errors.NotFound$, { err: true })
            .json(409, errors.Conflict$, { err: true })
            .json(410, errors.InviteExpired$, { err: true })
            .json(422, errors.UnprocessableEntity$, { err: true })
            .json(429, errors.RateLimitExceeded$, { err: true })
            .fail(["4XX", "5XX"])
            .json(500, errors.InternalServerError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Track a sale
     *
     * @remarks
     * Track a sale for a short link.
     */
    async sale(
        request?: operations.TrackSaleRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.TrackSaleResponseBody> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.TrackSaleRequestBody$.outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/track/sale")();

        const query$ = encodeFormQuery$({
            projectSlug: this.options$.projectSlug,
            workspaceId: this.options$.workspaceId,
        });

        let security$;
        if (typeof this.options$.token === "function") {
            security$ = { token: await this.options$.token() };
        } else if (this.options$.token) {
            security$ = { token: this.options$.token };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "trackSale",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: [
                "400",
                "401",
                "403",
                "404",
                "409",
                "410",
                "422",
                "429",
                "4XX",
                "500",
                "5XX",
            ],
        };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.TrackSaleResponseBody>()
            .json(200, operations.TrackSaleResponseBody$)
            .json(400, errors.BadRequest$, { err: true })
            .json(401, errors.Unauthorized$, { err: true })
            .json(403, errors.Forbidden$, { err: true })
            .json(404, errors.NotFound$, { err: true })
            .json(409, errors.Conflict$, { err: true })
            .json(410, errors.InviteExpired$, { err: true })
            .json(422, errors.UnprocessableEntity$, { err: true })
            .json(429, errors.RateLimitExceeded$, { err: true })
            .fail(["4XX", "5XX"])
            .json(500, errors.InternalServerError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Track a customer
     *
     * @remarks
     * Track a customer for an authenticated workspace.
     */
    async customer(
        request?: operations.TrackCustomerRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.TrackCustomerResponseBody> {
        const input$ = request;
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) =>
                operations.TrackCustomerRequestBody$.outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/track/customer")();

        const query$ = encodeFormQuery$({
            projectSlug: this.options$.projectSlug,
            workspaceId: this.options$.workspaceId,
        });

        let security$;
        if (typeof this.options$.token === "function") {
            security$ = { token: await this.options$.token() };
        } else if (this.options$.token) {
            security$ = { token: this.options$.token };
        } else {
            security$ = {};
        }
        const context = {
            operationID: "trackCustomer",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const doOptions = {
            context,
            errorCodes: [
                "400",
                "401",
                "403",
                "404",
                "409",
                "410",
                "422",
                "429",
                "4XX",
                "500",
                "5XX",
            ],
        };
        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request$, doOptions);

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.TrackCustomerResponseBody>()
            .json(200, operations.TrackCustomerResponseBody$)
            .json(400, errors.BadRequest$, { err: true })
            .json(401, errors.Unauthorized$, { err: true })
            .json(403, errors.Forbidden$, { err: true })
            .json(404, errors.NotFound$, { err: true })
            .json(409, errors.Conflict$, { err: true })
            .json(410, errors.InviteExpired$, { err: true })
            .json(422, errors.UnprocessableEntity$, { err: true })
            .json(429, errors.RateLimitExceeded$, { err: true })
            .fail(["4XX", "5XX"])
            .json(500, errors.InternalServerError$, { err: true })
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
