import { Analyzer, MatchData, OutputTarget } from './types';

export class Summary {
  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);

    this.outputTarget.print(report);
  }
}
