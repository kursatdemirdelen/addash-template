# Addash — Modern Yönetim Paneli Şablonu

<div align="left">
  <a href="README.md"><strong>English</strong></a> · <a href="README.tr.md"><strong>Türkçe</strong></a>
</div>

<br />

**Next.js 16 (Turbopack)**, **React 19** ve **Tailwind CSS v4** ile inşa edilmiş; hızlı, sade, çok amaçlı açık kaynaklı yönetim paneli başlangıç şablonu (starter template). MIT lisansı ile tamamen ücretsizdir.

> SaaS uygulamaları, şirket içi yönetim araçları, analitik platformları, içerik yönetim sistemleri (CMS), müşteri ilişkileri (CRM) veya müşteri portalları gibi her türlü yönetim arayüzü için en temiz ve en genişletilebilir başlangıç noktası olarak tasarlandı.

---

## ✨ Özellikler & 12 Gerçekçi Arayüz Modeli

Addash yalnızca tek bir gösterge paneli değil, modern yönetim panellerinde ihtiyaç duyulan tüm arayüz modellerini içerir:

1. **Kontrol Paneli (`/dashboard`)** — Operasyonel iş akışı görünümü, ekip nabzı sayaçları, mini grafikli (sparkline) özelleştirilebilir KPI kartları, aktif ekip avatarları ve son aktiviteler akışı.
2. **Analitik (`/analytics`)** — 6 metrikli yatay skorkart, çift grafik (alan gelir trendi + aylık net kâr/gider sütun grafiği) ve kâr marjı ilerleme çubuklu detaylı dönem tablosu.
3. **Görevler (`/tasks`)** — Kanban panosu modeli; kolonlar (*Yapılacak, Devam Ediyor, Tamamlandı*), öncelik etiketleri, görevli avatarları ve son teslim tarihleri.
4. **Mesajlar (`/messages`)** — Bölünmüş görünüm (split-view) gelen kutusu modeli; arama filtresi, okundu/okunmadı durumları, yıldızlı mesajlar, etiketler ve doğrudan hızlı yanıt çubuğu.
5. **Dosyalar (`/files`)** — Liste/ızgara görünüm seçeneği, kota ilerleme çubuğu, dosya tipi ikonları ve paylaşım göstergeleri içeren bulut dosya yöneticisi.
6. **İçerikler (`/posts`)** — Durum sekmeleri (*Yayında, Taslak, Zamanlandı*), kelime sayısı, okuma süresi ve yazar avatarları içeren CMS / blog tablosu.
7. **Ürünler (`/products`)** — Ürün görsel önizlemeleri, envanter doluluk çubukları ve stok durumu rozetleri içeren e-ticaret katalog modeli.
8. **Müşteriler (`/customers`)** — Hesap kademeleri (*Enterprise, Pro, Starter*), aylık gelir (MRR) takibi, durum rozetleri ve iletişim aksiyonları sunan CRM dizini.
9. **Ekip Yönetimi (`/users`)** — Arama, sıralama, durum hapları ve detay çekmeceleri içeren kullanıcı listesi tablosu.
10. **Roller & Yetkiler (`/roles`)** — Rol özet kartları ve gruplandırılmış tam RBAC (Role-Based Access Control) yetki matrisi.
11. **Bildirimler (`/notifications`)** — Zaman çizgisiyle gruplandırılmış (*Bugün, Dün, Bu Hafta*), tek tıkla okundu işaretleme ve tip rozetleri içeren bildirim merkezi.
12. **Ayarlar (`/settings`)** — Genel profil, hesap güvenlik anahtarları (passkey) ve çalışma alanını silme (danger zone) sekmeleri.

---

## 🎨 Tasarım Sistemi & 5 Hazır Tema

İnce 1px sınır çizgileri (hairline borders), yapay gölgelerden arındırılmış düz yüzeyler ve yüksek kontrastlı tipografi ile zenginleştirilmiş gazete / editoryal broadsheet tasarım dili:

| Token | Varsayılan Renk | Anlam ve Kullanım Amacı |
|---|---|---|
| `parchment` | `#dbdad7` | Tuval arka planı ve 1px ince sınır çizgileri |
| `paper` | `#ffffff` | Yükseltilmiş kart ve form yüzeyleri |
| `sand` | `#e6e4e0` | Hover durumları, sekmeler, tablo başlıkları |
| `ink` | `#121212` | Yüksek kontrastlı ana metin ve başlıklar |
| `smoke` | `#616161` | İkincil etiketler, zaman damgaları, yumuşak sınırlar |
| `charcoal` | `#18181b` | Koyu renkli ana buton dolguları |
| `moss` | `#22c55e` | Aktif durum, başarı göstergeleri, Üye (Member) rolü |
| `amber` | `#f59e0b` | Uyarılar, bekleyen durumlar, Analist (Analyst) rolü |
| `rose` | `#f43f5e` | Hatalar, yüksek öncelik, tehlikeli bölge |
| `sky` | `#0ea5e9` | Bilgi rozetleri, bağlantılar, Editör (Editor) rolü |
| `violet` | `#8b5cf6` | Yönetici (Admin) rolü, öne çıkan özellikler |

### 🌗 Anında Tema Değişimi
Üst başlıktaki palet butonunu kullanarak veya `<html>` etiketine `data-theme` vererek 5 tema arasında sayfa yenilenmeden geçiş yapabilirsiniz:

- **Warm** (Varsayılan) — Sıcak parşömen kağıdı ve koyu mürekkep tipografisi.
- **Dark** — Sıfır göz yorulması sağlayan koyu antrasit ve net sınırlar.
- **Ocean** — Serin arduvaz ve deniz mavisi tonları.
- **Forest** — Çam ve adaçayı yeşili doğal vurgular.
- **Rose** — Editoryal pudra zemin ve bordo kontrastı.

> **Semantik Tutarlılık**: Temalar sadece zemin ve yüzey token'larını (`parchment`, `paper`, `sand`, `ink`, `smoke`) değiştirir. Semantik durum renkleri (Aktif = Yeşil, Askıda = Kırmızı vb.) seçilen temadan bağımsız olarak sabit ve tutarlı kalır.

---

## 🌐 Tam Kapsamlı Dil Desteği (i18n)

Addash, harici kütüphane bağımlılığı olmayan, hafif ve tam tip güvenli bir uluslararasılaştırma sistemine sahiptir:
- **Diller**: Türkçe (`TR`) ve İngilizce (`EN`) doğrudan hazırdır.
- **Hızlı Seçici**: Üst menüde tema paletinin yanında yer alan Dünya ikonu butonu (`[ 🌐 TR ]` / `[ 🌐 EN ]`).
- **Sıfır Sayfa Yenilemesi**: Zustand ve `localStorage` kalıcılığı ile çalışır, sayfa yenilenmeden tüm arayüz anında güncellenir.
- **Uçtan Uca Kapsam**: Tüm 12 sayfa, breadcrumbs, tablo başlıkları, sayfalama göstergeleri ve form alanları yerelleştirilmiştir.
- **Kolayca Genişletilebilir**: `src/locales/` klasörü altına `Dictionary` arayüzünü uygulayan yeni bir dosya (örneğin `de.ts`) ekleyerek dakikalar içinde yeni bir dil tanımlayabilirsiniz.

---

## 🚀 Hızlı Komut Paleti (`⌘K` / `/`)

Klavyeden `⌘K` (veya `Ctrl+K` ya da üst başlıktaki "Hızlı geçiş…" kutusuna) basarak klavye odaklı komut paletini açabilirsiniz:
- **Klavye Kontrolü**: `↑` / `↓` ok tuşları ile gezin, `Enter` ile seç, `ESC` ile kapat.
- **Çift Dilli Arama**: Türkçe veya İngilizce anahtar kelimelerle 12 sayfadan herhangi birine anında atlayın (*"görev"*, *"tasks"*, *"katalog"*, *"products"*, *"analitik"*, vb.).
- **Donanım İvmeli Performans**: GPU yükü oluşturan bulanıklık filtreleri temizlenerek 60+ FPS yağ gibi akıcı açılış hızına optimize edilmiştir.

---

## 📁 Proje Mimarisi

```
src/
├── app/                    # Next.js 16 App Router (19 rota)
│   ├── (auth)/login/       # Giriş sayfası
│   └── (dashboard)/        # Çalışma alanı sayfaları
│       ├── dashboard/      # Operasyonel özet
│       ├── analytics/      # Detaylı grafikler ve dönem tablosu
│       ├── tasks/          # Kanban panosu
│       ├── messages/       # Gelen kutusu (inbox)
│       ├── files/          # Dosya yöneticisi ve bulut depolama
│       ├── posts/          # İçerik ve CMS yönetimi
│       ├── products/       # Ürün ve stok kataloğu
│       ├── customers/      # CRM müşteri rehberi
│       ├── users/          # Ekip üyeleri ve kullanıcı detayları
│       ├── roles/          # Yetki matrisi (RBAC)
│       ├── notifications/  # Bildirim merkezi
│       └── settings/       # Profil ve hesap ayarları
├── components/
│   ├── ui/                 # Temel bileşenler (Button, Card, Badge, RoleBadge, Dialog...)
│   ├── layout/             # AppShell, Sidebar, Header, ThemeSwitcher, LanguageSwitcher
│   ├── data-display/       # StatCard, DataTable, Metric
│   └── navigation/         # NavItem, Breadcrumbs, UserMenu
├── features/               # Özellik bazlı modüller (sayfalar, tablolar, widget'lar)
├── config/
│   ├── site.ts             # Genel site kimliği ve kullanıcı profili
│   ├── navigation.ts       # Yerelleştirilmiş menü konfigürasyonu
│   └── roles.ts            # Standartlaştırılmış rol tanımları
├── hooks/
│   └── use-translation.ts  # Tip güvenli i18n çeviri kancası
├── locales/                # Sözlükler (en.ts, tr.ts, types.ts)
├── lib/
│   ├── utils.ts            # Sınıf birleştirici (cn) ve para/tarih formatlayıcılar
│   └── mock-data/          # Modüler örnek veri setleri
├── store/
│   └── app-store.ts        # Zustand: sidebar, tema ve dil kalıcılığı
└── types/                  # Ortak TypeScript tip tanımları
```

---

## 🛠️ Hızlı Başlangıç

### Gereksinimler
- **Node.js**: v18.18.0 veya daha yenisi
- **Paket Yöneticisi**: npm, pnpm veya yarn

### Kurulum

```bash
# Depoyu klonlayın
git clone https://github.com/kullanici-adiniz/addash-template.git
cd addash-template

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın (Turbopack ile)
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

### Canlıya Hazırlama (Build)

```bash
npm run build
npm run start
```

---

## 🤝 Katkıda Bulunma ve Özelleştirme

Addash, geliştiricilerin hızlıca kendi projelerine uyarlayabilmesi için modüler şekilde inşa edilmiştir:
- Renk paletini ve temaları özelleştirmek için `src/app/globals.css` dosyasını düzenleyin.
- Yeni diller eklemek için `src/locales/` altına yeni bir sözlük tanımlayın.
- Yeni sayfalar eklemek için `src/features/` altında bir modül oluşturup rotasını `src/config/navigation.ts` dosyasına bağlayın.

---

## 👨‍💻 Geliştirici

**[Ahmet Kürşat](https://ahmetkursat.com)** tarafından özenle geliştirildi.

---

## 📄 Lisans

Bu proje açık kaynaklıdır ve [MIT Lisansı](LICENSE) kapsamında ücretsiz olarak dağıtılmaktadır.
