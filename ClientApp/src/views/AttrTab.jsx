import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import StatInput from '../components/StatInput';

const AttrTab = (props) => {

    const {champion, updateChampion, attrPoints, subtractAttrPoints, addAttrPoints} = props;

    const pointsRemain = () => {
        if (attrPoints >= 1) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <Container>
            <Row>
                <p>This is where you will assign Attributes to your Champion. Attributes represent physical and mental abilities that are a combination of your innate ability as well as some training.</p>
                <h1>Remaining Attribute Points: {attrPoints}</h1>
            </Row>
            <Row>
                <Col xs="auto">
                    <h2>Melee Proficiency</h2>
                    <StatInput
                        keyword="meleeProficiency"
                        keywordValue={champion.meleeProficiency}
                        minValue={0}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Ranged Proficiency</h2>
                    <StatInput
                        keyword="rangedProficiency"
                        keywordValue={champion.rangedProficiency}
                        minValue={0}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Speed</h2>
                    <StatInput
                        keyword="speed"
                        keywordValue={champion.speed}
                        minValue={2}
                        maxValue={5}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Agility</h2>
                    <StatInput
                        keyword="agility"
                        keywordValue={champion.agility}
                        minValue={1}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Strength</h2>
                    <StatInput
                        keyword="strength"
                        keywordValue={champion.strength}
                        minValue={1}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Resilience</h2>
                    <StatInput
                        keyword="resilience"
                        keywordValue={champion.resilience}
                        minValue={1}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Intelligence</h2>
                    <StatInput
                        keyword="intelligence"
                        keywordValue={champion.intelligence}
                        minValue={1}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Wisdom</h2>
                    <StatInput
                        keyword="wisdom"
                        keywordValue={champion.wisdom}
                        minValue={1}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Charisma</h2>
                    <StatInput
                        keyword="charisma"
                        keywordValue={champion.charisma}
                        minValue={1}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Faith</h2>
                    <StatInput
                        keyword="faith"
                        keywordValue={champion.faith}
                        minValue={2}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateChampion}
                        />
                </Col>
            </Row>
        </Container>
    );
}

export default AttrTab;