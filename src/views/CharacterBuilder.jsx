import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Container, Row, Col } from 'reactstrap';

import BasicTab from './BasicTab';
import DeityTab from './DeityTab';
import RoleTab from './RoleTab';
import AttrTab from './AttrTab';
import SkillsTab from './SkillsTab';
import PowerTab from './PowerTab';
import ConfirmTab from './ConfirmTab';


const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div {...other}>
            {value === index && <Box p={7}>{children}</Box>}
        </div>
    );
}

const CharacterBuilder = (props) => {

    const [champion, setChampion] = useState({
        name: "",
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
        climbing: 0,
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
        userId: 1,
        roleId: 0,
        deityId: 0,
        chosenPowers: [0,0]
    })

    //Function Definitions
    const updateChampion = (keyword, value) => {
        setChampion({...champion, [keyword]: value});
    }

    const [attrPoints, setAttrPoints] = useState(18);
    const subtractAttrPoints = () => {
        setAttrPoints(attrPoints - 1);
    }
    const addAttrPoints = () => {
        setAttrPoints(attrPoints + 1);
    }

    const [skillPoints, setSkillPoints] = useState(18);
    const subtractSkillPoints = () => {
        setSkillPoints(skillPoints - 1);
    }
    const addSkillPoints = () => {
        setSkillPoints(skillPoints + 1);
    }

    const [deityPowerId, setDeityPowerId] = useState("");
    const [rolePowerId, setRolePowerId] = useState("");
    
    const [tabValue, setTabValue] = useState(0);
    const changeTabHandler = (e, newValue) => {
        setTabValue(newValue);
    }

    const addPower = (powerId, isDivine) => {
        setChampion((prevState) => {
            if (isDivine) {
                prevState.chosenPowers[0] = powerId;
            } else {
                prevState.chosenPowers[1] = powerId;
            }
            console.log({...prevState});
            return ({...prevState});
        });
    }

    return(
        <Container>
            <Row>
                <Col>Champion Name: {champion.name}</Col>
                <Col>Champion Deity: {champion.deityId}</Col>
                <Col>Champion Role: {champion.roleId}</Col>
                <Col>Deity Power: {deityPowerId}</Col>
                <Col>Role Power: {rolePowerId}</Col>
            </Row>
            <AppBar position='static'>
                <Tabs value={tabValue} onChange={changeTabHandler}>
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
                    updateChampion={updateChampion}
                />
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
                <RoleTab
                    updateChampion={updateChampion}
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
                    deityId={champion.deityId}
                    roleId={champion.roleId}
                    deityPowerId={deityPowerId}
                    setDeityPowerId={setDeityPowerId}
                    rolePowerId={rolePowerId}
                    setRolePowerId={setRolePowerId}
                    addPower = {addPower}
                />
            </TabPanel>
            <TabPanel value={tabValue} index={6}>
                <ConfirmTab
                    path='/confirm'
                    champion={champion}
                    deityPowerId={deityPowerId}
                    rolePowerId={rolePowerId}
                />
            </TabPanel>
        </Container>
    );
}

export default CharacterBuilder;