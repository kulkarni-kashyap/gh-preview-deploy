var a={cancel:"Batal",update:"Perbarui",to:"hingga"},e={add:"Tambah",cancel:"Batal"},i={text:"Unggah berkas",description:"atau tarik dan jatuhkan di sini",acceptError:"Format berkas tidak diterima",maxFileSizeError:"Melampaui ukuran maksimum berkas",maxFilesLimitError:"Melampaui batasan maksimum berkas",fileUploadError:"Pengunggahan berkas gagal",uploading:"Mengunggah",selectedFiles:"Berkas terpilih",remove:"buang"},n={cancel:"Batal",ok:"Oke"},d={search:"Cari",noItemsFound:"Item tidak ditemukan",noDataAvailable:"Data tidak tersedia"},t={required:"{{field}} wajib diisi",invalidUrl:"Masukkan URL yang valid",invalidEmail:"Masukkan alamat surel yang valid",invalidNumber:"Masukkan nomor yang valid"},l={buttonGroupLabel:"Kontrol paginasi",previousButtonLabel:"Sebelumnya",nextButtonLabel:"Lanjut",content:"<span class='record'>{{start}}</span> hingga <span class='record'>{{end}}</span> dari {{total}}"},r={chooseColumns:"Pilih kolom",actions:"Tindakan",hide:"Sembunyikan",show:"Munculkan"},u={delete:"Hapus",sortby:"Susun menurut",orderby:"Order menurut"},o={fieldRequired:"Diperlukan ketika mengirimkan formulir",fieldRequiredTag:"Diperlukan",fieldUnique:"Terima nilai unik",fieldUniqueHoverText:"Jika diatur, sistem tidak akan membiarkan dua rekor memiliki nilai yang sama untuk bidang tersebut. Perhatikan bahwa perilaku ini tidak dapat diperbarui setelah bidang dibuat.",fieldUniqueTag:"Unik",fieldFilter:"Tampilkan dalam filter",fieldFilterHoverText:"Jika diatur, Anda dapat memfilter pandangan daftar rekor menggunakan bidang ini. Perhatikan bahwa perilaku ini tidak dapat diperbarui setelah bidang dibuat.",fieldFilterTag:"Dapat difilter",fieldTypeRelationship:"Hubungan Lookup",fieldTypeRelationshipDesc:"Buat hubungan antarobjek menggunakan bidang lookup",fieldTypeRelationshipDescHoverText:"Bidang ini akan memungkinkan pengguna untuk mengeklik ikon lookup untuk memilih nilai dari daftar. Objek target adalah sumber nilai dalam daftar.",fieldTypeText:"Teks",fieldTypeParagraph:"Paragraf",fieldTypeNumber:"Nomor",fieldTypeDecimal:"Desimal",fieldTypeDate:"Tanggal",fieldTypeDropdown:"Drop-down",fieldTypeCheckbox:"Kotak centang",fieldTypeMultiselect:"Multipilihan",lookupUniqueTag:"Unik",primaryFieldTag:"Bidang Utama",primaryFieldHeader:"Bidang Utama",primaryFieldNameHint:"Ini adalah bidang utama objek dan tidak dapat dihapus. Ini dimaksudkan untuk menjadi representasi unik setiap rekor dan akan muncul dalam lookup dan hasil pencarian.",deleteFieldTitle:"Anda yakin ingin menghapus bidang tersebut",deleteFieldMessage:"Bidang ini akan dihapus secara permanen dan semua data terkait akan hilang. Anda masih ingin melanjutkan?",deleteFieldSubmit:"Hapus",searchFields:"Cari Bidang",customizeWidget:"Sesuaikan Widget",addChoices:"Tambah Pilihan",addChoice:"Tambah Pilihan",choicePlaceholderSuffix:"Pilihan",headerFieldTypes:"Tipe bidang",headerFields:"Bidang",fieldTypesDragDrop:"Tarik dan jatuhkan dari sini",behaviour:"Perilaku",fieldLabel:"Bidang Label",fieldLabelPlaceholder:"Masukkan label bidang",addFieldBtn:"Tambah Bidang",saveFieldBtn:"Simpan",cancelFieldBtn:"Batal",disabledFilterCheck:"Bidang unik akan selalu tersedia untuk memfilter rekor dalam pandangan daftar",lookupSourceObject:"Objek sumber",lookupRelationshipPlaceholder:"Pilih hubungan",lookupRelationshipLabel:"Tipe hubungan",lookupTargetPlaceholder:"Pilih objek target",lookupTargetLabel:"Objek target",dropdownChoiceDeleteMessage:"Menghapus pilihan akan memengaruhi tiket, otomatisasi, dan laporan terkait.",relationshipManyToOne:"Banyak ke satu",relationshipManyToOneDesc:"Tautkan banyak rekor dari objek sumber dengan satu rekor dari objek target, mis. banyak tiket dapat dibuat oleh satu pelanggan.",relationshipOneToOne:"Satu ke satu",relationshipOneToOneDesc:"Tautkan satu rekor objek sumber dengan hanya satu rekor objek target, mis. satu orang hanya dapat memiliki satu paspor.",customizeWidgetModalHeader:"Sesuaikan Widget",customizeWidgetModalHint:"Pilih hingga 5 bidang untuk ditampilkan di widget dan hasil pencarian",customizeWidgetModalSaveBtn:"Simpan",customizeWidgetModalCancelBtn:"Batal",noSearchItemsFound:"Tidak ditemukan bidang yang cocok!",errors:{emptyFieldName:"Label bidang adalah wajib!",emptyRelationshipType:"Tipe hubungan adalah wajib!",emptyTargetObject:"Objek target adalah wajib!",emptyChoice:"Teks pilihan adalah wajib!",duplicate:"Pilihan drop-down sudah ada!",minimum:"Masukkan minimum satu pilihan!",formErrors:"Formulir berisi kesalahan!",fieldNameExists:"Bidang dengan label yang sama sudah ada!"},maximumLimits:{filterable:"Maksimum 25 bidang dapat digunakan untuk memfilter rekor dalam pandangan daftar.",unique:"Maksimum 5 bidang dapat ditandai sebagai unik.",fields:"Mencapai batas maksimum 100 bidang. Hapus bidang yang ada untuk membuat yang baru.",lookups:"Mencapai batas maksimum 5 bidang lookup. Hapus bidang lookup yang ada untuk membuat yang baru."}},k={title:"Filter",addFilter:"Tambah Filter",noFilter:"Anda belum menambahkan filter apa pun",validation:{required:"Bidang Wajib Diisi",minMax:"Harus lebih dari {{fromValue}}"},placeholder:{startRange:"Rentang Mulai",endRange:"Rentang Selesai",and:"dan"}},s={placeholder:{search:"Ketik untuk mencari"}},m={datepicker:a,dropdown:e,fileUploader:i,modal:n,search:d,form:t,pagination:l,datatable:r,platformTable:u,formBuilder:o,filters:k,searchDropdown:s};export default m;export{r as datatable,a as datepicker,e as dropdown,i as fileUploader,k as filters,t as form,o as formBuilder,n as modal,l as pagination,u as platformTable,d as search,s as searchDropdown}