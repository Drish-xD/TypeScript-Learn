enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

type MatchData = [Date, string, string, number, number, MatchResult, string];

interface Analyzer {
  run(match: MatchData[]): string;
}

interface OutputTarget {
  print(report: string): void;
}
export { Analyzer, MatchData, MatchResult, OutputTarget };

