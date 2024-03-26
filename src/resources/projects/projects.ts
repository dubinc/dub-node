// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'dub/resource';
import * as TagsAPI from 'dub/resources/projects/tags';

export class Projects extends APIResource {
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);
}

export namespace Projects {
  export import Tags = TagsAPI.Tags;
}
