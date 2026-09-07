/**
 * Jalur menjadi Notaris — bahan halaman Pusat Karir.
 *
 * SUMBER: Pengumuman Direktorat Jenderal Administrasi Hukum Umum,
 * Kementerian Hukum Republik Indonesia, tanggal 25 November 2025, tentang
 * "Pendaftaran Pengangkatan dan Pindah Wilayah Jabatan Notaris secara Online
 * Tahun 2025", beserta peraturan yang dirujuknya.
 *
 * YANG SENGAJA TIDAK DIMUAT — jadwal siklus 2025 (registrasi 28 November 2025
 * sampai penerbitan SK 2 Februari 2026), batas tanggal lahir minimal
 * 25 November 1998, dan ketentuan calon notaris hanya boleh memilih Kategori
 * Daerah C. Ketiganya khusus siklus 2025 dan sudah lewat; menampilkannya di
 * halaman statis akan menyesatkan pembaca. Jadwal siklus berikutnya lebih tepat
 * diterbitkan sebagai Pengumuman bertanggal lewat dashboard admin.
 *
 * SIFAT HALAMAN: rangkuman, bukan rujukan resmi. Persyaratan dan tarif dapat
 * berubah mengikuti peraturan terbaru; rujukan resmi tetap ahu.go.id.
 */

export const sumberResmi = {
  nama: "Direktorat Jenderal Administrasi Hukum Umum, Kementerian Hukum RI",
  laman: "https://ahu.go.id/",
  dokumen:
    "Pengumuman Pendaftaran Pengangkatan dan Pindah Wilayah Jabatan Notaris " +
    "secara Online Tahun 2025, Jakarta, 25 November 2025",
};

export const angkaKunci = [
  { angka: "27", satuan: "tahun", label: "Usia minimal pengangkatan" },
  { angka: "24", satuan: "bulan", label: "Magang setelah lulus M.Kn." },
  { angka: "11", satuan: "berkas", label: "Dokumen yang dilampirkan" },
  { angka: "2", satuan: "bulan", label: "Batas pengucapan sumpah" },
];

export const pengantar =
  "Notaris diangkat dan diberhentikan oleh Menteri berdasarkan Pasal 2 Undang-Undang Nomor 30 " +
  "Tahun 2004 tentang Jabatan Notaris sebagaimana diubah dengan Undang-Undang Nomor 2 Tahun " +
  "2014. Lulus Magister Kenotariatan adalah langkah pertama, bukan langkah terakhir. Berikut " +
  "jalur yang ditempuh lulusan hingga resmi menjabat.";

/** Tiga prasyarat yang harus dipenuhi sebelum pendaftaran dibuka. */
export const prasyarat = [
  {
    nomor: "1",
    judul: "Lulus Magister Kenotariatan",
    desc:
      "Berijazah sarjana hukum dan lulusan jenjang strata dua kenotariatan atau pendidikan " +
      "spesialis notariat.",
    dasar: "Pasal 2 ayat (1) huruf e Permenkum 22/2025",
  },
  {
    nomor: "2",
    judul: "Magang 24 bulan berturut-turut",
    desc:
      "Menjalani magang atau nyata-nyata bekerja sebagai karyawan Notaris pada kantor Notaris " +
      "selama paling singkat 24 bulan berturut-turut, atas prakarsa sendiri maupun atas " +
      "rekomendasi Organisasi Notaris. Surat keterangannya harus diketahui dan direkomendasikan " +
      "Organisasi Notaris.",
    dasar: "Pasal 2 ayat (1) huruf f dan ayat (2) huruf f Permenkum 22/2025",
  },
  {
    nomor: "3",
    judul: "Sertifikat kode etik",
    desc:
      "Memiliki sertifikat Ujian Kode Etik Notaris (UKEN) yang dikeluarkan Organisasi Notaris, " +
      "atau Sertifikat Computer Assisted Test (CAT) Seleksi Pengangkatan Calon Notaris yang " +
      "dikeluarkan Ditjen AHU. Sertifikat CAT tetap diakui sebagai pengganti UKEN.",
    dasar: "Pasal 2 ayat (3) huruf a Permenkum 22/2025",
  },
];

/**
 * Ketentuan magang, disalin dari rumusan peraturan.
 *
 * HANYA MEMUAT YANG TERTULIS DI DOKUMEN. Versi sebelumnya menyimpulkan bahwa
 * magang ini berbeda dari Sertifikat Magang yang menjadi syarat kelulusan
 * prodi — kesimpulan itu dicabut karena dokumen Ditjen AHU tidak menyebut
 * syarat kelulusan prodi sama sekali, dan "Panduan Magang dan Ujian Magang"
 * prodi belum pernah diterima sehingga durasi maupun waktunya tidak diketahui.
 * Kaitan antara keduanya baru boleh ditulis setelah panduan itu ada.
 */
export const catatanMagang = {
  judul: "Kapan Magang 24 Bulan Dihitung",
  butir: [
    {
      isi:
        "Calon Notaris telah menjalani magang atau nyata-nyata telah bekerja sebagai karyawan " +
        "Notaris dalam waktu paling singkat 24 (dua puluh empat) bulan berturut-turut pada " +
        "kantor Notaris, atas prakarsa sendiri atau atas rekomendasi Organisasi Notaris, " +
        "setelah lulus strata dua kenotariatan.",
      dasar: "Pasal 2 ayat (1) huruf f Permenkum 22/2025",
    },
    {
      isi:
        "Asli surat keterangan magang di kantor Notaris atau keterangan telah bekerja sebagai " +
        "karyawan Notaris harus diketahui oleh Organisasi Notaris dan mendapatkan rekomendasi " +
        "dari Organisasi Notaris, dalam waktu paling singkat 24 (dua puluh empat) bulan " +
        "berturut-turut setelah lulus strata dua kenotariatan atau pendidikan spesialis " +
        "notariat.",
      dasar: "Pasal 2 ayat (2) huruf f Permenkum 22/2025",
    },
  ],
};

/** Pasal 2 ayat (1) Permenkum 22/2025 — delapan syarat pengangkatan. */
export const syaratPengangkatan = [
  "Warga negara Indonesia",
  "Bertakwa kepada Tuhan Yang Maha Esa",
  "Berumur paling sedikit 27 tahun",
  "Sehat jasmani dan rohani",
  "Berijazah sarjana hukum dan lulusan jenjang strata dua kenotariatan",
  "Telah menjalani magang atau nyata-nyata bekerja sebagai karyawan Notaris paling singkat 24 bulan berturut-turut setelah lulus strata dua kenotariatan",
  "Tidak berstatus sebagai pegawai negeri, pejabat negara, advokat, atau memangku jabatan lain yang dilarang undang-undang untuk dirangkap dengan jabatan Notaris",
  "Tidak pernah dijatuhi pidana penjara berdasarkan putusan yang berkekuatan hukum tetap karena tindak pidana yang diancam pidana penjara 5 tahun atau lebih",
];

/** Pasal 2 ayat (2) dan ayat (3) Permenkum 22/2025 — dokumen yang dilampirkan. */
export const dokumenKelompok = [
  {
    judul: "Dokumen pendukung",
    dasar: "Pasal 2 ayat (2) Permenkum 22/2025",
    butir: [
      "Fotokopi kartu tanda penduduk",
      "Fotokopi akta lahir yang telah dilegalisasi",
      "Asli surat keterangan sehat jasmani dari dokter rumah sakit, berlaku paling lama 1 tahun sejak diterbitkan",
      "Asli surat keterangan sehat rohani dari psikiater atau dokter spesialis kejiwaan rumah sakit, berlaku paling lama 1 tahun sejak diterbitkan",
      "Fotokopi ijazah sarjana hukum dan magister kenotariatan atau spesialis notariat yang telah dilegalisasi",
      "Asli surat keterangan magang di kantor Notaris yang diketahui Organisasi Notaris, atau keterangan bekerja sebagai karyawan Notaris yang direkomendasikan Organisasi Notaris, paling singkat 24 bulan berturut-turut setelah lulus",
      "Asli surat pernyataan tidak berstatus sebagai pegawai negeri, pejabat negara, advokat, atau memangku jabatan rangkap yang dilarang, bermeterai Rp10.000",
      "Asli surat keterangan catatan kepolisian setempat yang masih berlaku saat pendaftaran",
    ],
  },
  {
    judul: "Dokumen tambahan",
    dasar: "Pasal 2 ayat (3) Permenkum 22/2025",
    butir: [
      "Fotokopi sertifikat kode etik yang dilegalisir Organisasi Notaris, atau Sertifikat CAT Seleksi Pengangkatan Calon Notaris dari Ditjen AHU",
      "Asli surat pernyataan kesediaan sebagai pemegang protokol, bermeterai Rp10.000",
      "Fotokopi Nomor Pokok Wajib Pajak yang telah dilegalisasi",
    ],
  },
];

/** Tahapan pendaftaran daring melalui ahu.go.id. */
export const tahapanPendaftaran = [
  {
    nomor: "1",
    judul: "Registrasi akun",
    desc:
      "Melalui menu Pendaftaran Notaris di ahu.go.id, mengisi nama, NIK, tanggal lahir, surel, " +
      "serta nama pengguna dan kata sandi. Nama harus sesuai data Dukcapil dan ditulis tanpa " +
      "gelar akademis. Akun diaktifkan lewat tautan yang dikirim ke surel.",
  },
  {
    nomor: "2",
    judul: "Pembayaran biaya akses",
    desc:
      "Pemohon yang akunnya sudah aktif membayar biaya akses melalui menu SIMPADHU. Pembayaran " +
      "sebelum akun aktif berisiko dan tidak menjadi tanggung jawab Ditjen AHU.",
  },
  {
    nomor: "3",
    judul: "Pengisian format isian",
    desc:
      "Masuk dengan akun, memasukkan nomor voucher pembayaran, mengisi format isian, dan memilih " +
      "wilayah kedudukan sesuai kategori daerah yang dibuka. Tidak ada perbaikan setelah format " +
      "isian dikirim.",
  },
  {
    nomor: "4",
    judul: "Unggah dokumen persyaratan",
    desc:
      "Setelah permohonan dikirim, pemohon keluar lalu masuk kembali untuk mengunggah seluruh " +
      "dokumen persyaratan.",
  },
  {
    nomor: "5",
    judul: "Pemeriksaan dokumen",
    desc:
      "Diperiksa oleh 2 korektor dan 1 verifikator. Notifikasi perbaikan dapat muncul lebih dari " +
      "sekali, sehingga akun wajib dicek berkala. Permohonan yang tidak diperbaiki sampai batas " +
      "waktu dinyatakan gagal.",
  },
  {
    nomor: "6",
    judul: "Pembayaran PNBP",
    desc:
      "Pemohon yang lolos verifikasi menerima notifikasi untuk membayar PNBP pengangkatan. " +
      "Pembayaran di luar tanggal yang ditetapkan menyebabkan permohonan ditolak.",
  },
  {
    nomor: "7",
    judul: "Penerbitan SK dan sumpah jabatan",
    desc:
      "Surat Keputusan elektronik diterbitkan serentak dan diunduh melalui akun pemohon. Sumpah " +
      "atau janji jabatan diucapkan di hadapan Menteri atau pejabat yang ditunjuk paling lambat " +
      "2 bulan sejak tanggal SK; bila tidak, SK dapat dibatalkan.",
  },
];

/** Pasal 23 ayat (2) UUJN jo. Permenkum 22/2025 dan Permenkum 17/2025. */
export const pindahWilayah = {
  ringkas:
    "Notaris yang telah menjalankan tugas jabatan pada kabupaten/kota tempat kedudukannya " +
    "selama 3 tahun berturut-turut — tidak termasuk cuti — dapat mengajukan pindah wilayah " +
    "jabatan. Perpindahan dari Kategori Daerah C ke Kategori Daerah A mensyaratkan masa kerja " +
    "4 tahun berturut-turut.",
  dasar:
    "Pasal 23 ayat (2) UUJN jo. Pasal 38 dan Pasal 40 Permenkum 22/2025 jo. Pasal 12 ayat (3) " +
    "dan Pasal 13 Permenkum 17/2025",
  dokumen: [
    "Fotokopi keputusan pengangkatan sebagai Notaris yang telah dilegalisasi",
    "Fotokopi berita acara sumpah/janji jabatan Notaris yang dilegalisasi",
    "Asli surat keterangan dari MPD, MPW, dan MPP tentang konduite Notaris",
    "Asli surat keterangan dari MPD, MPW, atau MPP tentang cuti Notaris",
    "Fotokopi sertifikat cuti",
    "Asli surat rekomendasi dari pengurus daerah, wilayah, dan pusat Organisasi Notaris",
    "Asli surat keterangan dari MPD bahwa seluruh kewajiban sebagai Notaris telah diselesaikan",
    "Asli surat penunjukan dari MPD kepada Notaris lain sebagai pemegang protokol",
  ],
};

/**
 * Tarif PNBP.
 *
 * Angka ini berlaku pada siklus 2025 dan mengikuti PP Nomor 45 Tahun 2024.
 * Selalu tampilkan bersama keterangan tahunnya — tarif dapat direvisi.
 */
export const biaya = {
  dasar: "PP Nomor 45 Tahun 2024 tentang Penerimaan Negara Bukan Pajak, tarif pada siklus 2025",
  butir: [
    { jenis: "Biaya akses pendaftaran", tarif: "Rp200.000" },
    { jenis: "PNBP pengangkatan Notaris", tarif: "Rp1.500.000" },
    { jenis: "Pindah wilayah Kategori A", tarif: "Rp100.000.000" },
    { jenis: "Pindah wilayah Kategori B", tarif: "Rp50.000.000" },
    { jenis: "Pindah wilayah Kategori C", tarif: "Rp25.000.000" },
    { jenis: "Pindah wilayah Kategori C ke A", tarif: "Rp150.000.000" },
  ],
  catatan:
    "Di luar tarif PNBP tersebut, proses pengangkatan dan pindah wilayah jabatan Notaris tidak " +
    "dikenakan biaya apa pun.",
};

/** Peraturan yang menjadi dasar seluruh ketentuan di halaman ini. */
export const dasarHukum = [
  "Undang-Undang Nomor 30 Tahun 2004 tentang Jabatan Notaris sebagaimana diubah dengan Undang-Undang Nomor 2 Tahun 2014",
  "Peraturan Menteri Hukum Nomor 17 Tahun 2025 tentang Formasi Jabatan Notaris dan Penentuan Kategori Daerah",
  "Peraturan Menteri Hukum Nomor 22 Tahun 2025 tentang Syarat dan Tata Cara Pengangkatan, Cuti, Pindah Wilayah, Pemberhentian, dan Perpanjangan Masa Jabatan Notaris",
  "Peraturan Pemerintah Nomor 45 Tahun 2024 tentang Penerimaan Negara Bukan Pajak",
];
