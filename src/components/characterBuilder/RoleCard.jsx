import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Button from '@material-ui/core/Button';

const RoleCard = (props) => {

    const { id, name, updateChampion } = props;

    return (
        <Card className="col-4">
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>Role About</CardSubtitle>
                <Button variant="contained" color="primary" onClick={e => updateChampion(id, name)}>Choose {name}</Button>
            </CardBody>
        </Card>
    );
}

export default RoleCard;