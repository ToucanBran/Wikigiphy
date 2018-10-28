export class SearchResult {
    title: string;
    url: string;
    type: string;

    constructor(title: string, url: string, type: string) {
        this.title = title;
        this.url = url;
        this.type = type;
    }
}
