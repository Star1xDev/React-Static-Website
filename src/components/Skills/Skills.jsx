import React, { useState } from 'react';
import "./Skills.css"
import SkillCard from './SkillCard/SkillCard';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';
import { SKILLS } from '../../utils/data';

const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectedSkill = (data) => {
        setSelectedSkill(data);
    }


    return (
       <section className="skills-container">
        <h3>Technical Proficiency</h3>

        <div className="skills-content">
            <div className="skills">
                {SKILLS.map((item) => (
                    <SkillCard key={item.title} 
                    title={item.title}
                    iconUrl={item.icon}
                    isActive={selectedSkill.title === item.title}
                    onClick={() => {handleSelectedSkill(item)}}></SkillCard>
                ))}
            </div>
            <div className="skills-info">
                <SkillsInfoCard heading={selectedSkill.title}
                skills={selectedSkill.skills}></SkillsInfoCard>
            </div>
        </div>
       </section>
    );
}

export default Skills;
