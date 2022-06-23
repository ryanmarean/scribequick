import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import DeityCard from './DeityCard';

const DeityTab = (props) => {

    const { updateChampion } = props;

    const [deitiesList, setDeitiesList] = useState([]);

    useEffect(() => {
        axios.get('https://pantheonrpg.com/wp-json/wp/v2/deity?orderby=title&order=asc')
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
                            id={deity.id}
                            name={deity.deity_name}
                            about={deity.deity_description}
                            passiveName={deity.passive_power_name}
                            passiveDesc={deity.passive_power_desc}
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