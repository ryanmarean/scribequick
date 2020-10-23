import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import StatInput from '../components/StatInput';

const SkillsTab = (props) => {

    const {charSkills, updateCharSkills, skillPoints, subtractSkillPoints, addSkillPoints} = props;

    const pointsRemain = () => {
        if (skillPoints >= 1) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <Container>
            <Row>
                <p>This is where you will assign Skills to your Champion. Skills represent specific abilities that your Champion has acquired throughout their life, and especially while practicing their Role.</p>
                <h1>Remaining Skill Points: {skillPoints}</h1>
            </Row>
            <Row>
                <Col xs="auto">
                    <h2>Melee Weapons</h2>
                    <StatInput
                        keyword="meleeWeapons"
                        keywordValue={charSkills.meleeWeapons}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Ranged Weapons</h2>
                    <StatInput
                        keyword="rangedWeapons"
                        keywordValue={charSkills.rangedWeapons}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Traps</h2>
                    <StatInput
                        keyword="traps"
                        keywordValue={charSkills.traps}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Block</h2>
                    <StatInput
                        keyword="block"
                        keywordValue={charSkills.block}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Dodge</h2>
                    <StatInput
                        keyword="dodge"
                        keywordValue={charSkills.dodge}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Stealth</h2>
                    <StatInput
                        keyword="stealth"
                        keywordValue={charSkills.stealth}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Climbing</h2>
                    <StatInput
                        keyword="climbing"
                        keywordValue={charSkills.climbing}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Wrestle</h2>
                    <StatInput
                        keyword="wrestle"
                        keywordValue={charSkills.wrestle}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Survival</h2>
                    <StatInput
                        keyword="survival"
                        keywordValue={charSkills.survival}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Conjuration</h2>
                    <StatInput
                        keyword="conjuration"
                        keywordValue={charSkills.conjuration}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Craft Item</h2>
                    <StatInput
                        keyword="craftItem"
                        keywordValue={charSkills.craftItem}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Knowledge</h2>
                    <StatInput
                        keyword="knowledge"
                        keywordValue={charSkills.knowledge}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Sorcery</h2>
                    <StatInput
                        keyword="sorcery"
                        keywordValue={charSkills.sorcery}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Perception</h2>
                    <StatInput
                        keyword="perception"
                        keywordValue={charSkills.perception}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Leadership</h2>
                    <StatInput
                        keyword="leadership"
                        keywordValue={charSkills.leadership}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Divination</h2>
                    <StatInput
                        keyword="Colination"
                        keywordValue={charSkills.divination}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Willpower</h2>
                    <StatInput
                        keyword="willpower"
                        keywordValue={charSkills.willpower}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Persuasion</h2>
                    <StatInput
                        keyword="persuasion"
                        keywordValue={charSkills.persuasion}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Seduction</h2>
                    <StatInput
                        keyword="seduction"
                        keywordValue={charSkills.seduction}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Intimidation</h2>
                    <StatInput
                        keyword="intimidation"
                        keywordValue={charSkills.intimidation}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Disguise</h2>
                    <StatInput
                        keyword="disguise"
                        keywordValue={charSkills.disguise}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Animals</h2>
                    <StatInput
                        keyword="animals"
                        keywordValue={charSkills.animals}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Barter</h2>
                    <StatInput
                        keyword="barter"
                        keywordValue={charSkills.barter}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Social Posturing</h2>
                    <StatInput
                        keyword="socialPosturing"
                        keywordValue={charSkills.socialPosturing}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Invocation</h2>
                    <StatInput
                        keyword="invocation"
                        keywordValue={charSkills.invocation}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Healing</h2>
                    <StatInput
                        keyword="healing"
                        keywordValue={charSkills.healing}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharSkills}
                        />
                </Col>
            </Row>
        </Container>
    )
}

export default SkillsTab;