module.exports = (sequelize, Sequelize) => {
  const Dosen = sequelize.define("dosen", {
    nip_dosen: {
      type: Sequelize.BIGINT
    },
    nama_dosen: {
      type: Sequelize.STRING
    },
    alamat_dosen: {
      type: Sequelize.STRING
    },
    status_dosen: {
      type: Sequelize.TINYINT
    }
  });
  return Dosen;
};