import { FileReader } from './FileReader';
import { WinsAnalysis } from './Match/Analyzers/WinAnalysis';
import { MatchReader } from './Match/MatchReader';
import { HTMLReport } from './Match/Reports/HTMLReport';
import { Summary } from './Match/Summary';
import { ConsoleReport } from './Match/Reports/ConsoleReport';

const reader = new FileReader('./data/football.csv');

const file = new MatchReader(reader);
file.load();

const report = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
report.buildAndPrintReport(file.matches);

const htmlReport = new Summary(new WinsAnalysis('Man United'), new HTMLReport());
htmlReport.buildAndPrintReport(file.matches);
