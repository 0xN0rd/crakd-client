export type Image = {
    url: string;
    blurDataURL?: string;
}

export type Tournament = {
    name: string;
    description: string;
    cardImage: Image;
    logo: Image;
    length: string;
    format: string;
    slug: string;
    contract: string;
};