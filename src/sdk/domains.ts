/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import {
    encodeFormQuery as encodeFormQuery$,
    encodeJSON as encodeJSON$,
    encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import { HTTPClient } from "../lib/http.js";
import * as schemas$ from "../lib/schemas.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { extractSecurity } from "../lib/security.js";
import * as components from "../models/components/index.js";
import * as errors from "../models/errors/index.js";
import * as operations from "../models/operations/index.js";
import { createPageIterator, PageIterator, Paginator } from "../types/operations.js";

export class Domains extends ClientSDK {
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
     * Retrieve a list of domains
     *
     * @remarks
     * Retrieve a list of domains associated with the authenticated workspace.
     */
    async list(
        request?: operations.ListDomainsRequest | undefined,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ListDomainsResponse>> {
        const input$ = typeof request === "undefined" ? {} : request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.ListDomainsRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/domains")();

        const query$ = encodeFormQuery$({
            archived: payload$.archived,
            page: payload$.page,
            pageSize: payload$.pageSize,
            search: payload$.search,
        });

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const token$ = await extractSecurity(this.options$.token);
        const security$ = token$ == null ? {} : { token: token$ };
        const context = {
            operationID: "listDomains",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
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
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$, raw$] = await this.matcher<operations.ListDomainsResponse>()
            .json(200, operations.ListDomainsResponse$inboundSchema, { key: "Result" })
            .json(400, errors.BadRequest$inboundSchema, { err: true })
            .json(401, errors.Unauthorized$inboundSchema, { err: true })
            .json(403, errors.Forbidden$inboundSchema, { err: true })
            .json(404, errors.NotFound$inboundSchema, { err: true })
            .json(409, errors.Conflict$inboundSchema, { err: true })
            .json(410, errors.InviteExpired$inboundSchema, { err: true })
            .json(422, errors.UnprocessableEntity$inboundSchema, { err: true })
            .json(429, errors.RateLimitExceeded$inboundSchema, { err: true })
            .json(500, errors.InternalServerError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        const nextFunc = (responseData: unknown): Paginator<operations.ListDomainsResponse> => {
            const page = input$.page || 0;
            const nextPage = page + 1;

            if (!responseData) {
                return () => null;
            }

            const results = responseData;

            if (!Array.isArray(results) || !results.length) {
                return () => null;
            }
            const limit = input$.pageSize || 0;
            if (results.length < limit) {
                return () => null;
            }

            return () =>
                this.list(
                    {
                        ...input$,
                        page: nextPage,
                    },
                    options
                );
        };

        const page$ = { ...result$, next: nextFunc(raw$) };
        return { ...page$, ...createPageIterator(page$) };
    }

    /**
     * Create a domain
     *
     * @remarks
     * Create a domain for the authenticated workspace.
     */
    async create(
        request?: operations.CreateDomainRequestBody | undefined,
        options?: RequestOptions
    ): Promise<components.DomainSchema> {
        const input$ = request;

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.CreateDomainRequestBody$outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : encodeJSON$("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/domains")();

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const token$ = await extractSecurity(this.options$.token);
        const security$ = token$ == null ? {} : { token: token$ };
        const context = {
            operationID: "createDomain",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
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
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.DomainSchema>()
            .json(201, components.DomainSchema$inboundSchema)
            .json(400, errors.BadRequest$inboundSchema, { err: true })
            .json(401, errors.Unauthorized$inboundSchema, { err: true })
            .json(403, errors.Forbidden$inboundSchema, { err: true })
            .json(404, errors.NotFound$inboundSchema, { err: true })
            .json(409, errors.Conflict$inboundSchema, { err: true })
            .json(410, errors.InviteExpired$inboundSchema, { err: true })
            .json(422, errors.UnprocessableEntity$inboundSchema, { err: true })
            .json(429, errors.RateLimitExceeded$inboundSchema, { err: true })
            .json(500, errors.InternalServerError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Delete a domain
     *
     * @remarks
     * Delete a domain from a workspace. It cannot be undone. This will also delete all the links associated with the domain.
     */
    async delete(
        slug: string,
        options?: RequestOptions
    ): Promise<operations.DeleteDomainResponseBody> {
        const input$: operations.DeleteDomainRequest = {
            slug: slug,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeleteDomainRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            slug: encodeSimple$("slug", payload$.slug, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/domains/{slug}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            Accept: "application/json",
        });

        const token$ = await extractSecurity(this.options$.token);
        const security$ = token$ == null ? {} : { token: token$ };
        const context = {
            operationID: "deleteDomain",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "DELETE",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
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
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<operations.DeleteDomainResponseBody>()
            .json(200, operations.DeleteDomainResponseBody$inboundSchema)
            .json(400, errors.BadRequest$inboundSchema, { err: true })
            .json(401, errors.Unauthorized$inboundSchema, { err: true })
            .json(403, errors.Forbidden$inboundSchema, { err: true })
            .json(404, errors.NotFound$inboundSchema, { err: true })
            .json(409, errors.Conflict$inboundSchema, { err: true })
            .json(410, errors.InviteExpired$inboundSchema, { err: true })
            .json(422, errors.UnprocessableEntity$inboundSchema, { err: true })
            .json(429, errors.RateLimitExceeded$inboundSchema, { err: true })
            .json(500, errors.InternalServerError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }

    /**
     * Update a domain
     *
     * @remarks
     * Update a domain for the authenticated workspace.
     */
    async update(
        slug: string,
        requestBody?: operations.UpdateDomainRequestBody | undefined,
        options?: RequestOptions
    ): Promise<components.DomainSchema> {
        const input$: operations.UpdateDomainRequest = {
            slug: slug,
            requestBody: requestBody,
        };

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.UpdateDomainRequest$outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = encodeJSON$("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            slug: encodeSimple$("slug", payload$.slug, { explode: false, charEncoding: "percent" }),
        };
        const path$ = this.templateURLComponent("/domains/{slug}")(pathParams$);

        const query$ = "";

        const headers$ = new Headers({
            "Content-Type": "application/json",
            Accept: "application/json",
        });

        const token$ = await extractSecurity(this.options$.token);
        const security$ = token$ == null ? {} : { token: token$ };
        const context = {
            operationID: "updateDomain",
            oAuth2Scopes: [],
            securitySource: this.options$.token,
        };
        const securitySettings$ = this.resolveGlobalSecurity(security$);

        const request$ = this.createRequest$(
            context,
            {
                security: securitySettings$,
                method: "PATCH",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
                timeoutMs: options?.timeoutMs || this.options$.timeoutMs || -1,
            },
            options
        );

        const response = await this.do$(request$, {
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
            retryConfig: options?.retries || this.options$.retryConfig,
            retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
        });

        const responseFields$ = {
            HttpMeta: { Response: response, Request: request$ },
        };

        const [result$] = await this.matcher<components.DomainSchema>()
            .json(200, components.DomainSchema$inboundSchema)
            .json(400, errors.BadRequest$inboundSchema, { err: true })
            .json(401, errors.Unauthorized$inboundSchema, { err: true })
            .json(403, errors.Forbidden$inboundSchema, { err: true })
            .json(404, errors.NotFound$inboundSchema, { err: true })
            .json(409, errors.Conflict$inboundSchema, { err: true })
            .json(410, errors.InviteExpired$inboundSchema, { err: true })
            .json(422, errors.UnprocessableEntity$inboundSchema, { err: true })
            .json(429, errors.RateLimitExceeded$inboundSchema, { err: true })
            .json(500, errors.InternalServerError$inboundSchema, { err: true })
            .fail(["4XX", "5XX"])
            .match(response, { extraFields: responseFields$ });

        return result$;
    }
}
