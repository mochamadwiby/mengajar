module.exports = (sequelize, Sequelize) => {
  const Mahasiswa = sequelize.define("mahasiswa", {
    nim_mahasiswa: {
      type: Sequelize.BIGINT
    },
    nama_mahasiswa: {
      type: Sequelize.STRING
    },
    alamat_mahasiswa: {
      type: Sequelize.STRING
    }
  });
  return Mahasiswa;
};