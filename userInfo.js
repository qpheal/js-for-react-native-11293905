//Creating User Profile
function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        throw new Error("Both arrays must have the same length.");
    }
    
    let profiles = [];
    for (let i = 0; i < names.length; i++) {
        let profile = {
            originalName: names[i],
            modifiedName: modifiedNames[i],
            id: i + 1 
        };
        profiles.push(profile);
    }
    return profiles;
}

module.exports = {
    createUserProfiles
};