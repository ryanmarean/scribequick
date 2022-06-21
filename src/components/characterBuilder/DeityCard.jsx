import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import Button from '@material-ui/core/Button';

const DeityCard = (props) => {

    const { id, name, about, passiveName, passiveDesc, criticalDesc, prefSacrifice, updateChampion } = props

    return (
        <Card className="col-12">
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{about}</CardSubtitle>
                <CardText>Passive Power: {passiveName}</CardText>
                <CardText>{passiveDesc}</CardText>
                <CardText>{criticalDesc}</CardText>
                <CardText>Preferred Sacrifice: {prefSacrifice}</CardText>
                <Button variant="contained" color="primary" onClick={e => updateChampion("deityId", id)}>Choose {name}</Button>
            </CardBody>
        </Card>

    );
}

export default DeityCard;