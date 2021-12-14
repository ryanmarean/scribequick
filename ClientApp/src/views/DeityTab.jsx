import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import DeityCard from '../components/DeityCard';

const DeityTab = (props) => {

    const { updateChampion } = props;

    const [deitiesList, setDeitiesList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/ClientApp/ScribeQuick/GetDeities')
            .then(res => {
                setDeitiesList(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    },[]);

    return (
        <Container>
            <Row>
                {
                    deitiesList.map((deity, i) => 
                        <DeityCard 
                            key={i}
                            id={deity.deityId}
                            name={deity.name}
                            about={deity.about}
                            passiveName={deity.passivePowerName}
                            passiveDesc={deity.passivePowerDesc}
                            criticalDesc={deity.criticalPowerDesc}
                            prefSacrifice={deity.preferredSacrifice}
                            updateChampion={updateChampion}
                            />
                    )
                }
            </Row>
        </Container>
    )
}

export default DeityTab;