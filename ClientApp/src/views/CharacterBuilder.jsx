import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
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

    const [charInfo, setCharInfo] = useState({
        name: "",
    });
    const updateCharInfo = (keyword, value) => {
        setCharInfo({...setCharInfo, [keyword]: value});
    }

    const [attrPoints, setAttrPoints] = useState(18);
    const [charAttrs, setCharAttrs] = useState({
        meleeProficiency: 1,
        rangedProficiency: 1,
        speed: 2,
        agility: 1,
        strength: 1,
        resilience: 1,
        intelligence: 1,
        wisdom: 1,
        charisma: 1,
        faith: 2
    });
    const updateCharAttrs = (keyword, value) => {
        setCharAttrs({...charAttrs, [keyword]: value});
    }
    const subtractAttrPoints = () => {
        setAttrPoints(attrPoints - 1);
    }
    const addAttrPoints = () => {
        setAttrPoints(attrPoints + 1);
    }

    const [skillPoints, setSkillPoints] = useState(18);
    const [charSkills, setCharSkills] = useState({
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
        healing: 0
    });
    const updateCharSkills = (keyword, value) => {
        setCharSkills({...charSkills, [keyword]: value});
    }
    const subtractSkillPoints = () => {
        setSkillPoints(skillPoints - 1);
    }
    const addSkillPoints = () => {
        setSkillPoints(skillPoints + 1);
    }

    const [deityId, setDeityId] = useState("");
    const [roleId, setRoleId] = useState("");
    const [powerIds, setPowerIds] = useState([]);

    const [tabValue, setTabValue] = useState(0);

    const changeTabHandler = (e, newValue) => {
        setTabValue(newValue);
    }

    return(
        <div>
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
                    charInfo={charInfo}
                    updateCharInfo={updateCharInfo}
                />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <DeityTab
                    deityId={deityId}
                    setDeityId={setDeityId}
                />
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
                <RoleTab
                    roleId={roleId}
                    setRoleId={setRoleId}
                />
            </TabPanel>
            <TabPanel value={tabValue} index={3}>
                <AttrTab
                    charAttrs={charAttrs}
                    updateCharAttrs={updateCharAttrs}
                    attrPoints={attrPoints}
                    subtractAttrPoints={subtractAttrPoints}
                    addAttrPoints={addAttrPoints}
                />
            </TabPanel>
            <TabPanel value={tabValue} index={4}>
                <SkillsTab
                    charSkills={charSkills}
                    updateCharSkills={updateCharSkills}
                    skillPoints={skillPoints}
                    subtractSkillPoints={subtractSkillPoints}
                    addSkillPoints={addSkillPoints}
                />
            </TabPanel>
            <TabPanel value={tabValue} index={5}>
                <PowerTab
                    deityId={deityId}
                    roleId={roleId}
                    powerIds={powerIds}
                    setPowerIds={setPowerIds}
                />
            </TabPanel>
            <TabPanel value={tabValue} index={6}>
                <ConfirmTab
                    path='/confirm'
                    charInfo={charInfo}
                    deityId={deityId}
                    roleId={roleId}
                    charAttrs={charAttrs}
                    charSkills={charSkills}
                    powerIds={powerIds}
                />
            </TabPanel>
        </div>
    );
}

export default CharacterBuilder;