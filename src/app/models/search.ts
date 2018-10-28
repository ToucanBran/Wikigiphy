export class Search {
    Userid: string;
    searchText: string;
    createdAt: number;

    constructor(searchText: string, createdAt: number) {
        this.searchText = searchText;
        this.createdAt = createdAt;
    }
}
