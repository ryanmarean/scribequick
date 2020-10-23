import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import Button from '@material-ui/core/Button';

const PowerCard = props => {

    const { id, name, desc, isDivine, skillTree, tier, challenge, duration, type } = props;

    return (
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{desc}</CardSubtitle>
            </CardBody>
        </Card>
    );
}

export default PowerCard;