import articles from "@/modules/articles";
import axios from "./axios";

const ArticleService = {
    articles() {
        return axios.get('/articles')
    },
    articleDetails(slug){
        return axios.get(`/article/${slug}`)
    }
}

export default ArticleService