import React, { useState } from 'react';
import { Router } from 'react-router';

const CharacterBuilder = (props) => {

    const [charInfo, setCharInfo] = useState({

    });

    const [charAttrs, setCharAttrs] = useState({
    });

    const [charSkills, setCharSkills] = useState({

    });

    const [deityId, setDeityId] = useState("");
    const [roleId, setRoleId] = useState("");
    const [powerIds, setPowerIds] = useState([]);

    return(
        <Router>
            <BasicTab 
                path='/basic'
                charInfo={charInfo}
                />
            <DeityTab
                path='/deity'
                deityId={deityId}
                />
            <RoleTab
                path='/role'
                roleId={roleId}
                />
            <AttrTab
                path='/attr'
                charAttrs={charAttrs}
                />
            <SkillsTab
                path='/skills'
                charSkills={charSkills}
                />
            <PowersTab
                path='/powers'
                powerIds={powerIds}
                />
            <ConfirmTab
                path='/confirm'
                charInfo={charInfo}
                deityId={deityId}
                roleId={roleId}
                charAttrs={charAttrs}
                charSkills={charSkills}
                powerIds={powerIds}
                />
        </Router>
    );
}

export default CharacterBuilder;