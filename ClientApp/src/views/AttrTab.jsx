import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import StatInput from '../components/StatInput';

const AttrTab = (props) => {

    const {charAttrs, updateCharAttrs, attrPoints, subtractAttrPoints, addAttrPoints} = props;

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
                        keywordValue={charAttrs.meleeProficiency}
                        minValue={1}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharAttrs}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Ranged Proficiency</h2>
                    <StatInput
                        keyword="rangedProficiency"
                        keywordValue={charAttrs.rangedProficiency}
                        minValue={1}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharAttrs}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Speed</h2>
                    <StatInput
                        keyword="speed"
                        keywordValue={charAttrs.speed}
                        minValue={2}
                        maxValue={5}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharAttrs}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Agility</h2>
                    <StatInput
                        keyword="agility"
                        keywordValue={charAttrs.agility}
                        minValue={1}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharAttrs}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Strength</h2>
                    <StatInput
                        keyword="strength"
                        keywordValue={charAttrs.strength}
                        minValue={1}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharAttrs}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Resilience</h2>
                    <StatInput
                        keyword="resilience"
                        keywordValue={charAttrs.resilience}
                        minValue={1}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharAttrs}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Intelligence</h2>
                    <StatInput
                        keyword="intelligence"
                        keywordValue={charAttrs.intelligence}
                        minValue={1}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharAttrs}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Wisdom</h2>
                    <StatInput
                        keyword="wisdom"
                        keywordValue={charAttrs.wisdom}
                        minValue={1}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharAttrs}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Charisma</h2>
                    <StatInput
                        keyword="charisma"
                        keywordValue={charAttrs.charisma}
                        minValue={1}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharAttrs}
                        />
                </Col>
                <Col xs="auto">
                    <h2>Faith</h2>
                    <StatInput
                        keyword="faith"
                        keywordValue={charAttrs.faith}
                        minValue={2}
                        maxValue={4}
                        subtractPoints={subtractAttrPoints}
                        addPoints={addAttrPoints}
                        pointsRemain={pointsRemain}
                        updateStats={updateCharAttrs}
                        />
                </Col>
            </Row>
        </Container>
    );
}

export default AttrTab;