/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { SDKOptions, serverURLFromOptions } from "../lib/config.js";
import { HTTPClient } from "../lib/http.js";
import { ClientSDK } from "../lib/sdks.js";
import { Analytics } from "./analytics.js";
import { Domains } from "./domains.js";
import { Links } from "./links.js";
import { Metatags } from "./metatags.js";
import { QRCodes } from "./qrcodes.js";
import { Tags } from "./tags.js";
import { Track } from "./track.js";
import { Workspaces } from "./workspaces.js";

export class Dub extends ClientSDK {
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

    private _links?: Links;
    get links(): Links {
        return (this._links ??= new Links(this.options$));
    }

    private _qrCodes?: QRCodes;
    get qrCodes(): QRCodes {
        return (this._qrCodes ??= new QRCodes(this.options$));
    }

    private _analytics?: Analytics;
    get analytics(): Analytics {
        return (this._analytics ??= new Analytics(this.options$));
    }

    private _workspaces?: Workspaces;
    get workspaces(): Workspaces {
        return (this._workspaces ??= new Workspaces(this.options$));
    }

    private _tags?: Tags;
    get tags(): Tags {
        return (this._tags ??= new Tags(this.options$));
    }

    private _domains?: Domains;
    get domains(): Domains {
        return (this._domains ??= new Domains(this.options$));
    }

    private _track?: Track;
    get track(): Track {
        return (this._track ??= new Track(this.options$));
    }

    private _metatags?: Metatags;
    get metatags(): Metatags {
        return (this._metatags ??= new Metatags(this.options$));
    }
}
