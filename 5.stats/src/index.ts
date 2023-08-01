import { MatchReader } from './Match/MatchReader';
import { Summary } from './Match/Summary';

const file = MatchReader.fromCSV('./data/football.csv');
file.load();

const report = Summary.consoleReport('Man United');
report.buildAndPrintReport(file.matches);

const htmlReport = Summary.genHTMLReport('Man United');
htmlReport.buildAndPrintReport(file.matches);
