import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import PowerCard from '../components/PowerCard';

const PowerTab = (props) => {

    const { deityId, roleId, deityPowerId, setDeityPowerId, rolePowerId, setRolePowerId, addPower } = props;

    const [powersList, setPowersList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/ClientApp/ScribeQuick/GetPowers')
            .then(res => setPowersList(res.data))
            .catch(err => console.log(err));
    }, [])

    const isDeityMatch = power => deityId === power.deityId;
    const isRoleMatch = power => roleId === power.roleId;
    
    return (
        <Container>
            <Row>
                <h3>Deity Powers</h3>
            </Row>
            <Row>
                { 
                    powersList.map((power, i) =>
                        isDeityMatch(power) &&
                        <PowerCard
                            key={i}
                            id={power.powerId}
                            powerRoleId={power.roleId}
                            powerDeityId={power.deityId}
                            name={power.name}
                            desc={power.description}
                            isDivine={power.isDivine}
                            skillTree={power.skillTreeName}
                            tier={power.tier}
                            challenge={power.challenge}
                            duration={power.duration}
                            type={power.type}
                            chosenRoleId={roleId}
                            chosenDeityId={deityId}
                            powerId={deityPowerId}
                            setPowerId={setDeityPowerId}
                            addPower={addPower}
                        />
                    )
                }
            </Row>
            <Row>
                <h3>Role Powers</h3>
            </Row>
            <Row>
                {
                    powersList.map((power, i) =>
                        isRoleMatch(power) &&
                        <PowerCard
                            key={i}
                            id={power.powerId}
                            powerRoleId={power.roleId}
                            powerDeityId={power.deityId}
                            name={power.name}
                            desc={power.description}
                            isDivine={power.isDivine}
                            skillTree={power.skillTreeName}
                            tier={power.tier}
                            challenge={power.challenge}
                            duration={power.duration}
                            type={power.type}
                            chosenRoleId={roleId}
                            chosenDeityId={deityId}
                            powerId={rolePowerId}
                            setPowerId={setRolePowerId}
                            addPower={addPower}
                        />
                    )
                }
            </Row>
        </Container>
    )
}

export default PowerTab;