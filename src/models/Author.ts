export interface Author {
    id: number;
    name: string;
    url: string;
    description: string;
    link: string;
    slug: string;
    avatar_urls: {
        '24': string;
        '48': string;
        '96': string;
    };
    user_job_title: string;
    user_website_title: string;
    user_google: string;
    user_twitter: string;
    user_facebook: string;
    user_photo: string;
    user_location: string;
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
    };
}
