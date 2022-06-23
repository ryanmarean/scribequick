import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';
import Button from '@material-ui/core/Button';

import * as Realm from 'realm-web';
const app = new Realm.App({ id: process.env.REACT_APP_REALM_APP_ID });
const { BSON: { ObjectId }, } = Realm;
const collection = app.currentUser.mongoClient('ScribeQuickCluster').db('ScribeQuickData').collection('champions');

const ConfirmTab = (props) => {

    const { champion } = props;

    const confirmChampion = async e => {
        await collection.insertOne(champion)
        .then(res => alert(res.data))
        .catch(err => alert(err))
    };

    return (
        <Container>
            <Row>
                <h2>Review your Champion, then confirm below.</h2>
            </Row>
            <Row>
                <h3>Champion Name: {champion.name}</h3>
                <h3>Player Name: {champion.playerName}</h3>
            </Row>
            <Row>
                <h3 className="col">Deity: {champion.deity.name}</h3>
                <h3 className="col">Role: {champion.role.name}</h3>
            </Row>
                <h3>Attributes:</h3>
            <Row>
                <Col>Melee Proficiency: {champion.meleeProficiency}</Col>
                <Col>Ranged Proficiency: {champion.rangedProficiency}</Col>
                <Col>Speed: {champion.speed}</Col>
                <Col>Agility: {champion.agility}</Col>
                <Col>Strength: {champion.strength}</Col>
                <Col>Resilience: {champion.resilience}</Col>
                <Col>Intelligence: {champion.intelligence}</Col>
                <Col>Wisdom: {champion.wisdom}</Col>
                <Col>Charisma: {champion.charisma}</Col>
                <Col>Faith: {champion.faith}</Col>
            </Row>
                <h3>Skills:</h3>
            <Row>
                <Col>Melee Weapons: {champion.meleeWeapons}</Col>
                <Col>Ranged Weapons: {champion.rangedWeapons}</Col>
                <Col>Traps: {champion.traps}</Col>
                <Col>Block: {champion.block}</Col>
                <Col>Dodge: {champion.dodge}</Col>
                <Col>Stealth: {champion.stealth}</Col>
                <Col>Climbing: {champion.climbing}</Col>
                <Col>Wrestle: {champion.wrestle}</Col>
                <Col>Survival: {champion.survival}</Col>
                <Col>Conjuration: {champion.conjuration}</Col>
                <Col>Craft Item: {champion.craftItem}</Col>
                <Col>Knowledge: {champion.knowledge}</Col>
                <Col>Sorcery: {champion.sorcery}</Col>
                <Col>Perception: {champion.perception}</Col>
                <Col>Leadership: {champion.leadership}</Col>
                <Col>Divination: {champion.divination}</Col>
                <Col>Willpower: {champion.willpower}</Col>
                <Col>Persuasion: {champion.persuasion}</Col>
                <Col>Seduction: {champion.seduction}</Col>
                <Col>Intimidation: {champion.intimidation}</Col>
                <Col>Disguise: {champion.disguise}</Col>
                <Col>Animals: {champion.animals}</Col>
                <Col>Barter: {champion.barter}</Col>
                <Col>Social Posturing: {champion.socialPosturing}</Col>
                <Col>Invocation: {champion.invocation}</Col>
                <Col>Healing: {champion.healing}</Col>
            </Row>
                <h3>Chosen Powers:</h3>
            <Row>
                <Col>Divine Power: {champion.chosenPowers.deityPower.name}</Col>
                <Col>Role Power: {champion.chosenPowers.rolePower.name}</Col>
            </Row>
            <Button variant="contained" color="secondary" onClick={e => confirmChampion(e)}>Confirm</Button>
        </Container>
    )
}

export default ConfirmTab;