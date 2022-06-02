import React from 'react';
import { Card } from 'react-bootstrap';
// import { Spring, config } from "react-spring";

const SingleRatingCard = (props) => {
    const { number, title, des } = props.rating
    return (
        <div>
            <Card className="rating-card">
                <Card.Body>
                    {/* <Spring
                        config={config.slow}
                        from={{ num: 1 }}
                        to={{ num: number }}
                        delay="1000"
                    >
                        {props => <div>{props}</div>}
                    </Spring> */}
                    <h4 className="card-title mt-3">{number} {(title === "Positive Feedback") ? '%' : "+"}</h4>
                    <h5>{title}</h5>
                    <Card.Text className="text-secondary">{des}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleRatingCard;