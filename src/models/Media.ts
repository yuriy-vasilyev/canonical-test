export interface Media {
    id: number;
    date: string;
    slug: string;
    type: string;
    link: string;
    title: {
        rendered: string;
    };
    author: 631;
    caption: {
        rendered: string;
    };
    alt_text: string;
    media_type: string;
    mime_type: string;
    media_details: {
        width: number;
        height: number;
        file: string;
        image_meta: {
            aperture: string;
            credit: string;
            camera: string;
            caption: string;
            created_timestamp: string;
            copyright: string;
            focal_length: string;
            iso: string;
            shutter_speed: string;
            title: string;
            orientation: string;
            keywords: [];
        };
        sizes: {};
    };
    source_url: string;
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
        'wp:term': [
            {
                taxonomy: string;
                embeddable: boolean;
                href: string;
            },
            {
                taxonomy: string;
                embeddable: boolean;
                href: string;
            },
        ];
        curies: [
            {
                name: string;
                href: string;
                templated: boolean;
            },
        ];
    };
}
