import { FC } from 'react';
import { EquipmentAudit } from '../../types';
import {
  DateElement,
  DateLinkElement,
  ResultBlock,
  ResultBlockHead,
  ResultBlockTitle,
  StatusElement,
  TableBlock,
  TableColumn,
  TableRow,
  TitleColumn,
} from '../style';

interface TestHistoryProps {
  audits: EquipmentAudit[];
}

const TestHistory: FC<TestHistoryProps> = ({ audits }) => {
  return (
    <ResultBlock>
      <ResultBlockHead isFlex={false}>
        <ResultBlockTitle className="result_block-title">Checking History</ResultBlockTitle>
        <div className="page-show_block">
          <div className="page-show_item show-js"></div>
        </div>
      </ResultBlockHead>

      <TableBlock className="table_block" id="tableBody">
        <TableRow isHeader={true}>
          <TableColumn>
            <TitleColumn className="title-column">
              <span>Checking Date</span>
              <i></i>
            </TitleColumn>
          </TableColumn>
          <TableColumn>
            <TitleColumn className="title-column">
              <span>Next Checking Date</span>
              <i></i>
            </TitleColumn>
          </TableColumn>
          <TableColumn>
            <TitleColumn className="title-column">
              <span>Status</span>
            </TitleColumn>
          </TableColumn>
        </TableRow>
        {audits.map((audit, index) => (
          <TableRow key={`${index}_audit`} isHeader={false}>
            <TableColumn>
              <DateLinkElement className="date-link_elem">{new Date(audit.auditDate).toLocaleDateString()}</DateLinkElement>
            </TableColumn>
            <TableColumn>
              <DateElement className="date_elem">{new Date(audit.nextAuditDate).toLocaleDateString()}</DateElement>
            </TableColumn>
            <TableColumn>
              <StatusElement status={`${audit.passed ? "done" : 'er'}`}>{audit.passed ? 'Bestanden' : 'Durchgefallen'}</StatusElement>
            </TableColumn>
          </TableRow>
        ))}
      </TableBlock>
    </ResultBlock>
  );
};

export default TestHistory;
