import React from "react";
import MegaMenu from "../../components/MegaMenu/MegaMenu";
import { List, Card, Carousel } from "antd";
import "./Home.css";
export default function Home() {
    const data = [
        {
            title: "VeXeRe và nhà xe tài trợ 4000 vé xe Tết 2022 cho sinh viên",
            img: "./images/slide1.png",
        },
        {
            title: "Thanh toán tại ShopeePay - Giảm ngay 10% khi đặt VeXeRe",
            img: "./images/slide2.png",
        },
        {
            title: "Thuê xe mùa dịch tại VeXeRe",
            img: "./images/slide4.png",
        },
    ];
    const settings = {
        className: "center",
        infinite: true,
        autoplay: true,
        slidesToShow: 3,
        swipeToSlide: true,
    };
    return (
        <>
            <div className="home_banner">
                <img src="./images/banner1.png" alt="123" className="img_banner" />
                <div className="home_content">
                    <div className="home_around w-full">
                        <div className="title_banner">
                            <a href="https://vexere.com/vi-VN/nhung-cau-hoi-thuong-gap.html" target="_blank" rel="noreferrer">
                                <h2 className="homepage__Title-bs2n93-3 LVkvx">VeXeRe - Cam kết hoàn 150% nếu nhà xe không giữ vé</h2>
                            </a>
                        </div>
                    </div>
                    <div className="home_search_content w-full">
                        <MegaMenu />
                    </div>
                </div>
            </div>
            <div className="home_slide">
                <div className="home_slide_content">
                    <h2 className="home_slide_title mt-5">Ưu đãi nổi bật</h2>
                    <div className="home_slide_carousel">
                        <Carousel {...settings} arrows infinite={false} className="slide_main">
                            <div>
                                <a href="#">
                                    <img src="./images/slide1.png" alt="123" />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src="./images/slide2.png" alt="123" />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src="./images/slide4.png" alt="123" />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src="./images/slide3.png" alt="123" />
                                </a>
                            </div>
                        </Carousel>
                    </div>
                </div>

                <div className="home_slide_content2" id="news">
                    <h2 className="home_slide_title">Bài viết nổi bật</h2>
                    <List
                        grid={{ gutter: 16, column: 3 }}
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <Card style={{ height: "290px" }} title={<img src={item.img} style={{ height: "200px", width: "100%" }} alt />}>
                                    <p className="font-bold text-sm"> {item.title}</p>
                                </Card>
                            </List.Item>
                        )}
                    />
                    ,
                </div>

                <div className="home_slide_content3">
                    <h2 className="home_slide_title">Nền tảng kết nối người dùng và nhà xe</h2>
                    <div className="seo-content">
                        <div className="card">
                            <div className="icon-container">
                                <img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/svgIcon/bus-car-icon.svg" src="https://storage.googleapis.com/fe-production/svgIcon/bus-car-icon.svg" alt="busCar-icon" />
                            </div>
                            <div className="card-content">
                                <p className="base__Headline-sc-1tvbuqk-7 OkeDq color--light-dark">2000+ nhà xe chất lượng cao</p>
                                <p className="base__Body02-sc-1tvbuqk-14 VqdXU color--medium-sub">5000+ tuyến đường trên toàn quốc, chủ động và đa dạng lựa chọn.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon-container">
                                <img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/svgIcon/yellow-ticket-icon.svg" src="https://storage.googleapis.com/fe-production/svgIcon/yellow-ticket-icon.svg" alt="easybook-icon" />
                            </div>
                            <div className="card-content">
                                <p className="base__Headline-sc-1tvbuqk-7 OkeDq color--light-dark">Đặt vé dễ dàng</p>
                                <p className="base__Body02-sc-1tvbuqk-14 VqdXU color--medium-sub">Đặt vé chỉ với 60s. Chọn xe yêu thích cực nhanh và thuận tiện.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon-container">
                                <img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/svgIcon/completement-icon.svg" src="https://storage.googleapis.com/fe-production/svgIcon/completement-icon.svg" alt="guarantee-icon" />
                            </div>
                            <div className="card-content">
                                <p className="base__Headline-sc-1tvbuqk-7 OkeDq color--light-dark">Đảm bảo có vé</p>
                                <p className="base__Body02-sc-1tvbuqk-14 VqdXU color--medium-sub">Hoàn ngay 150% nếu không có vé, mang đến hành trình trọn vẹn.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="icon-container">
                                <img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/svgIcon/coupon-icon.svg" src="https://storage.googleapis.com/fe-production/svgIcon/coupon-icon.svg" alt="deal-icon" />
                            </div>
                            <div className="card-content">
                                <p className="base__Headline-sc-1tvbuqk-7 OkeDq color--light-dark">Nhiều ưu đãi</p>
                                <p className="base__Body02-sc-1tvbuqk-14 VqdXU color--medium-sub">Hàng ngàn ưu đãi cực chất độc quyền tại VeXeRe.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home_slide_content4" id="partner">
                    <h2 className="home_slide_title mt-5">Trang web đã được kết nối đến</h2>
                    <div className="grid grid-cols-6 home_slide_tv">
                        <a href="https://vnexpress.net/vexere-ho-tro-5-000-ve-tet-2021-cho-sinh-vien-4211920.html" target="_blank" rel="noreferrer">
                            <img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-vne.png" src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-vne.png" alt="express" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=du_TpvYVNg0" target="_blank" rel="noreferrer">
                            <img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-vtv.png" src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-vtv.png" alt="vtv" />
                        </a>
                        <a href="http://cesti.gov.vn/chi-tiet/3403/doi-moi-sang-tao/khoi-nghiep-voi-he-thong-ban-ve-xe-truc-tuyen" target="_blank" rel="noreferrer">
                            <img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-cesti.png" src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-cesti.png" alt="cesti" />
                        </a>
                        <a href="https://dantri.com.vn/kinh-doanh/cong-ty-co-phan-ve-xe-re-goi-von-thanh-cong-tu-cac-nha-dau-tu-uy-tin-20191225100127703.htm" target="_blank" rel="noreferrer">
                            <img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-dantri.png" src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-dantri.png" alt="dan-tri" />
                        </a>
                        <a href="https://tuoitre.vn/blog/quy-dau-tu-nhat-va-singapore-tiep-suc-vexerecom-767367.htm" target="_blank" rel="noreferrer">
                            <img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-tuoitre.png" src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-tuoitre.png" alt="tuoi-tre" />
                        </a>
                        <a href="https://www.youtube.com/watch?v=qT30wzsFKGw" target="_blank" rel="noreferrer">
                            <img className=" lazyloaded" data-src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-fbnc.png" src="https://storage.googleapis.com/fe-production/images/logo-baochi/logo-fbnc.png" alt="fbnc" />
                        </a>
                    </div>
                </div>
                <div className="home_slide_content5" id="station">
                    <h2 className="home_slide_title mt-5">Bến xe nổi bật</h2>
                    <div className="grid grid-cols-4 gap-20">
                        <a
                            href="https://vexere.com/vi-VN/ben-xe-mien-dong"
                            data-bg="https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg"
                            className="BusStationCard__Wrapper-sc-759o96-0 kKZSxH lazyloaded"
                            style={{
                                backgroundImage: 'url("https://storage.googleapis.com/fe-production/images/bx-mien-dong.jpg")',
                            }}
                        >
                            <header className="BusStationCard__Header-sc-759o96-1 iSiVXT">Bến xe Miền Đông</header>
                        </a>

                        <a
                            href="https://vexere.com/vi-VN/ben-xe-nuoc-ngam"
                            data-bg="https://storage.googleapis.com/fe-production/images/bx-nuoc-ngam.jpg"
                            className="BusStationCard__Wrapper-sc-759o96-0 kKZSxH lazyloaded"
                            style={{
                                backgroundImage: 'url("https://storage.googleapis.com/fe-production/images/bx-nuoc-ngam.jpg")',
                            }}
                        >
                            <header className="BusStationCard__Header-sc-759o96-1 iSiVXT">Bến xe Nước Ngầm</header>
                        </a>
                        <a
                            href="https://vexere.com/vi-VN/ben-xe-gia-lam"
                            data-bg="https://storage.googleapis.com/fe-production/images/bx-gia-lam.jpg"
                            className="BusStationCard__Wrapper-sc-759o96-0 kKZSxH lazyloaded"
                            style={{
                                backgroundImage: 'url("https://storage.googleapis.com/fe-production/images/bx-gia-lam.jpg")',
                            }}
                        >
                            <header className="BusStationCard__Header-sc-759o96-1 iSiVXT">Bến xe Gia Lâm</header>
                        </a>
                        <a
                            href="https://vexere.com/vi-VN/ben-xe-my-dinh"
                            data-bg="https://storage.googleapis.com/fe-production/images/bx-my-dinh.jpg"
                            className="BusStationCard__Wrapper-sc-759o96-0 kKZSxH lazyloaded"
                            style={{
                                backgroundImage: 'url("https://storage.googleapis.com/fe-production/images/bx-my-dinh.jpg")',
                            }}
                        >
                            <header className="BusStationCard__Header-sc-759o96-1 iSiVXT">Bến xe Mỹ Đình</header>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
