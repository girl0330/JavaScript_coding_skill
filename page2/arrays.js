const team = ['Joe', 'Dyan', 'Bea', 'Theo'];
function alphabetizeTeam(team) {
  return [...team].sort();
}

const staff = [
  {
    name: 'Wesley',
    position: 'musician',
  },
  {
    name: 'Davis',
    position: 'engineer',
  },
];

function getMusician(staff) {
  return (musician = staff.filter((member) => member.position === 'musician'));
}

// console.log(getMusician(staff));

const game1 = {
  player: 'Jim Jonas',
  hits: 2,
  runs: 1,
  errors: 0,
};

const game2 = {
  player: 'Jim Jonas',
  hits: 3,
  runs: 0,
  errors: 1,
};

const total = {};

const stats = Object.keys(game1); //데이터 타입은 배열
for (let i = 0; i < stats.length; i++) {
  const stat = stats[i];
  if (stat !== 'player') {
    total[stat] = game1[stat] + game2[stat];
  }
}
