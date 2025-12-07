import { Error } from './Error';
import { Loading } from './Loading';
import { SearchResults } from './SearchResults';
import { NoResults } from './NoResults';

export const Content = ({ status}) => {
    switch (status) {
        case "initial":
            return null;
        case "loading":
            return <Loading />;
        case "error":
            return <Error />;
        case "noResults":
            return <NoResults />;
        case "results":
            return <SearchResults />;
        default:
         throw new Error(`incorrect status: ${status}`);
    }
};