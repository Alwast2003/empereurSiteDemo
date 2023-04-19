import { FC, useState } from 'react';
import {
  CloseButton,
  Modal,
  ModalContent,
  ResultBlock,
  ResultBlockBody,
  ResultBlockHead,
  ResultBlockTitle,
  ResultLine,
  ResultName,
  ResultText,
} from '../style';

interface CompanyInfoProps {
  id: string;
  clientName: string;
}

const CompanyInfo: FC<CompanyInfoProps> = ({ id, clientName }) => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const sendReport = () => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('description', description);

    fetch('https://marketing-prod-crm.zubi.gmbh/api/admin/report/', {
      method: 'POST',
      body: formData,
    }).catch(() => alert('Vielen Dank für Ihre Meldung. Wir werden uns darum kümmern.'));

    setIsVisibleModal(false);
  };

  return (
    <ResultBlock>
      <ResultBlockHead isFlex={false}>
        <ResultBlockTitle style={{ display: 'inline' }}>{id}</ResultBlockTitle>
        <button style={{ float: 'right' }} onClick={() => setIsVisibleModal(true)}>
          Prüfling melden
        </button>
        <ResultBlockTitle>{clientName}</ResultBlockTitle>
      </ResultBlockHead>
      <ResultBlockBody>
        {/* <ResultLine>
          <ResultName>Assetdetail. Assettype</ResultName>
          <ResultText>Mehrfachsteckdose</ResultText>
        </ResultLine>
        <ResultLine>
          <ResultName>Assetdetail. Manufacturer</ResultName>
          <ResultText>Unbekannt</ResultText>
        </ResultLine>
        <ResultLine>
          <ResultName>Assetdetail. Assetlocation</ResultName>
          <ResultText>Köln Gebäude 201 1.OG Raum 14</ResultText>
        </ResultLine>
        <ResultLine>
          <ResultName>Assetdetail. Operator</ResultName>
          <ResultText>
            DWK Drahtwerk Köln GmbH
            <br />
            Schanzenstr. 40
            <br />
            51063 Köln
          </ResultText>
        </ResultLine> */}
      </ResultBlockBody>
      {isVisibleModal && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={() => setIsVisibleModal(false)}>&times;</CloseButton>
            <p>
              <b>Ihr Name</b>
            </p>
            <p>
              <input id="reporter" type="text" width="50%" onChange={(e) => setName(e.target.value)} />
            </p>
            <p>
              <b>Beschreiben Sie den Fehler</b>
            </p>
            <p>
              <textarea
                rows={10}
                style={{ width: '100%' }}
                name="text"
                onChange={(e) => setDescription(e.target.value)}
              />
            </p>
            <button disabled={name.trim() === '' || description.trim() === ''} onClick={sendReport} style={{ width: '40%' }}>
              Absenden
            </button>
          </ModalContent>
        </Modal>
      )}
    </ResultBlock>
  );
};

export default CompanyInfo;
