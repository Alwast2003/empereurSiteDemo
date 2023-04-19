import { FC } from 'react';
import { EquipmentAudit } from '../../types';
import {
  ResultBlock,
  ResultBlockBody,
  ResultBlockCheck,
  ResultBlockHead,
  ResultBlockTitle,
  ResultLine,
  ResultName,
  ResultText,
} from '../style';

interface TestResultsProps {
  equipmentAudit: EquipmentAudit;
}

const TestResults: FC<TestResultsProps> = ({ equipmentAudit }) => {
  return (
    <ResultBlock>
      <ResultBlockHead isFlex={false}>
        <ResultBlockTitle>Prüfergebnis</ResultBlockTitle>
        <ResultBlockCheck isPassed={equipmentAudit.passed}>{equipmentAudit.passed ? 'Bestanden' : 'Durchgefallen'}</ResultBlockCheck>
      </ResultBlockHead>
      <ResultBlockBody>
        <ResultLine>
          <ResultName>Prüfdatum</ResultName>
          <ResultText>{new Date(equipmentAudit.auditDate).toLocaleDateString()}</ResultText>
        </ResultLine>
        <ResultLine>
          <ResultName>Nächste Prüfung</ResultName>
          <ResultText>{new Date(equipmentAudit.nextAuditDate).toLocaleDateString()}</ResultText>
        </ResultLine>
        <ResultLine>
          <ResultName>Prüfvorschrift</ResultName>
          <ResultText>{equipmentAudit.standard}</ResultText>
        </ResultLine>
        <ResultLine>
          <ResultName>Prüfdienstleister</ResultName>
          <ResultText>
            {equipmentAudit.values.map((v, index) => {
              return (
                <div key={`${index}_value`}>
                  <ResultText >{v.name}</ResultText> {v.isImage && <img src={v.values[0]} alt="Prüfdienstleister"/>}
                </div>
              );
            })}
          </ResultText>
        </ResultLine>
      </ResultBlockBody>
    </ResultBlock>
  );
};

export default TestResults;
