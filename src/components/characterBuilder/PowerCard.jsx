import React,{ useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import Button from '@material-ui/core/Button';

const PowerCard = props => {

    const {
        id,
        name,
        desc,
        isDivine,
        actionType,
        actionTypeSubtext,
        skillTree,
        tier,
        skillChallenge,
        challengeLevel,
        duration,
        type,
        maximumLevel,
        addPower
    } = props;

    const choosePowerHandler = (powerId, powerName, isDivine) => {
        addPower(powerId, powerName, isDivine);
    }

    return (
        <Card id={id} className={`isDivine${isDivine}`}>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle><em>{actionType} {actionTypeSubtext && `(${actionTypeSubtext})`}</em></CardSubtitle>
                {skillChallenge && <CardSubtitle><em>{`${skillChallenge} - Challenge ${challengeLevel}`}</em></CardSubtitle>}
                <CardText>{desc}</CardText>
                {duration && <CardSubtitle><em>{`Duration: ${duration}`}</em></CardSubtitle>}
                <Button variant="contained" color="primary" onClick={e => choosePowerHandler(id, name, isDivine)}>Choose Power</Button>
            </CardBody>
        </Card>
    );
}

export default PowerCard;