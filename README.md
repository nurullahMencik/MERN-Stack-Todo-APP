# TODO APP



Bu proje aşağıdaki ana teknolojileri kullanmaktadır:

### Frontend (Client)

* **React:** Kullanıcı arayüzleri oluşturmak için bir JavaScript kütüphanesi.
* **Vite:** Hızlı geliştirme deneyimi sağlayan bir build aracı (React ile kullanılıyorsa).
* **[State Yönetimi Kütüphanesi, örn: Redux / Zustand / Context API]:** Uygulama durumu yönetimi için.
* **Axios / Fetch API:** Backend ile iletişim kurmak için HTTP istemcisi.
* **[CSS Çerçevesi / Önişlemci, örn: Sass/SCSS, Tailwind CSS]:** Stillendirme için.

### Backend (Server)

* **Node.js:** Sunucu tarafı JavaScript çalışma ortamı.
* **Express.js:** Node.js için web uygulaması çatısı (API oluşturmak için).
* **MongoDB:** NoSQL veri tabanı.
* **Mongoose:** MongoDB ile Node.js arasında kolay etkileşim sağlayan ODM (Object Data Modeling) kütüphanesi.
* **CORS:** Çapraz kaynak isteklere izin vermek için.

``````├── client/                     # Frontend uygulaması
│   ├── public/                 # Statik dosyalar
│   ├── src/                    # Frontend kaynak kodları
│   │   ├── components/         # Tekrar kullanılabilir UI bileşenleri
│   │   │   ├── AddModal.jsx    # Yeni görev ekleme modalı
│   │   │   ├── EditModal.jsx   # Görev düzenleme modalı
│   │   │   ├── ListItem.jsx    # Tek bir görev öğesi
│   │   │   ├── ListItems.jsx   # Görev listesini gösteren bileşen
│   │   │   ├── Todo.jsx        # ToDo ana bileşeni
│   │   │   └── Topbar.jsx      # Üst menü çubuğu
│   │   ├── stores/             # State yönetimi ile ilgili dosyalar (örn: Redux, Zustand, Context API)
│   │   ├── scss/               # Stil dosyaları (Sass/SCSS)
│   │   ├── App.jsx             # Ana uygulama bileşeni
│   │   ├── main.jsx            # Uygulama giriş noktası
│   │   └── index.css / App.css # Ana stil dosyaları
│   ├── .gitignore              # Git tarafından yoksayılacak dosyalar
│   ├── eslint.config.js        # ESLint yapılandırması
│   ├── index.html              # Frontend ana HTML dosyası
│   ├── package.json            # Frontend bağımlılıkları ve scriptleri
│   ├── vite.config.js          # Vite yapılandırması (eğer Vite kullanılıyorsa)
│   └── README.md               # Frontend'e özel README (isteğe bağlı)
├── server/                     # Backend uygulaması
│   ├── help/                   # Yardımcı dosyalar veya dokümantasyon
│   ├── models/                 # MongoDB şemaları (Mongoose modelleri)
│   │   └── TodoModel.js        # ToDo modeli
│   ├── routes/                 # API rotaları
│   │   ├── AddRouter.js        # Ekleme rotaları
│   │   ├── DeleteRouter.js     # Silme rotaları
│   │   ├── EditRouter.js       # Düzenleme rotaları
│   │   └── MainRouter.js       # Ana rotalar
│   ├── .env.example            # Ortam değişkenleri örnek dosyası
│   ├── .gitignore              # Git tarafından yoksayılacak dosyalar
│   ├── package.json            # Backend bağımlılıkları ve scriptleri
│   └── server.js / app.js      # Backend ana uygulama dosyası
├── .gitignore                  # Proje kök dizini için Git yoksayma dosyası
├── package.json                # Proje genel bağımlılıkları (isteğe bağlı)
└── README.md                   # Bu dosya``````
