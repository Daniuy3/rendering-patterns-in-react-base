interface DataItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface Props {
  data: DataItem[];
}

export const DataPresenter = ( { data } : Props) => {

  return (
    <>
    {
      data.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        );
      })
    }
    </>
  );
};
