module.exports = (sequelize, Sequelize) => {
  const Jurusan = sequelize.define("jurusan", {
    kode_jurusan: {
      type: Sequelize.BIGINT
    },
    nama_jurusan: {
      type: Sequelize.STRING
    },
    jenjang_jurusan: {
      type: Sequelize.STRING
    }
  });
  return Jurusan;
};