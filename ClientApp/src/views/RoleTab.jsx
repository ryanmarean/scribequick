import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row } from 'reactstrap';
import RoleCard from '../components/RoleCard';

const RoleTab = (props) => {

    const { roleId, setRoleId } = props;

    const [rolesList, setRolesList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/ClientApp/ScribeQuick/GetRoles')
            .then(res => setRolesList(res.data))
            .catch(err => console.log.err);
    },[])

    return (
        <Container>
            <Row>
                {
                    rolesList.map((role, i) => 
                        <RoleCard
                            key={i}
                            id = {role.roleId}
                            name={role.name}
                            setRoleId={setRoleId}
                            />
                    )
                }
            </Row>
        </Container>
    )
}

export default RoleTab;