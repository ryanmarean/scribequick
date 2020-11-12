import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import Button from '@material-ui/core/Button';

const RoleCard = (props) => {

    const { id, name, updateChampion } = props;

    return (
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>Role About</CardSubtitle>
                <Button variant="contained" color="primary" onClick={e => updateChampion("roleId", id)}>Choose {name}</Button>
            </CardBody>
        </Card>
    );
}

export default RoleCard;