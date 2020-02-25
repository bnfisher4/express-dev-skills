module.exports = {
    getAll,
    getOne,
    deleteOne,
    create
};


const skills = [
    {title: 'Javascript', level: 2},
    {title: 'CSS', level: 2},
    {title: 'Express', level: 1},
    {title: 'Node.js', level: 1},
    {title: 'React', level: 1}
];

function create(id) {
    skills.push(id);
}

function deleteOne(id) {
    skills.splice(id, 1);
}

// will return all of the above skills
function getAll() {
    return skills;
}

function getOne(id) {
    const skillResult = skills[id];
    return skillResult;
}

const results = getAll();
console.log('results ', results);