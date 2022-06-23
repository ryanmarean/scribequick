import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import PowerCard from './PowerCard';

const PowerTab = (props) => {

    const { deityId, roleId, addPower } = props;

    //Fetch and populate powers list for deity-based powers
    const [deityPowersList, setDeityPowersList] = useState([]);
    useEffect(() => {
        axios.get('https://pantheonrpg.com/wp-json/wp/v2/divine_power?per_page=100')
            .then(res => {
                setDeityPowersList(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    //Fetch and populate powers list for role-based powers
    const [rolePowersList, setRolePowersList] = useState([]);
    useEffect(() => {
        axios.get('https://pantheonrpg.com/wp-json/wp/v2/role_power?per_page=100')
            .then(res => {
                setRolePowersList(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    //Check if powers match the selected deity/role Id
    const isDeityMatch = power => deityId === power.deity;
    const isRoleMatch = power => roleId === power.role;
    
    return (
        <Container>
            <Row>
                <h3>Deity Powers</h3>
            </Row>
            <Row>
                { 
                    deityPowersList.map((power, i) =>
                        isDeityMatch(power) &&
                        <PowerCard
                            key={i}
                            id={power.id}
                            powerRoleId={null}
                            powerDeityId={power.deity}
                            name={power.power_name}
                            desc={power.power_text}
                            isDivine={true}
                            actionType={power.action_type}
                            actionTypeSubtext={power.action_type_subtext}
                            skillTree={power.aspect}
                            tier={power.tier}
                            skillChallenge={power.skill_challenge}
                            challengeLevel={power.challenge_level}
                            duration={power.duration}
                            type={power.type}
                            maximumLevel={power.maximum_level}
                            chosenRoleId={roleId}
                            chosenDeityId={deityId}
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
                    rolePowersList.map((power, i) =>
                        isRoleMatch(power) &&
                        <PowerCard
                            key={i}
                            id={power.id}
                            powerRoleId={power.role}
                            powerDeityId={null}
                            name={power.power_name}
                            desc={power.power_text}
                            isDivine={false}
                            actionType={power.action_type}
                            actionTypeSubtext={power.action_type_subtext}
                            skillTree={power.aspect}
                            tier={power.tier}
                            skillChallenge={power.skill_challenge}
                            challengeLevel={power.challenge_level}
                            duration={power.duration}
                            type={power.type}
                            maximumLevel={power.maximum_level}
                            chosenRoleId={roleId}
                            chosenDeityId={deityId}
                            addPower={addPower}
                        />
                    )
                }
            </Row>
        </Container>
    )
}

export default PowerTab;