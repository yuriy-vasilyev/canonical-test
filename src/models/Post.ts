import { Author } from '@models/Author';
import { Media } from '@models/Media';
import { TaxonomyType } from '@models/TaxonomyType';
import { PostStatusType } from '@models/PostStatusType';
import { Term } from '@models/Term';
import { Cury } from '@models/cury';

export interface Post {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
        rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: PostStatusType;
    type: 'post';
    link: string;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    author: number;
    featured_media: string;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: any[];
    categories: number[];
    tags: number[];
    topic: number[];
    group: number[];
    _event_location: string;
    _event_venue: string;
    _event_registration: string;
    _start_day: string;
    _start_month: string;
    _start_year: string;
    _end_day: string;
    _end_month: string;
    _end_year: string;
    _links: {
        self: [
            {
                href: string;
            },
        ];
        collection: [
            {
                href: string;
            },
        ];
        about: [
            {
                href: string;
            },
        ];
        author: [
            {
                embeddable: boolean;
                href: string;
            },
        ];
        replies: [
            {
                embeddable: boolean;
                href: string;
            },
        ];
        'version-history': [
            {
                count: number;
                href: string;
            },
        ];
        'predecessor-version': [
            {
                id: number;
                href: string;
            },
        ];
        'wp:featuredmedia': [
            {
                embeddable: boolean;
                href: string;
            },
        ];
        'wp:attachment': [
            {
                href: string;
            },
        ];
        'wp:term': {
            taxonomy: TaxonomyType;
            embeddable: boolean;
            href: string;
        }[];
        curies: Cury[];
    };
    _embedded: {
        author: Author[];
        'wp:featuredmedia': Media[];
        'wp:term': Term[][];
    };
}
