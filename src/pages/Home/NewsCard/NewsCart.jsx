import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCart = ({ news }) => {

    const { _id, image_url, title, details, author, total_view, rating } = news;
    return (
        <div>
            <Card className=" mt-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ height: '50px' }} src={author?.img}
                        roundedCircle />
                    <div className='flex-grow-1'>
                        <p className=''>{author.name}</p>
                        <p>{moment().format("MMMM  dddd  D YYYY")}</p>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>

                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>read more</Link></>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <div>
                        <FaEye></FaEye>{total_view}
                    </div>
                    <div>
                        <Rating
                            readonly
                            placeholderRating={rating.number}
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        />
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCart;