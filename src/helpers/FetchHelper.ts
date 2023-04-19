import { DataAboutAudits } from "../types";

export const fetchEquipmentData = (url: string, formData: FormData): Promise<DataAboutAudits> | Promise<string> => {
    return fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        return data;
      })
      .catch(() => {
        return null;
      });
  }