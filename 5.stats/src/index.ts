import { FileReader } from './FileReader';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResults';

const reader = new FileReader('./data/football.csv');

const file = new MatchReader(reader);
file.load();

let manUnitedWins = 0;

for (let match of file.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United Won ${manUnitedWins} games`);
