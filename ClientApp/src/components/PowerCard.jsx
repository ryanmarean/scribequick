import React,{ useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import Button from '@material-ui/core/Button';

const PowerCard = props => {

    const {
        id,
        powerRoleId,
        powerDeityId,
        name,
        desc,
        isDivine,
        skillTree,
        tier,
        challenge,
        duration,
        type,
        chosenRoleId,
        chosenDeityId,
        powerId,
        setPowerId,
        addPower
    } = props;

    const choosePowerHandler = (powerId, isDivine) => {
        setPowerId(powerId);
        addPower(powerId, isDivine);
    }

    return (
        <Card id={id} className={"isDivine" + isDivine}>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{desc}</CardSubtitle>
                <Button variant="contained" color="primary" onClick={e => choosePowerHandler(id, isDivine)}>Choose Power</Button>
            </CardBody>
        </Card>
    );
}

export default PowerCard;