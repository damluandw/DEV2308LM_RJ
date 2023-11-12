import React from 'react'
import './css/baiviet.css'
import axios from "../api/api-xm";
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DOMPurify from "dompurify";
import parse from "html-react-parser";
function NewsDetail() {
    const { id } = useParams();
    const [newsDetail, setNewsDetail] = useState({});
    const [news, setNews] = useState([]);
    const getNews = async () => {
        let resNewsDetail = await axios.get("api/News/" + id);
        setNewsDetail(resNewsDetail.data);
        let resNews = await axios.get("api/News");
        let news = resNews.data
        news = news.filter(x => x.id != id)
        setNews(news);

    };
    useEffect(() => {
        getNews();
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        getNews();
        window.scrollTo(0, 0);
    }, [id]);
    const cleanHTML = DOMPurify.sanitize(newsDetail.description, {
        USE_PROFILES: { html: true },
    });
    let renderNews = news.map((item, index) => {
        return ((index <= 2) ?
            <div key={index} className="item-tin-tuc row">
                <div className="img-tin-tuc col-lg-4">
                    <img
                        className="w-100"
                        src={axios.getUri() + item.image}
                        alt={item.title}
                    />
                </div>
                <div className="tilte-tin-tuc col-lg-8">
                    <NavLink to={`/news/detail/${item.id}`}>
                        <h5>
                            {item.title}
                        </h5>
                    </NavLink>

                </div>
            </div>
            : <></>);
    });

    return (
        <>
            <section id="list-title">
                <div className="container">
                    <div className="list-title">
                        <div>
                            <NavLink to= "/home">
                                <span className="cl-yellow">Trang chủ</span>
                            </NavLink>
                            <span className="text-secondary">&gt;</span>
                            <NavLink to="/news?page=1">
                                <span className="cl-yellow">Tin tức</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>

            <section id="bai-viet">
                <div className="container">
                    <div className="bai-viet">
                        <div className="row">
                            <div className="col-8">
                                <div className="main-bai-viet left-bai-viet">
                                    <h2>
                                        {newsDetail.title}
                                    </h2>
                                    <p>
                                        {parse(cleanHTML)}
                                    </p>
                                    <img
                                        src={axios.getUri() + newsDetail.image}
                                        alt={newsDetail.title}
                                    />
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="right-bai-viet">
                                    <h3>Bài viết mới</h3>
                                    <div className="list-tin-tuc">
                                        {renderNews}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default NewsDetail