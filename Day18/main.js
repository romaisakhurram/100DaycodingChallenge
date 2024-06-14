//Day 18
//Q52
// set a detail of mobilephone
var smartPhone = {
    Make: "Infinix",
    Model: "Hot 10",
    spec: {
        SizeScreen: "10.5 inches",
        BatteryTiminig: "18 hours",
        Storage: "8 GB"
    }
};
console.log(smartPhone);
//Q53
var developerSkills = {
    languages: ["Phyton", "Javascript", "Typescript"],
    frameWork: ["React", "Angular", "Vaue"],
    tools: ["Git", "Webpack", "Docor"]
};
var languages = developerSkills.languages, frameWork = developerSkills.frameWork, tools = developerSkills.tools;
console.log("Languages : ".concat(languages[0], " , Frame Work : ").concat(frameWork[0], " , Tools : ").concat(tools[0]));
//Q54
function CreateObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var user_preference = CreateObjectWithDynamicKey("colour", "black");
console.log(user_preference);
