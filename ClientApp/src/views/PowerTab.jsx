import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import PowerCard from '../components/PowerCard';

const PowerTab = (props) => {

    const { deityId, roleId, powersId, setPowersId } = props;

    const [powersList, setPowersList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/ClientApp/ScribeQuick/GetPowers')
            .then(res => setPowersList(res.data))
            .catch(err => console.log(err));
    }, [])
    
    return (
        <Container>
            <Row>
                {
                    powersList.map((power, i) => 
                        <PowerCard
                            key={i}
                            id={power.powerId}
                            name={power.name}
                            desc={power.description}
                            isDivine={power.isDivine}
                            skillTree={power.skillTreeName}
                            tier={power.tier}
                            challenge={power.challenge}
                            duration={power.duration}
                            type={power.type}
                        />
                    )
                }
            </Row>
        </Container>
    )
}

export default PowerTab;