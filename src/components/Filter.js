import { useEffect } from "react";

function Filter({setActiveHouse, activeHouse, setFiltered, item, activeGender, setActiveGender, activeSkill, setActiveSkill}) {
    useEffect(() => {
        var filtered = item;
        //House
        if (activeHouse !== "All") {
            filtered = item.filter((wizard) => wizard.house === activeHouse);
        }
        if (activeGender === "Female") {
            filtered = filtered.filter((wizard) => wizard.gender === "Female");
        } else if (activeGender === "Male") {
            filtered = filtered.filter((wizard) => wizard.gender === "Male");
        } 

        if (activeSkill !== "All") {
            filtered = filtered.filter((wizard) => wizard.skills === activeSkill);
        }
        setFiltered(filtered)
    }, [activeGender, activeHouse, activeSkill]);

    return (
        <div className="filter-container">
            <h3>Filter by House</h3>
            <button className={activeHouse === "All" ? "active" : ""} onClick={() => setActiveHouse("All")}>All</button>
            <button className={activeHouse === "Gryffindor" ? "gryffindor" : ""} onClick={() => setActiveHouse("Gryffindor")}>Gryffindor</button>
            <button className={activeHouse === "Hufflepuff" ? "hufflepuff" : ""} onClick={() => setActiveHouse("Hufflepuff")}>Hufflepuff</button>
            <button className={activeHouse === "Ravenclaw" ? "ravenclaw" : ""} onClick={() => setActiveHouse("Ravenclaw")}>Ravenclaw</button>
            <button className={activeHouse === "Slytherin" ? "slytherin" : ""} onClick={() => setActiveHouse("Slytherin")}>Slytherin</button>
            <h3>Filter By Gender</h3>
            <button className={activeGender === "All" ? "active" : ""} onClick={() => setActiveGender("All")}>All</button>
            <button className={activeGender === "Female" ? "active" : ""} onClick={() => setActiveGender("Female")}>Female</button>
            <button className={activeGender === "Male" ? "active" : ""} onClick={() => setActiveGender("Male")}>Male</button>
            <h3>Filter By Skill</h3>
            <button className={activeSkill === "All" ? "active" : ""} onClick={() => setActiveSkill("All")}>All</button>
            <button className={activeSkill === "Specialist" ? "active" : ""} onClick={() => setActiveSkill("Specialist")}>Specialist</button>
            <button className={activeSkill === "Fighter" ? "active" : ""} onClick={() => setActiveSkill("Fighter")}>Fighter</button>
            <button className={activeSkill === "Mage" ? "active" : ""} onClick={() => setActiveSkill("Mage")}>Mage</button>
            <button className={activeSkill === "Controller" ? "active" : ""} onClick={() => setActiveSkill("Controller")}>Controller</button>
            <button className={activeSkill === "Marksman" ? "active" : ""} onClick={() => setActiveSkill("Marksman")}>Marksman</button>
            <button className={activeSkill === "Slayer" ? "active" : ""} onClick={() => setActiveSkill("Slayer")}>Slayer</button>
        
        </div>
    ) 
}

export default Filter;