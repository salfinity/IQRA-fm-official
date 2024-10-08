const URL = `${process.env.NEXT_PUBLIC_API_URL}/phones`;

const getPhones = async () => {
  const res = await fetch(URL);

  return res.json();
};

export default getPhones;
