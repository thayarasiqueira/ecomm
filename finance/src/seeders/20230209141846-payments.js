module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('Payments', [
    {
      valor: 8200.10,
      nome: 'Ada Lovelace',
      cartao: '4551688656769426',
      expiracao_cartao: '2025-01',
      cvv: '280',
      status: 'CRIADO',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      valor: 250.28,
      nome: 'Marie Curie',
      cartao: '4924015461030143',
      expiracao_cartao: '2023-10',
      cvv: '476',
      status: 'CRIADO',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('Payments', null, {}),
};
