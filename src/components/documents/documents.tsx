import { FC, useState } from 'react';
import { fetchEquipmentData } from '../../helpers/FetchHelper';
import { urlsGetFile } from '../../static/urls';
import { IFile } from '../../types';
import {
  DownloadAllButton,
  Modal,
  ModalContent,
  ResultBlock,
  ResultBlockBody,
  ResultBlockHead,
  ResultBlockImage,
  ResultBlockTitle,
  ResultLine,
  ResultName,
  ResultText,
} from '../style';

interface DocumentsProps {
  barcodeId: string;
  files: IFile[];
}

const Documents: FC<DocumentsProps> = ({ barcodeId, files }) => {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [fileId, setFileId] = useState<string>('');

  const downloadFile = () => {
    const formData = new FormData();
    formData.append('code', barcodeId);
    formData.append('fileId', fileId);
    formData.append('password', password);

    Promise.all(urlsGetFile.map((url) => fetchEquipmentData(url, formData)))
      .then((queries) => {
        const data = queries.find((el) => el !== null);
        if (data !== undefined) {
          const link = document.createElement('a');
          link.href = data as string;
          link.setAttribute('download', `Audit_${fileId}.pdf`);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      })
      .catch(() => {
        console.error('Error downloading');
      }).finally(() => setIsVisibleModal(false));
  };

  return (
    <ResultBlock>
      <ResultBlockHead isFlex={true}>
        <ResultBlockTitle>Dokumente</ResultBlockTitle>
        {/* <DownloadAllButton>Download all</DownloadAllButton> */}
      </ResultBlockHead>
      <ResultBlockBody>
        {files.map((f, index) => (
          <ResultLine key={`${index}_file`}>
            <ResultName>{f.fileName}</ResultName>
            <ResultText style={{ textAlign: 'end', color: '#03B25D' }}>
              <ResultBlockImage
                onClick={() => {
                  setFileId(f.fileId);
                  setIsVisibleModal(true);
                }}
              >
                Download
              </ResultBlockImage>
            </ResultText>
          </ResultLine>
        ))}
        {isVisibleModal && (
          <Modal>
            <ModalContent>
              <h1>Download Document</h1>
              <p>To download document, please enter the password in the field below</p>
              <p>
                <input type="text" width="50%" onChange={(e) => setPassword(e.target.value)} />
              </p>
              <button disabled={password.trim() === ''} onClick={downloadFile}>Download</button>
              <button onClick={() => setIsVisibleModal(false)}>Cancel</button>
            </ModalContent>
          </Modal>
        )}
      </ResultBlockBody>
    </ResultBlock>
  );
};

export default Documents;
