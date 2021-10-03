import { getArticles, getArticlesPending, GET_ARTICLES_PENDING } from "../actions";

describe('articles actions', () => {
    test('getArticlesPenging returns and actions with type', () => {
        const expected = {
            type: GET_ARTICLES_PENDING,
        };
        const received = getArticlesPending();

        expect(expected).toEqual(received);
    })
});


describe("getArticles", () => {
    it("calls dispatch", async () => {
        const mockDispatch = jest.fn();

        fetchMock.mockOnce(
            JSON.stringify("the next call to fetch will always return this as the body")
        );
        await getArticles()(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(getArticlesPending());
    })
});