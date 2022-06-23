import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Container, Row, Col } from 'reactstrap';

import BasicTab from '../components/characterBuilder/BasicTab';
import DeityTab from '../components/characterBuilder/DeityTab';
import RoleTab from '../components/characterBuilder/RoleTab';
import AttrTab from '../components/characterBuilder/AttrTab';
import SkillsTab from '../components/characterBuilder/SkillsTab';
import PowerTab from '../components/characterBuilder/PowerTab';
import ConfirmTab from '../components/characterBuilder/ConfirmTab';

//Tabs component
const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div {...other}>
            {value === index && <Box p={7}>{children}</Box>}
        </div>
    );
}

//Main Character Builder component
const CharacterBuilder = (props) => {

    const [champion, setChampion] = useState({
        name: "",
        playerName: "",
        // Attributes
        meleeProficiency: 0,
        rangedProficiency: 0,
        speed: 2,
        agility: 1,
        strength: 1,
        resilience: 1,
        intelligence: 1,
        wisdom: 1,
        charisma: 1,
        faith: 2,
        // Skills
        meleeWeapons: 0,
        rangedWeapons: 0,
        traps: 0,
        block: 0,
        dodge: 0,
        stealth: 0,
        athletics: 0,
        wrestle: 0,
        survival: 0,
        conjuration: 0,
        craftItem: 0,
        knowledge: 0,
        sorcery: 0,
        perception: 0,
        leadership: 0,
        divination: 0,
        willpower: 0,
        persuasion: 0,
        seduction: 0,
        intimidation: 0,
        disguise: 0,
        animals: 0,
        barter: 0,
        socialPosturing: 0,
        invocation: 0,
        healing: 0,
        // Role, Deity, Powers
        userId: 1,   //update to reflect current logged in user
        roleId: 0,
        role: {
            id: 0,
            name: ""
        },
        deityId: 0,
        deity: {
            id: 0,
            name: ""
        },
        chosenPowers: {
            deityPower: {
                id: 0,
                name: ""
            },
            rolePower: {
                id: 0,
                name: ""
            }
        }
    })

    //Function Definitions
    //Update Champion values by passing key-value pair
    const updateChampion = (keyword, value) => {
        setChampion({...champion, [keyword]: value});
    }
    //Update the chosen Champion Deity
    const updateChampionDeity = (deityId, deityName) => {
        setChampion({...champion, deity: { id: deityId, name: deityName }})
    }

    //Update the chosen Champion Role
    const updateChampionRole = (roleId, roleName) => {
        setChampion({...champion, role: { id: roleId, name: roleName }})
    }
    
    //Instantiates attribute points to spend and contains functions to add to and decrease from
    const [attrPoints, setAttrPoints] = useState(18);
    const subtractAttrPoints = () => {
        setAttrPoints(attrPoints - 1);
    }
    const addAttrPoints = () => {
        setAttrPoints(attrPoints + 1);
    }
    
    //Instantiates skill points to spend and contains functions to add to and decrease from
    const [skillPoints, setSkillPoints] = useState(18);
    const subtractSkillPoints = () => {
        setSkillPoints(skillPoints - 1);
    }
    const addSkillPoints = () => {
        setSkillPoints(skillPoints + 1);
    }
    
    //Controls Tabs component
    const [tabValue, setTabValue] = useState(0);
    const changeTabHandler = (e, newValue) => {
        setTabValue(newValue);
    }

    const addPower = (powerId, powerName, isDivine) => {
        setChampion((prevState) => {
            if (isDivine) {
                prevState.chosenPowers.deityPower.id = powerId;
                prevState.chosenPowers.deityPower.name = powerName;
            } else {
                prevState.chosenPowers.rolePower.id = powerId;
                prevState.chosenPowers.rolePower.name = powerName;
            }
            console.log({...prevState});
            return ({...prevState});
        });
    }

    return(
        <Container>
            <Row>
                <Col>Champion Name: {champion.name}</Col>
                <Col>Player Name: {champion.playerName}</Col>
                <Col>Chosen Deity: {champion.deity.name}</Col>
                <Col>Chosen Role: {champion.role.name}</Col>
                <Col>Deity Power: {champion.chosenPowers.deityPower.name}</Col>
                <Col>Role Power: {champion.chosenPowers.rolePower.name}</Col>
            </Row>
            <AppBar position='static'>
                <Tabs value={tabValue} onChange={changeTabHandler} variant="scrollable" scrollButtons="auto">
                    <Tab label="Basic Info" />
                    <Tab label="Choose Deity" />
                    <Tab label="Choose Role" />
                    <Tab label="Assign Attributes" />
                    <Tab label="Assign Skills" />
                    <Tab label="Choose Powers" />
                    <Tab label="Confirm & Create" />
                </Tabs>
            </AppBar>
            <TabPanel value={tabValue} index={0}>
                <BasicTab
                    champion={champion}
                    updateChampion={updateChampion}
                />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <DeityTab
                    updateChampion={updateChampionDeity}
                />
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
                <RoleTab
                    updateChampion={updateChampionRole}
                />
            </TabPanel>
            <TabPanel value={tabValue} index={3}>
                <AttrTab
                    champion={champion}
                    updateChampion={updateChampion}
                    attrPoints={attrPoints}
                    subtractAttrPoints={subtractAttrPoints}
                    addAttrPoints={addAttrPoints}
                />
            </TabPanel>
            <TabPanel value={tabValue} index={4}>
                <SkillsTab
                    champion={champion}
                    updateChampion={updateChampion}
                    skillPoints={skillPoints}
                    subtractSkillPoints={subtractSkillPoints}
                    addSkillPoints={addSkillPoints}
                />
            </TabPanel>
            <TabPanel value={tabValue} index={5}>
                <PowerTab
                    deityId={champion.deity.id}
                    roleId={champion.role.id}
                    addPower = {addPower}
                />
            </TabPanel>
            <TabPanel value={tabValue} index={6}>
                <ConfirmTab
                    path='/confirm'
                    champion={champion}
                />
            </TabPanel>
        </Container>
    );
}

export default CharacterBuilder;