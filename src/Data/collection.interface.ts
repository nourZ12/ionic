import { Quote } from "./quote.interface";

export interface QuoteCollection {
    category: string;
    quotes: Quote[];
    icon: string;
}