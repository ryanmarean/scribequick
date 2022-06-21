import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import StatInput from './StatInput';

const SkillsTab = (props) => {

    const {champion, updateChampion, skillPoints, subtractSkillPoints, addSkillPoints} = props;

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
                        keywordValue={champion.meleeWeapons}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Ranged Weapons</h2>
                    <StatInput
                        keyword="rangedWeapons"
                        keywordValue={champion.rangedWeapons}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Traps</h2>
                    <StatInput
                        keyword="traps"
                        keywordValue={champion.traps}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Block</h2>
                    <StatInput
                        keyword="block"
                        keywordValue={champion.block}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Dodge</h2>
                    <StatInput
                        keyword="dodge"
                        keywordValue={champion.dodge}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Stealth</h2>
                    <StatInput
                        keyword="stealth"
                        keywordValue={champion.stealth}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Athletics</h2>
                    <StatInput
                        keyword="athletics"
                        keywordValue={champion.athletics}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Wrestle</h2>
                    <StatInput
                        keyword="wrestle"
                        keywordValue={champion.wrestle}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Survival</h2>
                    <StatInput
                        keyword="survival"
                        keywordValue={champion.survival}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Conjuration</h2>
                    <StatInput
                        keyword="conjuration"
                        keywordValue={champion.conjuration}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Craft Item</h2>
                    <StatInput
                        keyword="craftItem"
                        keywordValue={champion.craftItem}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Knowledge</h2>
                    <StatInput
                        keyword="knowledge"
                        keywordValue={champion.knowledge}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Sorcery</h2>
                    <StatInput
                        keyword="sorcery"
                        keywordValue={champion.sorcery}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Perception</h2>
                    <StatInput
                        keyword="perception"
                        keywordValue={champion.perception}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Leadership</h2>
                    <StatInput
                        keyword="leadership"
                        keywordValue={champion.leadership}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Divination</h2>
                    <StatInput
                        keyword="Colination"
                        keywordValue={champion.divination}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Willpower</h2>
                    <StatInput
                        keyword="willpower"
                        keywordValue={champion.willpower}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Persuasion</h2>
                    <StatInput
                        keyword="persuasion"
                        keywordValue={champion.persuasion}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Seduction</h2>
                    <StatInput
                        keyword="seduction"
                        keywordValue={champion.seduction}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Intimidation</h2>
                    <StatInput
                        keyword="intimidation"
                        keywordValue={champion.intimidation}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Disguise</h2>
                    <StatInput
                        keyword="disguise"
                        keywordValue={champion.disguise}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Animals</h2>
                    <StatInput
                        keyword="animals"
                        keywordValue={champion.animals}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Barter</h2>
                    <StatInput
                        keyword="barter"
                        keywordValue={champion.barter}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Social Posturing</h2>
                    <StatInput
                        keyword="socialPosturing"
                        keywordValue={champion.socialPosturing}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Invocation</h2>
                    <StatInput
                        keyword="invocation"
                        keywordValue={champion.invocation}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Healing</h2>
                    <StatInput
                        keyword="healing"
                        keywordValue={champion.healing}
                        minValue={0}
                        maxValue={2}
                        subtractPoints={subtractSkillPoints}
                        addPoints={addSkillPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
            </Row>
        </Container>
    )
}

export default SkillsTab;