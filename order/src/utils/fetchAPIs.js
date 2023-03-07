import fetch from 'node-fetch';

const fetchAccount = async (id) => {
  const response = await fetch(`http://account:3002/accounts/${id}`);
  const data = await response.json();
  return data;
};

const fetchPayment = async (payload, id) => {
  const descricao = JSON.stringify(payload);
  const response = await fetch(`http://finance:3003/admin/payments/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      status: 'CONFIRMADO',
      descricao,
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  const content = await response.json();
  console.log(content);
};

export { fetchAccount, fetchPayment };
