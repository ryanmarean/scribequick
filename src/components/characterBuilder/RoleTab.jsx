import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import RoleCard from './RoleCard';

const RoleTab = (props) => {

    const { updateChampion } = props;

    const [rolesList, setRolesList] = useState([]);

    useEffect(() => {
        axios.get('https://pantheonrpg.com/wp-json/wp/v2/role?orderby=title&order=asc')
            .then(res => {
                setRolesList(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    },[])

    return (
        <Container>
            <Row>
                {
                    rolesList.map((role, i) => 
                        <RoleCard
                            key={i}
                            id = {role.id}
                            name={role.role_name}
                            updateChampion={updateChampion}
                            />
                    )
                }
            </Row>
        </Container>
    )
}

export default RoleTab;