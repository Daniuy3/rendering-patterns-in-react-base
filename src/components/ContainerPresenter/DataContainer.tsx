import { useEffect, useState } from 'react';
import mainData from '../../../public/data/data.json';
import { DataPresenter } from './DataPresenter';

interface DataItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const DataContainer = () => {

  const [ data, setData ] = useState<DataItem[]>([]);

  useEffect(() => {
    setData(mainData);
  },[])

  return (
    <div>
      <DataPresenter data={data} />
    </div>
  );
};
