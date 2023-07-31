import { FileReader } from './FileReader';
import { MatchResult } from './MatchResults';
import { stringToDate } from './utils';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends FileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      stringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}