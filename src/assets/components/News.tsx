import { useEffect, useState } from "react";

interface Props {
  category: string;
}


function News({ category }: Props) {

  interface Article {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
  }
  const [news, setNews] = useState<Article[]>([]);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=a11a36eda76d4ebf93e3f56a74f03844`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Tesla news");
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (error: any) {
        setErr(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className="Loading">Loading...</div>;
  if (err) return <div className="failed">{err}</div>;

  return (
    <>
      <div className="container my-4">
        <div className="row row-cols-1 g-0">
          {news.map((article, index) => (
            <div className="col" key={index}>
              <div className="card mx-auto mb-4" style={{ maxWidth: 1000 }}>
                <div className="row g-0">
                  <div className="col-md-4 d-flex align-items-center">
                    {article.urlToImage ? (
                      <img
                        src={article.urlToImage}
                        className="img-fluid rounded-start mx-auto d-block"
                        style={{ maxWidth: 500, maxHeight: 150 }}
                        alt="Article Image"
                      />
                    ) : (
                      <img
                        src="logo2.png"
                        className="img-fluid rounded-start mx-auto d-block"
                        style={{ maxWidth: 500, maxHeight: 150 }}
                        alt="Article Image"
                      />
                    )}
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">{article.description}</p>
                      <a href={article.url} className="">Read more...</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>

  );
}

export default News;





