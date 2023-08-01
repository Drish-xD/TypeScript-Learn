import { WinsAnalysis } from './Analyzers/WinAnalysis';
import { ConsoleReport } from './Reports/ConsoleReport';
import { HTMLReport } from './Reports/HTMLReport';
import { Analyzer, MatchData, OutputTarget } from './types';

export class Summary {
  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}

  static genHTMLReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HTMLReport());
  }

  static consoleReport(team: string) {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }
  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);

    this.outputTarget.print(report);
  }
}
