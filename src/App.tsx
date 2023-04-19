import './style.css';
import CompanyInfo from './components/companyInfo/companyInfo';
import Documents from './components/documents/documents';
import TestHistory from './components/TestHistory';
import TestResults from './components/TestResults';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DataAboutAudits } from './types';
import { fetchEquipmentData } from './helpers/FetchHelper';
import { urlsGetData } from './static/urls';

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [dataAboutAudits, setDataAboutAdits] = useState<DataAboutAudits>();

  useEffect(() => {
    if (isLoading && dataAboutAudits === undefined) {
      const searchParams = new URLSearchParams(location.search);
      const formData = new FormData();
      const id = searchParams.get('id');

      if (id !== null) {
        formData.append('id', id);
        console.log(1);
        Promise.all(urlsGetData.map((url) => fetchEquipmentData(url, formData)))
          .then((queries) => {
            const data = queries.find((el) => el !== null);

            // const newAudits =
            // (data as DataAboutAudits).equipmentAudits = newAudits;

            setDataAboutAdits(data as DataAboutAudits);
          })
          .catch((e) => {
            console.error('Error fetching', e.message);
          })
          .finally(() => setIsLoading(false));
      } else {
        setIsError(true);
        setIsLoading(false);
      }
    }
  }, [dataAboutAudits, isLoading, location.search]);

  return (
    <>
      {!isLoading ? (
        <div className="wrapper" id="wrapper">
          <main className="main">
            <section className="section">
              <div className="container">
                <div className="row">
                  {isError && <h1>ERROR!</h1>}
                  {!isError && dataAboutAudits !== undefined && (
                    <div className="col-lg-10 col-lg-offset-1 col-md-12 col-md-offset-0 col-xs-12 col-xs-offset-0 ">
                      <CompanyInfo id={dataAboutAudits.id} clientName={dataAboutAudits.clientName} />

                      {dataAboutAudits.equipmentAudits
                        .filter(
                          (e) =>
                            e.equipmentAuditId ===
                            dataAboutAudits.equipmentAudits.reduce((accumulator: any, currentValue) => {
                              if (
                                currentValue.standard !== '' &&
                                currentValue.passed &&
                                (!accumulator[currentValue.standard] ||
                                  accumulator[currentValue.standard] < currentValue.auditDate)
                              ) {
                                accumulator[currentValue.standard] = {
                                  auditDate: currentValue.auditDate,
                                  equipmentAuditId: currentValue.equipmentAuditId,
                                };
                              }
                              return accumulator;
                            }, {})[e.standard].equipmentAuditId,
                        )
                        .map((audit, index) => (
                          <TestResults key={`${index}_audit`} equipmentAudit={audit} />
                        ))}

                      <Documents files={dataAboutAudits.files} barcodeId={dataAboutAudits.id} />
                      <TestHistory audits={dataAboutAudits.equipmentAudits} />
                    </div>
                  )}
                </div>
              </div>
            </section>
          </main>
        </div>
      ) : (
        <img src="img/load.gif" style={{ display: 'block', margin: 'auto' }} />
      )}
    </>
  );
};

export default App;
