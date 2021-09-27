import { useEffect } from "react"
import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../Store/articles/actions";
import { selectArticles, selectArticlesError, selectArticlesLoading } from "../Store/articles/selectors";

export const News = () => {
    const dispatch = useDispatch();

    const articles = useSelector(selectArticles);
    const error = useSelector(selectArticlesError);
    const loading = useSelector(selectArticlesLoading);


    const reload = () => {
        dispatch(getArticles());
    };

    useEffect(() => {
        reload();
    }, []);



    return (
        <div>
            <h2>News</h2>
            {error ? (
                <>
                    <h3>Error: {error}</h3>
                    <button onClick={reload}>Refresh</button>
                </>
            ) : (
                articles.map((art) => (
                    <div key={art.id}>
                        <h4>{art.title}</h4>
                    </div>
                ))
            )}
            {loading && <CircularProgress />}
        </div>
    );
};