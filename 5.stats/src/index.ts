import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResults';

const file = new MatchReader('./data/football.csv');
file.read();

let manUnitedWins = 0;

for (let match of file.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United Won ${manUnitedWins} games`);
