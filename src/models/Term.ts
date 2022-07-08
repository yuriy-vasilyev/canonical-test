import { TaxonomyType } from '@models/TaxonomyType';
import { Cury } from '@models/cury';

export interface Term {
    id: number;
    link: string;
    name: string;
    slug: string;
    taxonomy: TaxonomyType;
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
        'wp:post_type': [
            {
                href: string;
            },
            {
                href: string;
            },
        ];
        curies: Cury[];
    };
}
