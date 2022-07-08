import { TaxonomyType } from '@models/TaxonomyType';
import { Term } from '@models/Term';

export const getTermsByTaxonomy = (taxonomy: TaxonomyType, terms: Term[][]): Term[] => {
    const result: Term[] = [];

    terms.forEach((terms) => {
        terms.forEach((term) => {
            if (term.taxonomy === taxonomy) {
                result.push(term);
            }
        });
    });

    return result;
};
