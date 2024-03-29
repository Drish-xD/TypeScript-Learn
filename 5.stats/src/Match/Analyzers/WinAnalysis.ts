import { Analyzer, MatchData, MatchResult } from '../types';

export class WinsAnalysis implements Analyzer {
  constructor(private team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }

    return `${this.team} Won ${wins} games`;
  }
}
