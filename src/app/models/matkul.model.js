module.exports = (sequelize, Sequelize) => {
  const Matkul = sequelize.define("matkul", {
    kode_matkul: {
      type: Sequelize.BIGINT
    },
    nama_matkul: {
      type: Sequelize.STRING
    },
    sks_matkul: {
      type: Sequelize.STRING
    }
  });
  return Matkul;
};